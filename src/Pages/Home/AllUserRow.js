import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllUserRow = ({row,refetch}) => {
    const {email,role} = row;
    const makeAdmin = ()=>{
        fetch(`https://technical-backend-code.vercel.app/user/admin/${email}`,{
            method: 'PUT',
            headers:{
                'authorization': `Bearer ${localStorage.getItem('acessToken')}`
            }
        })
        .then(res =>{
            if(res.status === 403){
                toast.error('Failed to Make an admin')

            }
            return res.json()
        })
        .then(data =>{
           
         if(data.modifiedCount > 0){
            refetch();
            toast.success('Suceessfully make an admin');
         }

        })

    }
    return (
        
            <tr className='border-2 border-orange-400'>
                <th>{1}</th>
                <td>{email}</td>
                <td>{ role !== 'admin' &&<button onClick={makeAdmin} className=" btn bg-gradient-to-r  from-pink-500 to-yellow-500 ...hover:from-green-400 hover:to-blue-500">Make Admin</button>}</td>
                <td><button class="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">Remove User</button></td>
                <ToastContainer></ToastContainer>
            </tr>
            
        
    );
};

export default AllUserRow;