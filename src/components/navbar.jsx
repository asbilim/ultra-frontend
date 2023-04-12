import profile from "../../public/profile.jpeg"
import Image from "next/image"
export default function Navbar(){
    return (
        <div className="flex items-center justify-start">
            <div className="flex w-full rounded-2xl items-center justify-around p-3">
                <div className="dropdown dropdown-top">
                    <label tabIndex={0} className="cursor-pointer">
                        <div className="avatar cursor-pointer">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <Image src={profile} className="object-cover" />
                            </div>
                        </div>
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
            <p className="font-semibold">jeremy</p>
        </div>
    )
}