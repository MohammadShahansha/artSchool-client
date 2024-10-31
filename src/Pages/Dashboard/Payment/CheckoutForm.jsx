import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useClass from "../../../Hooks/useClass";
import { useNavigate } from "react-router-dom";
// import './CheckoutForm.css';

const CheckoutForm = ({ price, id }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [selectedClass, refetch] = useClass();
  const navigate = useNavigate();

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

      try {
        const response = await fetch(
          `https://assignment-twelve-server-zeta.vercel.app/paymentedClass/${id}`,
          { method: "GET" }
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setPaymentedClass(data);
        setLoading(false);

        await fetch(
          "https://assignment-twelve-server-zeta.vercel.app/admittedclasses",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...data,
              transactionId,
              userEmail: user?.email,
            }),
          }
        );

        await fetch(
          `https://assignment-twelve-server-zeta.vercel.app/selectedclass/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              navigate("/dashboard/my-class");
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
