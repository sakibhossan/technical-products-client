import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllUserRow from './AllUserRow';

const Allusers = () => {
    const {data: users,isLoading,refetch} = useQuery('user', () => fetch('http://localhost:5000/user',{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('acessToken')}`
        }
    }).then(res =>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
         {
            users.map((row,index) =><AllUserRow
            key={row._id}
            row={row}
            refetc={refetch}
            // index={index}
            ></AllUserRow>)
         }
       
          </tbody>
        </table>
      </div>
    );
};

export default Allusers;