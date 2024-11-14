"use client";
import React, { useTransition } from 'react';
import Cardwrapper from './Cardwrapper';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { RegisterSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';
import FormError from '../form-error';
import FormSuccess from '../form-success';
import { Register } from '@/server/register.action';



const RegisterForm = () => {
  const [isPending, startTransition] =  useTransition();
  const [error, setError] = React.useState<string | undefined>("");
  const [success, setSuccess] = React.useState<string | undefined>("");
  const form  = useForm<z.infer<typeof RegisterSchema>>({
    resolver:zodResolver(RegisterSchema),
    defaultValues:{
      email:"",
      password:"",
      name:"",
    }
  });

  const onSubmit = (data : z.infer<typeof RegisterSchema>)=>{
    setError("");
    setSuccess("");
    
    startTransition(()=>{
      Register(data).then((data)=>{
        setError(data.error);
        setSuccess(data.success);
      })
    });
    // Your authentication logic goes here.
  }
  return (
    <Cardwrapper
      headerLable="Create an Account..."
      backButtonLable="Already have an account ?"
      backbtnHref="/auth/login"
      showSocial
    >
     <Form {...form}>
      <form 
       onSubmit={form.handleSubmit(onSubmit)}
       className=' space-y-4'
      >
          <div className=' space-y-2'>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input disabled={isPending}  placeholder="Enter your name." {...field} type='text' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input disabled={isPending} placeholder="jondoe@gmail.com" {...field} type='email' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input disabled={isPending}  placeholder="******" {...field} type='password' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error}/>
          <FormSuccess message={success}/>
          <Button 
           type='submit'
           className=' w-full'
           disabled={isPending} 
          >
            Create an account
          </Button>
      </form>
      </Form>

    </Cardwrapper>
  );
};

export default RegisterForm;
