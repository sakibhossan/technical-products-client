import React from 'react';
import { toast } from 'react-toastify';

const AllUserRow = ({row,refetch}) => {
    const {email,role} = row;
    const makeAdmin = ()=>{
        fetch(`http://localhost:5000/payment/admin/${email}`,{
            method: 'PUT',
            headers:{
                'authorization': `Bearer ${localStorage.getItem('acessToken')}`
            }
        })
        .then(res =>res.json())
        .then(data =>{
            refetch();
            toast.success('Suceessfully make an admin');

        })

    }
    return (
        
            <tr>
                <th>{1}</th>
                <td>{email}</td>
                <td>{ role !== 'admin' &&<button onClick={makeAdmin} class="btn">Make Admin</button>}</td>
                <td><button class="btn">Remove User</button></td>
            </tr>
        
    );
};

export default AllUserRow;