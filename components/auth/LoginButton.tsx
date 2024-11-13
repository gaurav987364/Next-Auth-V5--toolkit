"use client"

import { useRouter } from "next/navigation";
import React from "react"

interface Props {
    children: React.ReactNode;
    mode?:"modal" | "redirect";
    asChild?:boolean;
}
const LoginButton = ({
    children,
    mode = "redirect",
    asChild
}: Props) => {
    const router = useRouter();
    const onClick = ()=>{
        console.log("clicked login")
        router.push("/auth/login")
    }

    if(mode === "modal") {
        // todo: 
        return (
            <span>Todo</span>
        )
    }
  return (
    <span onClick={onClick} className=" cursor-pointer">
     {children}
    </span>
  )
}

export default LoginButton