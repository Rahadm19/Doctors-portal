import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const handleLogin = data => {
    console.log(data)
  }
  return (
    <div className="lg:h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h3 className="text-xl text-center">Login</h3>
        <form onSubmit={handleSubmit(handleLogin)}>

          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Email</span></label>
            <input required {...register("email")} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Password</span></label>
            <input required {...register("password")} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
            <label className="label">
              <Link to="./forgate" className="label-text-alt text-primary text-xl">Forgate password?</Link>
            </label>
          </div>
          <p>{data}</p>
          <input className="btn btn-accent  w-full" value="Login" type="submit" />
        </form>
        <p className="py-5">New to doctors Portal? <Link to="./signup" className="text-green-800">Create a new account</Link> </p>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
        </div>
        <button className="btn btn-outline w-full"> <span><FaGoogle /></span> CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
