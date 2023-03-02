import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';


const CheckoutForm = ({data}) => {
    const stripe = useStripe();
    const elements = useElements();
   
  const [cardError,setCardError] = useState('');
  const [success,setSuccess] = useState('');
  const [loading,setLoading] = useState(false);
  const [transactionId,setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    
    const {_id,price,email,product,date}= data;
    
    useEffect(() => {
       
        fetch("https://technical-backend-code.vercel.app/create-payment-intent", {
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
        
         
          setCardError(error?.message || '' );
          setSuccess('');
          setLoading(true);

        
      
        // confirm card payment
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                
                name: product,
                email:email,

              },
            },
          },
        );
        if(intentError){
          setCardError(intentError?.message);
          

        }
              else{
                setCardError('');
                setTransactionId(paymentIntent.id);
                setSuccess('congrats');
                // store payment on database
                const payment ={
                  date:date,
                  email:email,
                  product: _id,
                  productName:product,
                  price:price,
                  transactionId:paymentIntent.id,
                  
                }
                fetch(`https://technical-backend-code.vercel.app/collectOrder/${_id}`,{
                  method: 'PATCH',
                  headers:{
                    "content-type": "application/json",
                    'authorization': `Bearer ${localStorage.getItem('acessToken')}` 
                  },
                  body:JSON.stringify(payment)
                }).then(res =>res.json())
                .then(data =>{
                  setLoading(false);
                  console.log(data) ;               })
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
     

    cardError && <p className='text-red-500'>{cardError}</p>
    
    }
     {
       success && <div className='text-green-500'>
        <p>{success} </p>
        <p>Your Transaction Id: <span>{transactionId}</span></p>

       
       
       
       
       
        </div>
    }
    
    </>
    );
};

export default CheckoutForm;