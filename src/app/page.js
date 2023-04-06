import { Inter } from 'next/font/google'
import Image from 'next/image'
import bg from "../../public/bg.png"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex w-full gap-4 items-center justify-start flex-col">
      <Image src={bg} className='w-[25rem] h-[25rem]'/>
      <div className="w-full flex items-center justify-center my-8">
        <button className="btn btn-wide rounded-3xl min-w-fit px-24">Start securing my passwords</button>
      </div>
    </div>
  )
  
}
