export default function Window({children}){

    return (
        <div className="mockup-window border bg-base-300 w-full min-h-[60vh] overflow-y-auto">
            <div className="content w-full h-full flex flex-col items-start justify-start p-4 gap-3">
                {children}
            </div>
        </div>
    )

}