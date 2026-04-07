import type { ReactNode } from "react"

interface ButtonProps{
    type?:"submit"|"reset"|"button"
    onClick:()=>void
    children:ReactNode
    className:string
}

export default function Button({onClick,type="button",children,className}:ButtonProps){

    return(
        <button type={type} onClick={onClick} className={className}>
            {children}
        </button>
    )
}