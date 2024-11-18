"use client"
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import axios from 'axios';
import { Button } from '@/components/ui/button';

const schema = z.object({
  email: z.string().email(),
  user_name: z.string(),
  message: z.string()
})
type FormData = z.infer<typeof schema>

const EmailForm = () => {
  const {register,formState: { errors, isSubmitting }} = useForm<FormData>({resolver: zodResolver(schema)})

  const [email,setEmail] = useState('');
  const [user_name,setName] = useState('');
  const [message,setMessage] = useState('');
  const [buttonText, setButtonText] = useState("Send");


  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const userId = process.env.NEXT_PUBLIC_USER_ID;

  const handleSubmit = async ()=>{
    setButtonText("...Sending");
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,
      template_params: {
        user_name: user_name,
        email: email,
        message: message
      }
    }
    try{
      const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send',data);
      console.log(res);
      alert("Message Sent successfully!");
      
      setName('');
      setEmail('');
      setMessage('');
      setButtonText("Send"); 
    }catch(err){
      alert("Something went wrong!");
      throw new Error("Error occurred while sending mail");
    }
  }
  return (
    <div className='flex flex-col w-full md:w-2/3'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-2 p-2' 
        autoComplete='off'>
        <Input {...register("user_name",{
          required:"Name is required",
          minLength: 2
          })} 
          onChange={(e)=>setName(e.target.value)}
          type="text" 
          name='user_name' 
          placeholder='Name'
        />
        {errors.user_name && <div className='text-red-500'>{errors.user_name.message}</div>}
        <Input {...register("email", {
          required:"Email is required", 
          validate: (value)=> {
            if(!value.includes('@')){
              return "Email must include @"
            }
            return true;
          },
        })
        } 
        onChange={(e)=>setEmail(e.target.value)}
        type='text' 
        placeholder='Email'
      />
      {errors.email && <div className='text-red-500'>{errors.email.message}</div>}
      <Textarea {...register("message",{
        validate: (value)=>value.length > 1
        })
        }
        onChange={(e)=>setMessage(e.target.value)}
        placeholder='Message'
      />
      <Button disabled={isSubmitting} 
      variant={"outline"}
      >
        {buttonText}
      </Button>
      </form>
    </div>
  )
}

export default EmailForm

