"use client"
import Image from 'next/image'
import bg from "../../public/bg.png"





export default function Home() {


  const manageModal = ()=>{
    return document.location.assign("/manager/services/")
  }


  return (
    <div className="flex w-full gap-4 items-center justify-start flex-col">
      <Image src={bg} className='w-[25rem] h-[25rem]'/>
      <div className="w-full flex items-center justify-center my-8">
        <label onClick={manageModal} className="btn btn-wide rounded-3xl min-w-fit px-24 bg-base-300 text-sm lowercase">Start securing my passwords</label>
      </div>
    </div>
  )
  
}









