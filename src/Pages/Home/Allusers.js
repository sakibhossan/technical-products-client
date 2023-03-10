import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllUserRow from './AllUserRow';

const Allusers = () => {
    const {data: users,isLoading,refetch} = useQuery('user', () => fetch('https://technical-backend-code.vercel.app/user',{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('acessToken')}`
        }
    }).then(res =>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div class="overflow-x-auto ">
        <table class="table w-96 mx-auto ">
          {/* <!-- head --> */}
          <thead>
            <tr className='text-purple-400 border-2 border-orange-400'>
              <th></th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove User</th>
            </tr>
          </thead>
          <tbody >
            {/* <!-- row 1 --> */}
         {
            users.map((row,index) =><AllUserRow
            key={row._id}
            row={row}
            refetch={refetch}
            // index={index}
            ></AllUserRow>)
         }
       
          </tbody>
        </table>
      </div>
    );
};

export default Allusers;