"use client"
import {BsMoonStars} from "react-icons/bs"
import {AiOutlineSend,AiOutlineCopy,AiFillWarning} from "react-icons/ai"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from "react-toastify";
import {useState} from "react"
import {BiLoader} from "react-icons/bi"



export default function Dork(){

    const notify = () => toast.success("Text copied successfully!")
    const [inputValue,setInputValue] = useState(null)
    const [enable,setEnable] = useState(enable=>false)
    const [answer,setAnswer] = useState(false)

    const examples = [
        "10.10.24.25",
        "http://somesite.com",
        "https://ubuea.cm",
    ]

    

    const onsubmit = ()=>{

        setInputValue(inputValue=>"")
        setEnable(enable=>!enable)
        const socket = new WebSocket('ws://localhost:8000/ws/sabitou/');

        socket.onopen = (data)=>{
            socket.send(
                inputValue
            )
        }

        socket.onclose = (data)=>{
            console.log("the websocket was closed by unexpected error")
            setEnable(enable=>false)
            return toast.error("something went wrong , sorry !!")
            
        }

        socket.onmessage = (data)=>{
            if(data.data){
                setOutput(output=>output+data.message)
            }
            setEnable(enable=>false)
            console.log(data.data)
        }

    }


    return (
        <div className="w-full min-h-screen flex items-between justify-start flex-col">

            <div className="header m-12 bg-base-300 p-4 rounded-2xl flex gap-8 justify-around items-start ">
                <AiFillWarning size={25} className="text-accent" />
                <div className="text flex-1 flex flex-col gap-3">
                    <p className="text-md font-medium leading-8">Please use <span className="text-accent">Sabitou</span> responsibly and with the appropriate permissions. Attempting to gather information about a website or server without the owner's permission may be illegal and may result in legal consequences.</p>
                    <p className="text-md font-medium leading-8"><span className="text-accent">Sabitou</span> is a powerful tool that can provide detailed information about any domain name or IP address. It can help you identify the owner of a website, the location of a server, and much more.</p>
                </div>
            </div>   
            
            <div className="header m-12 bg-base-300 p-4 rounded-2xl flex gap-8 justify-around items-start min-h-[40vh]">
                <div className="text flex-1 flex flex-col gap-3">
                    {
                        enable && (
                            <div className="w-full flex items-center justify-center" >
                                <BiLoader className="font-bold ease-in transition-all  animate-spin" size={45} />
                            </div>
                        )
                    }
                    {
                        answer && (
                            <p className="text-md font-medium leading-8">{answer}</p>
                        )
                    }
                </div>
                <ToastContainer />
                <AiOutlineCopy size={25} className="text-accent cursor-pointer" onClick={notify} />
            </div>
            
            <div className="flex justify-between gap-3 items-center m-12">
                {
                    enable ? (
                        <>
                            <input disabled value={inputValue}  type="text" className="flex-1 rounded-xl p-2 bg-transparent !border-2 !border-accent outline-none hover:outline focus:outline-none input-disabled disabled" placeholder="Enter the domain name or the ip address of the target" />
                            <AiOutlineSend size={35} className="font-bold disabled cursor-not-allowed"  />
                        </>
                    ):(
                        <>
                            <input value={inputValue}  onChange={(e)=>{setInputValue(inputValue=>e.target.value)}} type="text" className="flex-1 rounded-xl p-2 bg-transparent !border-2 !border-accent outline-none hover:outline focus:outline-none" placeholder="Enter the domain name or the ip address of the target" />
                            <AiOutlineSend size={35} className="font-bold cursor-pointer" onClick={onsubmit} />
                        </>
                    )
                }
            </div>
        </div>
    )

}