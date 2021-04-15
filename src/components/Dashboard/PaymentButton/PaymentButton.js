import React from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from 'react';

const PaymentButton = ({handlePaymentSuccess}) => {
    const stripe = useStripe();
    const elements = useElements();
  

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);


    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const cardElement = elements.getElement(CardElement);
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
  
      if (error) {
        setPaymentError(error.message);
        setPaymentSuccess(null);
    } else {
        setPaymentSuccess(paymentMethod.id);
        setPaymentError(null);
        handlePaymentSuccess(paymentMethod.id);
    }
    };

    const CARD_OPTIONS = {
        iconStyle: "solid",
        style: {
          base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": {
              color: "#fce883"
            },
            "::placeholder": {
              color: "#87bbfd"
            }
          },
          invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
          }
        }
      };
  
    return (
      <div>
          <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" style={{width:'100px'}} disabled={!stripe}>
          Pay
        </button>
      </form>
      {
        paymentError && <p className="text-center" style={{color:'red'}}>{paymentError}</p>    
    }
    {
        paymentSuccess && <p className="text-center" style={{color:'green'}}>Your Payment Was Successful</p>    
    }
      </div>
    );
};

export default PaymentButton;