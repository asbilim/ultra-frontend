"use client"

import Image from "next/image"
import Button from "@mui/material/Button"
import {FiArrowRight} from "react-icons/fi"

export default function Tool({name="",description="",warning="",image="",url}){
    return (
        <div className="flex flex-col items-center justify-center min-h-[20rem] bg-base-300 bg-opacity-80  p-3 gap-3">

            <Image src={image} width={1000} height={1000} className=" w-36 h-auto ease-in-out transition-all animate-pulse"/>

            <h2 className="text-lg font-bold">{name}</h2>
            
            <Button className="px-12 py-3 leading-none text-md rounded-3xl bg-primary text-white font-bold lowercase hover:bg-primary  flex items-center justify-center gap-2" onClick={()=>{document.location.assign(`tools/${url}`)}} >
                
                Run {name} 
                <FiArrowRight  size={15} />
            </Button>
        </div>
    )
}