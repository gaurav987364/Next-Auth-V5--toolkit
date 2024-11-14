"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";


export const Login = async (data : z.infer<typeof LoginSchema>) => {
    // validate field at server side
    const validateFields = LoginSchema.safeParse(data);
    
    //bcrypt js
    
    if (!validateFields.success) {
        return {error : "Invalid credentials!"}
    }

    return {success : "Email sent successfully."}
}