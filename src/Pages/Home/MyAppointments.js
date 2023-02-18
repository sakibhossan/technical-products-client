import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const MyAppointments = () => {
    const [appoinment, setAppoinment] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/payment')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAppoinment(data);
            })
    }, [])
    return (
        <div class="overflow-x-auto">
            <table class="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>ProductName</th>
                        <th>Price</th>
                        <th>Tansaction Id</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        appoinment.map((a,index) =>
                            <tr>
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