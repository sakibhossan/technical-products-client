import { useEffect, useState } from "react";


const useToken = (user) => {
    const [token,setToken] = useState('');
    useEffect(() =>{
        const email = user?.user?.email;
        const currentUser = {email:email};
        console.log(currentUser);
        if(email){
            fetch(`https://technical-backend-code.vercel.app/user/${email}`,{
                method:'PUT',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data =>{
                console.log('acknopwlweng tru',data);
                const acessToken = data.token;
        localStorage.setItem('acessToken',acessToken);
                setToken(acessToken);
            })

        }

    },[user]);
    return [token];
}

 

export default useToken;