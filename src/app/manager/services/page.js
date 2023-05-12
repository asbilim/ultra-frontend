"use client"
import SingleService from "@/components/singleservices"; // Changed to PascalCase
import { nanoid } from "nanoid";
// import { services } from "@/functions/data";
import { useForm } from "react-hook-form";
import { useEffect,useState } from "react";
import { getCookie } from "@/functions/auth";
import { decrypt } from "@/functions/crypto";




export default function Main() {
  const [max, setMax] = useState(8);
  const [min, setMin] = useState(0);

  const [services,setServices] = useState(services=>[])

  useEffect(async ()=>{

    const fetchServices = async  () =>{

      const userToken = JSON.parse(decrypt(getCookie("JSSESSIONID"))).access
      
      const res = await fetch("http://localhost:8000/api/manager/service/",{
        method:"GET",
        headers:{
          "Content-type":"application/json",
          "Authorization":"Bearer "+userToken
        }
      },{next:{revalidate:20}}
      )
    
      const result = res.json()
    
      return result 
    
    }

    const temp = await fetchServices();
    setServices(services=>temp)
    console.log(services)
  },[])


  const regulizeValue = () => {
    const newMax = max + 8;
    if (newMax >= services.length) {
      setMax(services.length);
    } else {
      setMax(newMax);
    }
    setMin(max);
  };

  const managePrevious = () => {
    const newMin = min - 8;
    if (newMin >= 0) {
      setMin(newMin);
      setMax(min);
    }
  };

  const {register,handleSubmit,formState:{errors},watch} = useForm()
 
  const onsubmit = (data) => {
    const token = JSON.parse(decrypt(getCookie("JSSESSIONID"))).access;
    fetch(`http://localhost:8000/api/manager/service/`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "Application/json",
      },
      body: JSON.stringify(data),
    })
      .then((answer) => answer.json())
      .then((response) => {
        if (response.success) {
          alert("service added successfully");
          setServices((services) => {

            const updatedServices = services.concat([{ id: response.id, service_name: response.service }]);
    
            console.log(updatedServices); // This will log the updated state
    
            return updatedServices;
    
          });
          console.log(services); // This will log the updated state
        } else {
          alert("an error occur");
        }
      });
  };
   
   
   const manageModal = ()=>{
     document.getElementById("my-modal-4").click()
   }


  return (
  <>
    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
    <label htmlFor="my-modal-4" className="modal cursor-pointer">
      <label className="modal-box relative" htmlFor="">
        <h3 className="text-3xl py-4 font-bold text-center">Add service</h3>
        {/* <p className="py-4">Set a strong, unique master password to secure your digital information. We're here to help if you have questions or need assistance.Start by creating a master password, you should keep it secret and will be used to manage all your future passwords</p> */}
        <form className="flex flex-col" onSubmit={handleSubmit(onsubmit)} >
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-lg font-semibold">Service Name</span>
              </label>
              <input type="text" placeholder="Instagram" className="input input-bordered w-full" {...register("service",{required:"please enlster a service name",minLength:{value:8,message:"service name too short"}})} />
              <label className="label">
                <span className="label-text-alt text-error text-lg">{errors.service?.message}</span>
              </label>
                </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-lg font-semibold">Create a passphrase </span>
                    </label>
                    <input type="text" defaultValue="Fear God and nobody" className="input input-bordered w-full " {...register("passphrase",{required:"please create a passphrase"})} />
                    <label className="label">
                      <span className="label-text-alt text-error text-lg">{errors.passphrase?.message}</span>
                    </label>
                  </div>
                  <div className="flex flex-col items-center justify-center py-8">
                  {
                        errors.service || errors.passphrase? (
                            <button className="rounded-3xl shadow-sm  leading-none px-24 text-sm lowercase py-4 btn-primary" disabled>Add service</button>
                        ):(
                            <button type="submit" className="rounded-3xl shadow-sm  leading-none px-24 text-sm lowercase py-4 btn-primary">Add service</button>
                        )
                  }
                  </div>
        </form>
      </label>
    </label>
    <div className="flex flex-col w-full items-center justify-start gap-6 p-6 h-full">
      <div className="grid grid-cols-3 gap-6 w-full">
        {/* Repeated code block extracted into a function */}
        {renderCard("5", "stored passwords")}
        {renderCard("5", "services created")}
        <div className={`card bg-base-100 rounded h-32 flex flex-col items-center justify-center gap-4 shadow-md cursor-pointer`} onClick={manageModal}>
          <h3 className="text-5xl dark:text-white font-bold" >+</h3>
        </div>
      </div>
      <div className="flex justify-start items-center p-6 w-full">
        <h2>i will add a search input here</h2>
      </div>
      <div className="grid grid-cols-4 gap-6 p-4 w-full">

        {services.slice(min, max).map((item) => {
          return <SingleService {...item} key={nanoid()} />;
        })}


      </div>
      <div className="btn-group grid grid-cols-2 mb-4">
        <button className="btn btn-outline my-4" onClick={managePrevious}>
          Previous page
        </button>
        <button className="btn btn-outline" onClick={regulizeValue}>
          Next
        </button>
      </div>
    </div>
    </>
  );

  function renderCard(value, text, extraClass = "") {
    return (
      <div className={`card bg-base-100 rounded h-32 flex flex-col items-center justify-center gap-4 shadow-md ${extraClass}`}>
        <h3 className="text-5xl dark:text-white font-bold">{value}</h3>
        {text && <p>{text}</p>}
      </div>
    );
  }
}