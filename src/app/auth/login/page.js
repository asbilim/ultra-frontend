'use client'

import { useForm } from "react-hook-form"
import { encrypt } from "@/functions/crypto"

export default function Login(){

    const {register,handleSubmit,formState:{errors}} = useForm()

    const onsubmit = data => {
        fetch('http://localhost:8000/auth2/api/token/',{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(answer=>answer.json())
        .then(response=>{
            if (response.access && response.refresh){
                localStorage.setItem("token",encrypt(response))
                document.cookie = `JSSESSIONID=${encrypt(response)};path=/;secure`
                return document.location.assign('/')
            }
            
        })
    }

    return(
        <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
        <form className="card-body" onSubmit={handleSubmit(onsubmit)}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Username</span>
                </label>
                    <input type="text" placeholder="type username" className="input input-bordered" {...register("username",{required:"Username is required"})} />
                <label className="label">
                    <p className="text-error">{errors.username?.message}</p>
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" className="input input-bordered" {...register("password",{required:"please enter a valid password"})}/>
            <label className="label">
                <p className="text-error">{errors.password?.message}</p>
            </label>
            </div>
            <a href="/auth/register" className="label-text-alt link link-hover font-bold text-lg underline">Register instead</a>
            <div className="form-control mt-6">
                {
                    errors.email || errors.password ? (
                        <button type="submit" className="btn btn-primary" disabled>Login</button>
                    ):(
                        <button type="submit" className="btn btn-primary">Login</button>
                    )
                }
            </div>
        </form>
        </div>
    </div>
    )
}