"use client";
import React, { useTransition } from 'react';
import Cardwrapper from './Cardwrapper';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { LoginSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';
import FormError from '../form-error';
import FormSuccess from '../form-success';
import { Login } from '@/server/login.action';


const Loginform = () => {
  const [isPending, startTransition] =  useTransition();
  const [error, setError] = React.useState<string | undefined>("");
  const [success, setSuccess] = React.useState<string | undefined>("");
  const form  = useForm<z.infer<typeof LoginSchema>>({
    resolver:zodResolver(LoginSchema),
    defaultValues:{
      email:"",
      password:""
    }
  });

  const onSubmit = (data : z.infer<typeof LoginSchema>)=>{
    setError("");
    setSuccess("");
    startTransition(()=>{
      Login(data).then((data)=>{
        setError(data.error);
        setSuccess(data.success);
      })
    });
    // Your authentication logic goes here.
  }
  return (
    <Cardwrapper
      headerLable="Welcome back."
      backButtonLable="Don't have an account?"
      backbtnHref="/auth/register"
      showSocial
    >
     <Form {...form}>
      <form 
       onSubmit={form.handleSubmit(onSubmit)}
       className=' space-y-6'
      >
          <div className=' space-y-4'>
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
           className=' w-full mt-2'
           disabled={isPending} 
          >
            Login
          </Button>
      </form>
      </Form>

    </Cardwrapper>
  );
};

export default Loginform;
