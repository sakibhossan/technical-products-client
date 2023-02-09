import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
        const {id} = useParams();
        const url = `http://localhost:5000/collectOrder/${id}`
        const {data,isLoading} = useQuery(['collectOrder',id],() => fetch(url,{
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('acessToken')}`
            }
        }).then(res =>res.json()));
        if(isLoading){
           return <Loading></Loading>
        }
    return (
        <div>
            <h2>{id}</h2>
            <h2>{data.date}</h2>

            

        </div>
    );
};

export default Payment;