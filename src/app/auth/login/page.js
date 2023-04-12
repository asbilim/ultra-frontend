export default function Login(){
    return(
        <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
        <div className="card-body">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="text" placeholder="password" className="input input-bordered" />
            <label className="label">
                <a href="/auth/register" className="label-text-alt link link-hover font-bold">Register instead</a>
            </label>
            </div>
            <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
            </div>
        </div>
        </div>
    </div>
    )
}