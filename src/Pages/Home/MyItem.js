import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth)
    const [myItem, setMyItem] = useState([]);
    

   

const getOrders = async()=>{
    const email = user.email;
    console.log(email)
   await axios.get(`http://localhost:5000/collectOrder?email=${email}`)
    .then(data => {
        console.log(data?.data);
       
        setMyItem(data?.data);
    });
   

}
getOrders();

   const deleteProduct = id =>{
    const proceed = window.confirm("Are your sure deliverd this product");
  if(proceed){
    axios.delete(`http://localhost:5000/collectOrder/${id}`)
    .then(data => {
        // console.log(data?.data);
        const remain =myItem?.filter(order =>order._id !== id);
        setMyItem(remain);
        
    })
  }
   }
    
    return (
        <div>
            {

                myItem?.map(order => <div
                    key={order._id}
                >
                    <h2>{order.product}</h2><button onClick={()=>{
                    deleteProduct(order._id)
                    }}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default MyItem;