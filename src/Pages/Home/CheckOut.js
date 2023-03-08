import React from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useState } from 'react';
import { format } from 'date-fns';

const CheckOut = (props) => {
    const {productId} = useParams();
    const [products] = useProducts(productId);
    const [user] = useAuthState(auth);
    const [date, setDate]= useState(new Date());
    const formattedDate = format(date, 'PP');

    const handleOrder=(event)=>{
        event.preventDefault();
        const order = {
            date:formattedDate,
            email:user.email,
            product: products.name,
            productId: productId,
            price:products.price,
            address: event.target.address.value,
            phone:event.target.phone.value
        }
        axios.post('https://technical-backend-code.vercel.app/collectOrder',order)
        .then(res=>{
            const {data} = res;
            console.log(data);
            if(data.success){
                toast(`appointent is set,${formattedDate}`)
            }

            else if(data.insertedId){
                toast('Your order is booked');
                
                event.target.reset();
            }
            else{
                toast.error(`appointent is set,${data.order?.date}`);
            }
            

        })
      
        

    }
    return (
     <section className=' w-80 lg:w-96 lg:flex gap-48 mx-auto lg:mx-80 mt-10  '>
    <div>
    <div className='text-lg italic font-medium text-amber-400'>
    <p>Have a Nice Day, Today: {format(date,'PP')}</p>  
    </div>
    <div className= 'border-2 drop-shadow-xl rounded-lg border-sky-200 bg-base-200 mt-4'>
  
    <DayPicker 
    mode="single"
    selected={date}
    onSelect={setDate}
    />
   


    </div>
    
    </div>
           <div className=''>
        <h2 className='text-xl italic font-medium text-amber-400'>Your choice Order</h2>
        <form className='mt-4 w-72 lg:w-96' onSubmit={handleOrder}>
            <input className='border-2  border-orange-400 border-double rounded-full px-3 py-3 mb-2' value={formattedDate} type="text" name="name" required readOnly disabled/>
            <br />
            <input className='border-2  border-orange-400 border-double rounded-full px-3 py-3 mb-2' value={user?.displayName} type="text" name="name" placeholder='Your order name' required readOnly disabled/>
            <br />
            <input className='border-2  border-orange-400 border-double rounded-full px-3 py-3 mb-2' value={user?.email} type="email" name="email" placeholder='Your email'  required readOnly  />
            <br />
            <textarea className='border-2  border-orange-400 border-double rounded-full px-3 py-3 mb-2' value={products.name} type="text" name="Product" placeholder='Your order name' required  readOnly/>
            <br />
            
            <input className='border-2  border-orange-400 border-double rounded-full px-3 py-3 mb-2'$ value={products.price} type="text" name="Price"required  readOnly/>
            <br />
            <input className='border-2  border-orange-400 border-double rounded-full px-3 py-3 mb-2' type="address" name="address" placeholder='Your Address'  required  />
            <br />
            <input className='border-2  border-orange-400 border-double rounded-full px-3 py-3 mb-2' type="phone" name="phone" placeholder='Your Phone Number' required   />
            <br />
            <input className='btn btn-dark ms-5' type="submit" value="Please Order" />
        </form>
       <ToastContainer></ToastContainer>
    </div>
  
     </section>
    );
};

export default CheckOut;