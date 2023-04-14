"use client"

import { useForm } from "react-hook-form"

export default function Register(){

    const {register,handleSubmit,formState:{errors},watch} = useForm() 
    const onsubmit = data => {
        fetch('http://localhost:8000/auth2/account/register/',{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(answer=>answer.json())
        .then(response=>console.log(response))
    }

    return(
        <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
        <form className="card-body" onSubmit={handleSubmit(onsubmit)}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" {...register("email",{required:"please enter your email address",pattern:{value:"/^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/",message:"please enter a valid email"}})} />
                <label className="label">
                    <p className="text-error">{errors.email?.message}</p>
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text" >Username</span>
                </label>
                <input type="text" placeholder="username" className="input input-bordered" {...register('username',{required:"please enter a valid username",minLength:{value:6,message:"Your username is too short"}})}/>
                <label className="label">
                    <p className="text-error">{errors.username?.message}</p>
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" className="input input-bordered" {...register("password",{required:"please enter a valid password",pattern:"/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/",message:"your password is not strong enough"})}/>
                <label className="label">
                    <p className="text-error">{errors.password?.message}</p>
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Confirm</span>
                </label>
                <input type="password" placeholder="confirm password" {...register("confirm",{required:"please confirm your password",validate:(confirm)=>{
                    if(watch("password") !== confirm){
                        return "the two password are not same"
                    }
                }})} className="input input-bordered" />
                <label className="label">
                    <p className="text-error">{errors.confirm?.message}</p>
                </label>
            </div>
            <a href="/auth/login" className="label-text-alt link link-hover text-lg underline">Login instead</a>
            <div className="form-control mt-6">
                {
                    errors.username || errors.email || errors.password || errors.confirm ? (
                        <button className="btn btn-primary" disabled>Create an account</button>
                    ):(
                        <button type="submit" className="btn btn-primary">Create an account</button>
                    )
                }
            </div>
        </form>
        </div>
    </div>
    )
}