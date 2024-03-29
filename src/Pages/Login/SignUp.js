import React from 'react';
import {  useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const [token]= useToken(user||googleUser);
      const navigate = useNavigate();
      const location = useLocation();
  
  let signInErrorMessage;
  let from = location.state?.from?.pathname || "/";
  
    if( loading || googleLoading||updating){
      return <Loading></Loading>
  
    }
    if(error || googleError || updateError){
      signInErrorMessage = <p className='text-red-500'><small>{error?.message || googleError?.message || updateError?.message}</small></p>
    }
  
    if (token) {
      // console.log(user || googleUser);
      navigate(from, {replace: true});
    }
    const onSubmit = async(data) => {
     
      await createUserWithEmailAndPassword(data.email, data.password);
      
         await updateProfile({ displayName: data.name  });
         console.log('update done');
        
    };
    return (
        <div class='flex min-h-2.5 my-10 justify-center items-center'>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-center text-2xl font-bold">SignUp</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
  
  
  
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Name</span>
                 
                </label>
                <input 
                type="text" 
                placeholder="Your Name" 
                class="input input-bordered w-full max-w-xs" 
                {...register("name",   {
                  required:{
                    value: true,
                    message:'Name is Required'
                  },
               
                })}
                
                />
                <label class="label">
                  
                {errors.name?.type === 'required' &&<span class="label-text-alt text-red-500">{errors.name.message}</span>}
                {errors.name?.type === 'pattern' &&<span class="label-text-alt text-red-500">{errors.name.message}</span>}
                  
                  
                </label>
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Email</span>
                 
                </label>
                <input 
                type="email" 
                placeholder="Your Email" 
                class="input input-bordered w-full max-w-xs" 
                {...register("email",   {
                  required:{
                    value: true,
                    message:'Email is Required'
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid Email' 
                  }
                })}
                
                />
                <label class="label">
                  
                {errors.email?.type === 'required' &&<span class="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' &&<span class="label-text-alt text-red-500">{errors.email.message}</span>}
                  
                  
                </label>
              </div>
  
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Password</span>
                 
                </label>
                <input 
                type="password" 
                placeholder="password" 
                class="input input-bordered w-full max-w-xs" 
                {...register("password",   {
                  required:{
                    value: true,
                    message:'Password is Required'
                  },
                  minLength: {
                    value: 6,
                    message: 'must be 6 characters used' 
                  }
                })}
                
                />
                <label class="label">
                  
                {errors.password?.type === 'required' &&<span class="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' &&<span class="label-text-alt text-red-500">{errors.password.message}</span>}
                  
                  
                </label>
              </div>
  
  
            
            {signInErrorMessage}
  
              <input className="btn w-full max-w-xs text-white" type="submit" value="SignUp" />
            </form>
            <p>Already Have an Account <small> <Link className='text-primary' to ="/login">Please Login</Link></small></p>
            <div class="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
  
              class="btn btn-outline">CONTINUE WITH GOOGLE</button>
  
  
          </div>
        </div>
      </div>
    );
};

export default SignUp;