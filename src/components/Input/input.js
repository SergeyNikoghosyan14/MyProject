import React from "react";
import './input.css'
import { useController } from "react-hook-form";

export default function Input({control,name,type,placeholder}){
    const {field} = useController({
        name,
        control
    })

    return(
        <div>
            <input className="inp" value={undefined} {...field} type={type} placeholder={placeholder} required={true} />
        </div>
    )
}