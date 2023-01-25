import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useToken from '../../hooks/useToken';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(user||googleUser);

let signInErrorMessage;
let from = location.state?.from?.pathname || "/";

  if( loading || googleLoading){
    return <Loading></Loading>

  }
  if(error || googleError){
    signInErrorMessage = <p className='text-red-500'><small>{error?.message || googleError?.message}</small></p>
  }

  if (token) {
   
    navigate(from, {replace: true});
    
  }
  const onSubmit =async(data) => {
  //   event.preventDefault();
  //  const email = emailRef.current.value;
  //  const password = passwordRef.current.value;

    // console.log(data);

  //  await signInWithEmailAndPassword(email,password);
   await signInWithEmailAndPassword(data.email,data.password);
// const {user} = await axios.post('http://localhost:5000/token',{email});
// console.log(user);


  };
  return (
    <div class='flex min-h-2.5 my-10  justify-center items-center'>
      <div class="card sm:max-w-sm  md:max-w-md lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>



            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
               
              </label>
              <input 
              ref={emailRef}
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
              ref={passwordRef}
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

            <input className="btn w-full max-w-xs text-white" type="submit" value="Login" />
          </form>
          <p>New to technical products <small> <Link className='text-primary' to ="/signUp">Create New Account</Link></small></p>
          <div class="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}

            class="btn btn-outline">CONTINUE WITH GOOGLE</button>


        </div>
      </div>
    </div>
  );
};

export default Login;