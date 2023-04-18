import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { addToClipboard } from "@/functions/crypto";
import { AiOutlineCopy } from "react-icons/ai";
import { decrypt } from "@/functions/crypto";
import { getCookie } from "@/functions/auth";

export default function SingleService({ service_name = "Facebook", id = 1 }) {
  // Generate unique IDs for modal elements
  const [modalId, setModalId] = useState(`my-modal-${id}`);
  const [modalCheckboxId, setModalCheckboxId] = useState(`modal-checkbox-${id}`);

  const modalInput = useRef(null);

  const token = JSON.parse(decrypt(getCookie("JSSESSIONID")))

  const manageModal = ()=>{
    document.getElementById("my-modal-4").click()
  }

  const onsubmit = (data) => {
    fetch(`http://localhost:8000/api/manager/service/password/`,{
        method:"POST",
        headers:{
            "Authorization":"Bearer "+token.access,
            "Content-type":"Application/json"
        },
        body:JSON.stringify(data)
    })
    .then(answer=>answer.json())
    .then(response=>{
        if(response.password){
            addToClipboard(response.password)
            alert("password copied successfully")
        }
        else{
            alert("your password is not correct")
        }
    })

  }

  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <>
      {/* master password part */}

      {/* The button to open modal */}

      {/* The button to open modal */}
      <label htmlFor={modalCheckboxId} className="hidden"></label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={modalCheckboxId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor={modalCheckboxId} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <form className="flex flex-col" onSubmit={handleSubmit(onsubmit)}>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-lg font-semibold">Please enter your account password</span>
              </label>
              <input type="password" className="input input-bordered w-full" {...register("master_password",{required:"please enter a password "})} />
              <input type="hidden" {...register("process_id")} value={id} />
              <label className="label">
                <span className="label-text-alt text-error text-lg">{errors.master_password?.message}</span>
              </label>
            </div>
            <div className="flex flex-col items-center justify-center py-8">
              {errors.master_password ? (
                <button className="rounded-3xl shadow-sm  leading-none px-24 text-sm lowercase py-4 btn-primary" disabled>Add service</button>
              ) : (
                <button type="submit" className="rounded-3xl shadow-sm  leading-none px-24 text-sm lowercase py-4 btn-primary">Add service</button>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col min-h-[12rem] dark:bg-base-100 bg-base-300  items-center justify-center gap-4 rounded-xl shadow-sm p-6">
        <div className="dark:bg-base-200 bg-black  flex items-center justify-center px-6 py-3 rounded-xl">
          <h3 className="text-3xl text-white  font-bold">{service_name.slice(0, 1).toUpperCase()}</h3>
        </div>
        <p>{service_name}</p>
        <div className="flex w-full items-center p-2 justify-center gap-2 group">
          <p className="font-light text-lg blur-sm">placeholderValue</p>
          <AiOutlineCopy size={20} className="cursor-pointer hidden group-hover:block" onClick={() => document.getElementById(modalCheckboxId).click()} />
        </div>
      </div>
    </>
  );
}

