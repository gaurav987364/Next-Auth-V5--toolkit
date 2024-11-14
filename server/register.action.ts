/* eslint-disable @typescript-eslint/ban-ts-comment */
"use server";

import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from 'bcrypt';
import { db } from "@/lib/db";


export const Register = async (data : z.infer<typeof RegisterSchema>) => {
    // validate field at server side
    const validateFields = RegisterSchema.safeParse(data);
    

    // @ts-ignore
    const {email, password, name} = validateFields.data;
    const hashpasword = await bcrypt.hash(password, 10);

    // getting existing user email  from server
    const existingUser = await db.user.findUnique({
        where: {
            email
        }
    });
    
    if(existingUser) {
        return {error : "Email already exists!"}
    }

    // create new user
     await db.user.create({
        data: {
            name,
            email,
            password: hashpasword
        }
    });
    
    if (!validateFields.success) {
        return {error : "Invalid credentials!"}
    }

    return {success : "User created!"} 
}