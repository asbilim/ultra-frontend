'use client'

import { useForm } from "react-hook-form"

export default function Login(){

    const {register,handleSubmit,formState:{errors}} = useForm()

    const onsubmit = data =>console.log(data)

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