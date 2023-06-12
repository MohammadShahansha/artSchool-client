import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useClass from '../../../Hooks/useClass';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
    const [selectedClass] = useClass();
    const price =localStorage.getItem('price');

    return (
        <div>
            <h2 className='text-3xl text-center font-semibold mb-5'>PAYMENT using Stripe</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price = {price}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;