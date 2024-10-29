import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useClass from "../../../Hooks/useClass";
// import './CheckoutForm.css';

const CheckoutForm = ({ price, id }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [selectedClass, refetch] = useClass();

  const [transectionId, setTransectionId] = useState("");
  const [paymentedClass, setPaymentedClass] = useState({});
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setCardError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(localStorage.getItem("client"), {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log("payment intent", paymentIntent);

    if (paymentIntent?.status === "succeeded") {
      const transactionId = paymentIntent.id;
      setTransectionId(transactionId);
      // fetch(`http://localhost:5000/paymentedClass/${id}`, { method: "GET" })
      //   .then((res) => {
      //     if (!res.ok) {
      //       throw new Error("Network response was not ok");
      //     }
      //     return res.json();
      //   })
      //   .then((data) => {
      //     setPaymentedClass(data);
      //     setLoading(false);
      //   })
      //   .catch((error) => {
      //     console.error("Error fetching data:", error);
      //     setLoading(false);
      //   }); // Storing class data for potential use

      // // Step 2: Save successfully admitted class to "My Admitted Class" collection in backend
      // fetch("http://localhost:5000/admittedclasses", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     ...paymentedClass,
      //     transactionId,
      //     userEmail: user?.email,
      //   }),
      // });

      // fetch(
      //   `https://assignment-twelve-server-zeta.vercel.app/selectedclass/${id}`,
      //   {
      //     method: "DELETE",
      //   }
      // )
      //   .then((res) => res.json())
      //   .then((data) => {
      //     if (data.deletedCount > 0) {
      //       refetch();
      //       //   Swal.fire("Deleted!", "Your data has been deleted.", "success");
      //     }
      //   });

      try {
        const response = await fetch(
          `http://localhost:5000/paymentedClass/${id}`,
          { method: "GET" }
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setPaymentedClass(data);
        setLoading(false);

        await fetch("http://localhost:5000/admittedclasses", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...data,
            transactionId,
            userEmail: user?.email,
          }),
        });

        await fetch(`http://localhost:5000/selectedclass/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
            }
          });
      } catch (error) {
        console.error("Error in fetch requests:", error);
      }
    }
  };
  console.log(id);
  //   const handelDelete = (id) => {
  //     fetch(
  //       `https://assignment-twelve-server-zeta.vercel.app/selectedclass/${id}`,
  //       {
  //         method: "DELETE",
  //       }
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.deletedCount > 0) {
  //           refetch();
  //           //   Swal.fire("Deleted!", "Your data has been deleted.", "success");
  //         }
  //       });
  //   };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-primary btn-outline btn-sm" type="submit">
          Pay
        </button>
      </form>

      {cardError && <p className="text-red-500">{cardError}</p>}
      {transectionId && (
        <p className="text-green-500">Transection is completed</p>
      )}
    </>
  );
};

export default CheckoutForm;
