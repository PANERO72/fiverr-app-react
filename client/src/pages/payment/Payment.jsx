import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import './Peyment.scss';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from '../../utils/newRequest';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import i18n from '../../i18n';

// const REACT_APP_STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY;

const stripePromise = loadStripe("pk_test_51LxZ7oCPYYMpnnZlsT3zFCndG51zeVKj3puS58f1DDIrrjNGEDi40OEPDZLaL19ZlWTy6vT9v7iakO8f2BTG94xU009pcx06bb");
// const stripePromise = loadStripe(REACT_APP_STRIPE_KEY);

function Payment() {
  const [clientSecret, setClientSecret] = useState("");

  const {id} = useParams();

  let idioma;

  if (i18n.language === "cat") {
    idioma = "ca";
  } else if(i18n.language === "de") {
    idioma = "de";
  } else if(i18n.language === "en") {
    idioma = "en";
  }else if(i18n.language === "es") {
    idioma = "es";
  }

  useEffect(() => {

    // Create PaymentIntent as soon as the page loads
    const makeRequest = async () => {
      try {
       const res = await newRequest.post(`/orders/create-payment-intent/${id}`);
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
    locale: idioma,
  
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