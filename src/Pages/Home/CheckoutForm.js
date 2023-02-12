import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../Shared/Loading';

const CheckoutForm = ({data}) => {
    const stripe = useStripe();
    const elements = useElements();
  const [cardError,setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);
    const {price}= data;
    
    useEffect(() => {
       
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: { 
            "content-type": "application/json",
          'authorization': `Bearer ${localStorage.getItem('acessToken')}` 
        },
          body: JSON.stringify({price})
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
          if(data?.clientSecret){

            setClientSecret(data?.clientSecret)
          }
          });
      }, [price]);
        const handleSubmit = async(event) =>{
            event.preventDefault();
            if(!stripe || !elements){
                return ;
            }
            const card = elements.getElement(CardElement);
            if(card === null){
                return ;
}   
            const {error,paymentMethod} = await stripe.createPaymentMethod({
                type: 'card',
                card
            });
        if(error){
         
          setCardError(error?.message);

        }
        else{
          setCardError('');
        }
               
               }
    return (
       <>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-primary' type="submit" disabled={!stripe || !clientSecret }>
      {/* || !clientSecret */}
        Pay
      </button>
    </form>
    {
       loading && <Loading></Loading>
    },
    {
     

    cardError && <p className='text-red-500'>{cardError}</p>
    
    }
    
    </>
    );
};

export default CheckoutForm;