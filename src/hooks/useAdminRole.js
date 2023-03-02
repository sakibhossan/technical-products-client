import React, { useEffect, useState } from 'react';
import { useReducer } from 'react';

const useAdminRole = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() =>{
        const email = user?.email;
        if(email){
            fetch(`https://technical-backend-code.vercel.app/admin/${email}`,{
                method:'GET',
                headers:{
                    'content-type':'application/json',
                    'authorization': `Bearer ${localStorage.getItem('acessToken')}` 
                
                }
            })
            .then(res => res.json())
            .then(data =>{
                setAdmin(data.admin);
                setAdminLoading(false);
            })        
        }


    },[user])
    return [admin,adminLoading];
};

export default useAdminRole;