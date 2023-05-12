"use client"

import Window from "@/components/window"
import Command from "@/components/command"
import {VscDebugStart} from "react-icons/vsc"
import { nmapScanTypes,nmapServiceDetectionOptions,nmapVerbosityOptions } from "@/components/datas/nmap"
import { nanoid } from "nanoid"
import { useState } from "react"
import { useRef } from "react"

export default function Tool({params:{tools}}){

  const outputRef= useRef(0)

  
  const sendCommand = (command) => {
    const server = new WebSocket("ws://localhost:8000/ws/enumeration/");
  
    server.onopen = (event) => {
      const output = document.createElement('p');
      output.textContent = "Starting nmap....";
      outputRef.current.appendChild(output);
      server.send(command);
    };
  
    server.onclose = (event) => {
      const output = document.createElement('p');
      output.classList.add('text-error')
      output.textContent = "websocket closed !!";
      outputRef.current.appendChild(output);
    };
  
    server.onmessage = (event) => {
      if (event.data){
        const newData = JSON.parse(event.data)
        if(newData.error){
          const output = document.createElement('p');
          output.classList.add('text-error')
          output.textContent = newData.error;
          outputRef.current.appendChild(output);
        }
        const output = document.createElement('p');
        output.classList.add('text-success')
        output.textContent = newData.output;
        outputRef.current.appendChild(output);
      }
      console.log(`Incoming message from the backend server: ${event.data}`);
    };
  };

  const [scanTypes, setScanTypes] = useState(nmapScanTypes);
  const [verbosityOptions, setVerbosityOptions] = useState(nmapVerbosityOptions);
  const [serviceDetectionOptions, setServiceDetectionOptions] = useState(
      nmapServiceDetectionOptions
  );
  const [payload,setPayload] = useState(payload=>false)
  const [output,setOutput] = useState(output=>"")

    


  function getSelectedPayload() {
    let payload = '';
    scanTypes.forEach((scanType) => {
      if (scanType.selected) {
        payload += ` ${scanType.value} `;
      }
    });
    verbosityOptions.forEach((option) => {
      if (option.selected) {
        payload += ` ${option.value} `;
      }
    });
    serviceDetectionOptions.forEach((option) => {
      if (option.selected) {
        payload += ` ${option.value} `;
      }
    });
    console.log(payload)
    return payload.trim();
  }
    
const handleScanTypeClick = (index) => {
    const updatedScanTypes = scanTypes.map((scanType, i) => {
       
      if (i == index) {
        console.log(scanType)
        return { ...scanType, selected: true };
      } else {
        return { ...scanType, selected: false };
      }
    });
    setPayload(getSelectedPayload())
    setScanTypes(updatedScanTypes);
  };

  const handleVerbosityOptionClick = (index) => {
    const updatedVerbosityOptions = verbosityOptions.map((option, i) => {
      if (i === index) {
        return { ...option, selected: true };
      } 
      else {
        return { ...option, selected: false };
      }
    });
    setPayload(payload=>getSelectedPayload())
    setVerbosityOptions(updatedVerbosityOptions);
  };

  const handleServiceDetectionOptionClick = (index) => {
    const updatedServiceDetectionOptions = serviceDetectionOptions.map((option, i) => {
      if (i === index) {
        return { ...option, selected: true };
      } else {
        return { ...option, selected: false };
      }
    });
    setPayload(payload=>getSelectedPayload())
    setServiceDetectionOptions(updatedServiceDetectionOptions);
  };

    return (
        <div className="flex items-center justify-start w-full min-h-[100vh] mt-8 p-8 flex-col gap-6">
            <div className="introduction flex w-full items-center justify-start">
                <p className="text-lg font-bold">Welcome to {tools}</p>
            </div>
            <div className="mockup-window border bg-base-300 w-full min-h-[60vh] overflow-y-auto line">
              <div className="content w-full h-full flex flex-col items-start justify-start p-4 gap-3 mb-4" ref={outputRef}>
                <div className="line flex gap-2 w-full">
                  <span className="text-success">$</span>
                  <p>nmap {payload}</p>
                </div>
              </div>
            </div>
            <h2 className="text-lg">Verbosity</h2>
            <div className="commands grid grid-cols-4 w-full p-4 gap-4">
                {
                    verbosityOptions.map((item,index)=>{
                        return (
                        <Command  {...item} key={nanoid()} onClick={()=>{handleVerbosityOptionClick(index)}} />
                        )
                    })
                }
            </div>
            <div className="form-control w-full p-4">
                <div className="input-group w-full">
                    <input type="text" placeholder="Enter the ip address " className="input input-bordered w-full" onChange={(e)=>{setPayload(getSelectedPayload()+" "+e.target.value)}} />
                    <button className="btn btn-square" onClick={()=>{sendCommand(payload)}}>
                        <VscDebugStart />
                    </button>
                </div>
            </div>
        </div>
    )
}