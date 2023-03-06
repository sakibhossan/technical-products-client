import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useEffect } from 'react';
import Loading from '../Shared/Loading';

const ShowMyItem = ({ order ,deleteProduct}) => {
   


    return (




        <div class="card  lg:w-96 sm:w-80 bg-base-200 mt-4 text-primary-content">
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