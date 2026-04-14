import type { ReactNode } from "react"

interface ButtonProps{
    type?:"submit"|"reset"|"button"
    onClick:()=>void
    children:ReactNode
    className?:string
    disabled?:boolean
}

export default function Button({onClick,type="button",children,className,disabled}:ButtonProps){

    return(
        <button type={type} onClick={onClick} className={className} disabled={disabled}>
            {children}
        </button>
    )
}