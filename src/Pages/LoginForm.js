import { useState } from "react";

import SignUP from "../backend/SignUP";
import { useNavigate } from "react-router-dom";
import signIn from "../backend/LogIn";

function LoginPage() {


  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate = useNavigate();



  return (
    <div className="flex min-h-full w-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    
          <div>
            <div className="flex items-center justify-between">
            <label   className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            </div>

            <div className="mt-2">
              <input onChange={(e)=>{setEmail(e.target.value)}} id="email" name="email" type="email"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label  className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              
            </div>
            <div className="mt-2">
              <input  onChange={(e)=>{setPassword(e.target.value);}} id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div className="h-[30px]"></div>

          <div>
            <button onClick={()=>{signIn(email,password); navigate('/CreatorPage');}} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
  

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a href="/SignUp" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign Up</a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage;