import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const MyAppointments = () => {
    const [appoinment, setAppoinment] = useState([]);
    useEffect(() => {
        fetch('https://technical-backend-code.vercel.app/payment')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAppoinment(data);
            })
    }, [])
    return (
        <div class="overflow-x-auto  ">
            <table class="table table-compact w-96 ">
                <thead className='border-2 border-orange-600'>
                    <tr className='text-purple-500 '>
                        <th></th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>ProductName</th>
                        <th>Price</th>
                        <th>Tansaction Id</th>

                    </tr>
                </thead>
                <tbody className=''>
                    {
                        appoinment.map((a,index) =>
                            <tr className='border-2 border-orange-600 py-10 text-6xl font-medium'>
                                <th>{index + 1}</th>
                                <td>{a.email}</td>
                                <td>{a.date}</td>
                                <td>{a.productName}</td>
                                <td>${a.price}</td>

                                <td>{a.transactionId}</td>


                                
                            </tr>
                        )
                    }

                </tbody>

            </table>
        </div>
    );
};

export default MyAppointments;