import * as z from 'zod';
export const LoginSchema = z.object({
    email:z.string().email({message: "Email is required."}),
    password:z.string({}).min(1,{
        message: "Password is required."
    }),
});

export const RegisterSchema = z.object({
    email: z.string().email({message: "Email is required."}),
    password: z.string().min(6,{
        message: "Password must be at least 6 characters long."
    }),
    name: z.string().min(3,{
        message: "Name is required."
    }).max(20,{
        message: "Name not more than 20 characters long."
    })
})