"use client"

import SingleService from "./singleservices"
import { services } from "@/functions/data"
import { nanoid } from "nanoid"
import { useEffect,useState } from "react"

export default function Services(){
    const [max,setMax] = useState(max=>8)
    const [min,setMin] = useState(min=>0)

    const regulizeValue = ()=>{
        setMin(min=>max)
        if (max >= services.length){
            setMax(max=>services.length)
        }
        else{
            setMax(max=>max+8)
        }
    }

    return (
        <div className="grid grid-cols-4 gap-6 p-4 w-full">
            {
                services.slice(min,max).map(item=>{
                    return (
                        <SingleService {...item} key={nanoid()} regulize={regulizeValue} />
                    )
                })
            }
        </div>
    )
}