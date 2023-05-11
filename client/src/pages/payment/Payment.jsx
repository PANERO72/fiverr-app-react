import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import './Peyment.scss';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from '../../utils/newRequest';

const stripePromise = loadStripe("pk_test_Dt4ZBItXSZT1EzmOd8yCxonL");

function Payment() {
  const [clientSecret, setClientSecret] = useState("");

  const {id} = useParams();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const makeRequest = async () => {
      try {
       const res = await newRequest.post(`/orders/create-payment-intent${id}`);
       setClientSecret(res.data.clientSecret);
      } catch (error) {
        console.log(error);
      }
    };
    makeRequest();
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className='paymentContainer'>
        <div className="paymentWrapper">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
        </div>
    </div>
  )
}

export default Payment;