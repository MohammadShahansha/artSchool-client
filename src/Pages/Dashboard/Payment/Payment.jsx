import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useClass from '../../../Hooks/useClass';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
    const [selectedClass] = useClass();
    const totalPrice = selectedClass.reduce((sum, seClass) => sum + seClass.price, 0);
    const price = parseFloat(totalPrice.toFixed(2))
    return (
        <div>
            <h2>taka mor cinimini kore-----------------------</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price = {price}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;