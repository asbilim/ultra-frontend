import { Inter } from 'next/font/google'
import Image from 'next/image'
import bg from "../../public/bg.png"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex w-full gap-4 items-center justify-start flex-col">
      <Image src={bg} className='w-[25rem] h-[25rem]'/>
      <div className="w-full flex items-center justify-center my-8">
        <label htmlFor="my-modal-4" className="btn btn-wide rounded-3xl min-w-fit px-24 bg-base-300 text-sm lowercase">Start securing my passwords</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label htmlFor="my-modal-4" className="modal cursor-pointer">
  <label className="modal-box relative" htmlFor="">
    <h3 className="text-lg font-bold text-center">Welcome to our password manager - Take the First Step to Secure Your Digital Life</h3>
    <p className="py-4">Set a strong, unique master password to secure your digital information. We're here to help if you have questions or need assistance.Start by creating a master password, you should keep it secret and will be used to manage all your future passwords</p>
    <form className="flex flex-col">
    <div className="form-control w-full ">
      <label className="label">
        <span className="label-text text-lg font-semibold">Create your password</span>
      </label>
      <input type="text" placeholder="V35y570nG-pA55!@" className="input input-bordered w-full" />
      <label className="label">
        <span className="label-text-alt">The min lenght should be 12</span>
      </label>
    </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-lg font-semibold">Confirm password</span>
        </label>
        <input type="text" placeholder="V35y570nG-pA55!@" className="input input-bordered w-full " />
        <label className="label">
          <span className="label-text-alt">The password are not same!</span>
        </label>
      </div>
      <div className="flex flex-col items-center justify-center py-8">
        <button className="btn btn-wide px-12 rounded-3xl leading-none w-full">Save master password</button>
      </div>
    </form>
  </label>
</label>
      </div>
    </div>
  )
  
}
