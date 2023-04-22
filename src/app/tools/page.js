import Tool from "@/components/tool"
import { ToolsData } from "@/components/datas/tools"
import { nanoid } from "nanoid"
export default function Home(){
    return (
        <div className="flex w-full flex-col justify-start items-center">
            <div className="w-full px-8">
                <h3 className="text-start">All the <span className="font-semibold"> available tools  </span> will be listed here</h3>
            </div>
            <div className="grid grid-cols-4 gap-8 py-16 w-full px-8">
                {
                    ToolsData.map(item=>{
                        return (
                            <Tool key={nanoid()} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}