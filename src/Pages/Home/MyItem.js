import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../Shared/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import ShowMyItem from './ShowMyItem';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myItem, setMyItem] = useState([]);
    const [loading, setLoading] = useState(false);




    useEffect(() => {
        setLoading(true);
        const getOrders = async () => {
            try {
                const email = user.email;
                const url = `https://technical-backend-code.vercel.app/collectOrder?email=${email}`;
                const config = {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('acessToken')}`
                    }

                }
                const res = await axios.get(url, config);
             setMyItem(res.data);
                setLoading(false);
            } 
            catch (error) {
                console.log(error);
                setLoading(false);
            }

        }
        getOrders();
    }, [user])



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
    if(loading){
        return <Loading></Loading>
    }


    return (
        // <div>
        //     {

        //         myItem?.map(order => <div
        //             key={order._id}
        //         >
        //             <h2>{order.product}</h2><p>Price:{order.price}</p><h2>date:{order.date}</h2><button onClick={() => {
        //                 deleteProduct(order._id)
        //             }}>Delete</button>
        //             <h2>{(order.price && !order.paid) && <Link to={`/payment/${order._id}`}><button> Please Pay</button></Link>}

        //                 {(order.price && order.paid) && <span>Paid</span>}

        //             </h2>
        //         </div>)
        //     }
        // </div>
        // ------------------------//
        <div>
              <div className= 'w-72 lg:w-96 mx-auto'>
            <h2 className='w-64 lg:w-96 ml-10 lg:ml-32 mt-4 text-lg italic font-medium text-amber-400'>Your Selected Itimes :-</h2>
            {
                 myItem?.map(order => <ShowMyItem
                    key={order._id}
                    order={order}
                    deleteProduct={deleteProduct}
                >
                    </ShowMyItem>
                    )
            }
         
             
          </div>
          <div className='mt-8 mb-4 pl-16'>
          <Footer></Footer>

          </div>
        </div>
         
    );
};

export default MyItem;