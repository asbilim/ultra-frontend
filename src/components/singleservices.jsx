import {AiOutlineCopy} from "react-icons/ai"

export default function SingleService({name="Facebook"}){
    
    return (
        <div className="flex flex-col min-h-[12rem] dark:bg-base-100 bg-base-300  items-center justify-center gap-4 rounded-xl shadow-sm p-6">
            <div className="dark:bg-base-200 bg-black  flex items-center justify-center px-6 py-3 rounded-xl">
                <h3 className="text-3xl text-white  font-bold">{name.slice(0,1)}</h3>
            </div>
            <p>{name}</p>
            <div className="flex w-full items-center p-2 justify-center gap-2 group">
                <p className="font-light text-lg blur-sm">placeholderValue</p>
                <AiOutlineCopy size={20} className="cursor-pointer hidden group-hover:block" />
            </div>
        </div>
    ) 

}