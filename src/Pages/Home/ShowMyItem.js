import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useEffect } from 'react';
import Loading from '../Shared/Loading';

const ShowMyItem = ({ order ,deleteProduct}) => {
    // const [user] = useAuthState(auth);
    const [myItem, setMyItem] = useState([]);
    // const [loading, setLoading] = useState(false);


    // useEffect(() => {
    //     setLoading(true);
    //     const getOrders = async () => {
    //         try {
    //             const email = user.email;
    //             const url = `https://technical-backend-code.vercel.app/collectOrder?email=${email}`;
    //             const config = {
    //                 headers: {
    //                     authorization: `Bearer ${localStorage.getItem('acessToken')}`
    //                 }

    //             }
    //             const res = await axios.get(url, config);
    //          setMyItem(res.data);
    //             setLoading(false);
    //         } 
    //         catch (error) {
    //             console.log(error);
    //             setLoading(false);
    //         }

    //     }
    //     getOrders();
    // }, [user])

    // const deleteProduct = id => {
    //     const proceed = window.confirm("Are your sure deliverd this product");
    //     if (proceed) {
    //         axios.delete(`https://technical-backend-code.vercel.app/collectOrder/${id}`)
    //             .then(data => {
    //                 console.log(data?.data);
    //                 const remain = myItem?.filter(order => order._id !== id);
    //                 console.log(remain)
    //                 setMyItem(remain);


    //             })
    //     }

    // }
    // if(loading){
    //     return <Loading></Loading>
    // }


    return (




        <div class="card w-96 bg-base-200 mt-4 text-primary-content">
            <div class="card-body">
                <h2 class="card-title">{order.product}</h2>
                <h3 className='mx-auto'><span className='text-blue-500'>Price: $</span>{order.price}</h3>
                <div className='flex flex-1  justify-between '>
                    <div class="card-actions  ">
                        <button class=" btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
                            onClick={() => {
                                deleteProduct(order._id)
                            }}>Delete</button>

                    </div>
                    <div class="card-actions ">
                        <button class=" btn bg-gradient-to-r  from-pink-500 to-yellow-500 ...hover:from-green-400 hover:to-blue-500">Please Pay</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ShowMyItem;