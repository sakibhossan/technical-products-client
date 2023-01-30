import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const MyItem = () => {
    const[myItem,setMyItem] = useState
    ([]);
    
    axios.get('http://localhost:5000/collectOrder')
    .then(data =>{
        console.log(data?.data);
        setMyItem(data?.data);
    })
    return (
        <div>
            {

                myItem?.map(order=><div
                key={order._id}
                >
                    <h2>{order.product}</h2>
                </div>)
            }
        </div>
    );
};

export default MyItem;