import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyItem = () => {
    const [user] = useAuthState(auth)
   const [myItem, setMyItem] = useState([]);
    

  

useEffect(()=>{
    const getOrders = async () => {
        const email = user.email;
        console.log(email)
        await axios.get(`https://technical-backend-code.vercel.app/collectOrder?email=${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('acessToken')}`
            }
        })
            .then(data => {
                 
                setMyItem(data?.data);
                
                
                
 });
 }
    getOrders();
    
   

},[])



    const deleteProduct = id => {
        const proceed = window.confirm("Are your sure deliverd this product");
        if (proceed) {
            axios.delete(`https://technical-backend-code.vercel.app/collectOrder/${id}`)
                .then(data => {
                    // console.log(data?.data);
                    const remain = myItem?.filter(order => order._id !== id);
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
                    <h2>{order.product}</h2><p>Price:{order.price}</p><h2>date:{order.date}</h2><button onClick={() => {
                        deleteProduct(order._id)
                    }}>Delete</button>
                    <h2>{(order.price && !order.paid) && <Link to={`/payment/${order._id}`}><button> Please Pay</button></Link>}

                        {(order.price && order.paid) && <span>Paid</span>}

                    </h2>
                </div>)
            }
        </div>
        // ------------------------//
//         <div>
//             <div class="card w-96 bg-paith text-primary-content">
//   <div class="card-body">
//     <h2 class="card-title">Card title!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div class="card-actions justify-end">
//       <button class="btn">Buy Now</button>
//     </div>
//   </div>
// </div>
//         </div>
    );
};

export default MyItem;