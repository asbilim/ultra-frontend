import Window from "@/components/window"
export default function Tool({params:{tools}}){
    return (
        <div className="flex items-center justify-start w-full min-h-screen p-8 flex-col gap-6">
            <div className="introduction flex w-full items-center justify-start">
                <p className="text-lg font-bold">Welcome to {tools}</p>
            </div>
            <Window>*
                
            </Window>
        </div>
    )
}