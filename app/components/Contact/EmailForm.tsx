"use client"
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import { useState } from 'react';
import axios from 'axios';

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

  const handleSubmit = async ()=>{
    setButtonText("...Sending");
    const data = {
      service_id: process.env.SERVICE_ID,
      template_id: process.env.TEMPLATE_ID,
      user_id: process.env.USER_ID,
      template_params: {
        user_name: user_name,
        email: email,
        message: message
      }
    }
    try{
      const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send',data);
      console.log(res);
      
      setName('');
      setEmail('');
      setMessage('');
      setButtonText("Send");
    }catch(err){
      throw new Error("Error occurred while sending mail");
    }
  }
  return (
    <div className='flex flex-col w-full md:w-2/3'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-2 text-black' 
        autoComplete='off'>
        <input {...register("user_name",{
          required:"Name is required",
          minLength: 2
          })} 
          onChange={(e)=>setName(e.target.value)}
          className='border border-black border-10 rounded-md p-2' 
          type="text" 
          name='user_name' 
          placeholder='Name'
        />
        {errors.user_name && <div className='text-red-500'>{errors.user_name.message}</div>}
        <input {...register("email", {
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
        className='border border-black border-10 rounded-md p-2'
        type='text' 
        placeholder='Email'
      />
      {errors.email && <div className='text-red-500'>{errors.email.message}</div>}
      <textarea {...register("message",{
        validate: (value)=>value.length > 1
        })
        }
        onChange={(e)=>setMessage(e.target.value)}
        className='border border-black border-10 rounded-md p-2' placeholder='Message'
      />
      <button disabled={isSubmitting} 
        className='p-2 w-full bg-rose-500 hover:bg-rose-300 rounded-md text-light font-semibold'
      >
        {buttonText}
      </button>
      </form>
    </div>
  )
}

export default EmailForm

