import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51LoSWADtzvuTa9q7UVng6yVvrpKTQWKYuAWsTAMjWoouy4lOLVBqLgPXWKkVTk0vJEH5RkEkpTDaxDy3wISQUJ6z002izVUHxo');

const Payment = () => {
        const {id} = useParams();
       
        const url = `https://technical-backend-code.vercel.app/collectOrder/${id}`
        const {data,isLoading} = useQuery(['collectOrder',id],() => fetch(url,{
            method: 'GET',
            headers:{
                'authorization': `Bearer ${localStorage.getItem('acessToken')}`
            }
        }).then(res =>res.json()));
        if(isLoading){
           return <Loading></Loading>
        }
    return (
     <div>
           <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Your Payment</h2>
          <p>Please your payment is book!</p>
          <span>{data.price}</span>
          
        </div>
      </div>
           <div class="card mt-6 w-96 bg-base-100 shadow-xl">
        <div class="card-body">
        <Elements stripe={stripePromise}>
      <CheckoutForm data={data}  />
    </Elements>
        
          
        </div>
      </div>
     </div>
     
       
      
    );
};

export default Payment;