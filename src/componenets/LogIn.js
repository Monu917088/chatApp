import React from 'react'
import {useFormik} from 'formik'
import { signUpSchema } from '../schemas'
import {GiNetworkBars} from 'react-icons/gi'
import {BiWifi} from 'react-icons/bi'
import {FaBatteryFull} from 'react-icons/fa'
import logo from '../assets/logo.png'
import {BsArrowLeft} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import {DiApple} from 'react-icons/di'

import { Link } from 'react-router-dom' 



const initialValues={
  
  email:"",
  password:"",
  
}


const LogIn = () => {
  
  

  const {values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit:(values)=>{
        
    }
})




  return (
    <div className='w-full h-full  bg-slate-200 flex justify-center items-center '>

      <div className=' bg-white    w-[375px]   '>

        <div className='flex justify-between mx-5  py-3 '>
            <span>9:41</span>
            <div className='flex space-x-1 '>
              <GiNetworkBars/>
              <BiWifi/>
              <FaBatteryFull/>
            </div>
            
        </div>

        <div className=' mx-5 mt-3 mb-8'>
          <Link to="/"><BsArrowLeft className='h-[24px] cursor-pointer w-[24px]'/></Link>
        </div>

        <div className='flex flex-col justify-center items-center  space-y-4'>
            
            <span className='text-[#69235B] text-[18px] font-bold leading-5'>
                Log in to Mobx
            </span>

          <div className='flex flex-col items-center'>
            <span className='text-[#69235B] text-[14px] leading-5  tracking-tight '>
            Welcome back! Sign in using your social 
                
            </span>
            <span className='text-[#69235B] leading-5 text-[14px]   tracking-tight'>
            account or email to continue us
            </span>
          </div>


        </div>

        <div className='flex justify-center mt-5'>
          <div className='w-[184px] h-48px] flex justify-between'>

            <div className='w-[48px] h-[48px] border flex items-center justify-center border-black rounded-full '>

                <BsFacebook className='h-[35px] w-[40px] text-blue-500'/>
            </div>

            <div className='w-[48px] h-[48px] border flex items-center justify-center border-black rounded-full '>

                <FcGoogle className='h-[35px] w-[40px] '/>
            </div>

            <div className='w-[48px] h-[48px] border flex items-center justify-center border-black rounded-full '>

                <DiApple className='h-[35px] w-[40px] '/>
            </div>

          </div>
        </div>

        <div  className='flex items-center justify-center mt-3 '>
          <div className='h-[1px] w-[150px]  bg-gray-300'></div>
          <div className='text-gray-300  text-[14px] mx-3'>OR</div>
          <div className='h-[1px] w-[150px]  bg-gray-300'></div>
        </div>


        <form className='flex flex-col mx-5 my-10  space-y-4'     onSubmit={handleSubmit}>
            <div className='mb-10 flex flex-col space-y-2'>
            
            

            <div className='flex flex-col mb-3  space-y-2'>

                <label className='text-[#69235B] text-[14px] font-medium leading-[14px] '>Your email</label>

                <input className='border-b-2 outline-none  text-[16px] font-normal leading-4 border-slate-300 border-x-none'
                 type='email'
                  name='email'
                  autoComplete='off'
                 value={values.email}
                 onChange={handleChange}
                 onBlur={handleBlur}
                />
                { errors.email && touched.email ? <p className='form-error flex flex-row-reverse text-[#FF2D1B] mt-1 text-[12px] leading-3'>
                    {errors.email}</p>:null}
            </div>

            <div className='flex flex-col mb-3 space-y-2'>

                <label className='text-[#69235B] text-[14px] font-medium leading-[14px] '>Password</label>

                <input className='border-b-2 outline-none  text-[16px] font-normal leading-4 border-slate-300 border-x-none'
                 type='text'
                  name='password'
                  autoComplete='off'
                 value={values.password}
                 onChange={handleChange}
                 onBlur={handleBlur}
                />
                { errors.password && touched.password ? <p className='form-error flex flex-row-reverse text-[#FF2D1B] mt-1 text-[12px] leading-3'>
                    {errors.name}</p>:null}
            </div>

            
            </div>
            

           

           


            
            
           <Link to="/message"> <button type="submit" 
             className='text-[20px] text-[#69235B] py-[8px] bg-[#FFC746] rounded-lg font-medium'>
            
              Log In</button></Link>

              <div className='flex justify-center mt-2'>
                <span className='text-[#FFC746] text-[14px]'>Forgot Password?</span>
              </div>
            
        </form>







      </div>
    </div>
  )
}

export default LogIn