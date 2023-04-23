export function ErrorLine({text}){
    return (
        <p className="text-error">{text}</p>
    )
}

export function SuccessLine({text}){
    return (
        <p className="text-success">{text}</p>
    )
}

export function SingleLine({text}){
    return (
        <p className="">{text}</p>
    )
}