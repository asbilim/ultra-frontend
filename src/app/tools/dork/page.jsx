"use client"
import {BsMoonStars} from "react-icons/bs"
import {AiOutlineSend,AiOutlineCopy} from "react-icons/ai"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from "react-toastify";
import {useState} from "react"



export default function Dork(){

    const notify = () => toast.success("Text copied successfully!")
    const [inputValue,setInputValue] = useState(null)

    const examples = [
        "Can you provide me with dorks to find vulnerable WordPress sites?",
        "I need dorks to find pages on a website that contain sensitive information. Can you help me out?",
        "I'm doing research on a specific company. Can you give me dorks to find any subdomains or related websites?",
    ]

    const onsubmit = ()=>{


        const socket = new WebSocket('ws://localhost:8000/ws/dorks/');

        socket.onopen = (data)=>{
            console.log(data)
        }

        socket.onclosed = (data)=>{
            console.log("the websocket was closed by unexpected error")
        }

        socket.onmessage = (data)=>{
            console.log(data)
        }

        socket.send(
            inputValue
        )

        setInputValue(inputValue=>"")


    }


    return (
        <div className="w-full min-h-screen flex items-between justify-start flex-col">

            <div className="header m-12 bg-base-300 p-4 rounded-2xl flex gap-8 justify-around items-start ">
                <BsMoonStars size={25} className="text-secondary" />
                <div className="text flex-1 flex flex-col gap-3">
                    <p className="text-md font-medium leading-8">Using <span className="text-secondary">DorkMan</span> is simple. Just enter your desired search query, and our tool will provide you with a list of relevant dorks that you can use to refine your search and find the information you're looking for. Our dorks are carefully crafted to provide maximum results while minimizing false positives, so you can be confident that you're getting accurate and reliable information every time.</p>
                    {
                        examples.map(item=>{
                            return (
                                <p className="text-secondary font-semibold underline leading-10 cursor-pointer" onClick={()=>setInputValue(inputValue=>item)}>{item}</p>
                            )
                        })
                    }
                </div>
            </div>   
            
            <div className="header m-12 bg-base-300 p-4 rounded-2xl flex gap-8 justify-around items-start ">
                <div className="text flex-1 flex flex-col gap-3">
                    <p className="text-md font-medium leading-8">Using <span className="text-secondary">DorkMan</span> is simple. Just enter your desired search query, and our tool will provide you with a list of relevant dorks that you can use to refine your search and find the information you're looking for. Our dorks are carefully crafted to provide maximum results while minimizing false positives, so you can be confident that you're getting accurate and reliable information every time.</p>
                </div>
                <ToastContainer />
                <AiOutlineCopy size={25} className="text-secondary cursor-pointer" onClick={notify} />
            </div>
            
            <div className="flex justify-between gap-3 items-center m-12">
                <input value={inputValue}  onChange={(e)=>{setInputValue(inputValue=>e.target.value)}} type="text" className="flex-1 rounded-xl p-2 bg-transparent !border-2 !border-secondary outline-none hover:outline focus:outline-none" placeholder="Enter a query here to start" />
                <AiOutlineSend size={35} className="font-bold cursor-pointer" onClick={onsubmit} />
            </div>
        </div>
    )

}