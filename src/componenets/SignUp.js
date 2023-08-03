import React from 'react'
import {useFormik} from 'formik'
import { signUpSchema } from '../schemas'
import {GiNetworkBars} from 'react-icons/gi'
import {BiWifi} from 'react-icons/bi'
import {FaBatteryFull} from 'react-icons/fa'
import logo from '../assets/logo.png'
import {BsArrowLeft} from 'react-icons/bs'
import {Link } from 'react-router-dom'





const initialValues={
    name:"",
    email:"",
    password:"",
    cpassword:""
}

const SignUp = () => {

   

   const {values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit:(values)=>{
            
           
        }
    })
    


  return (
    <div className='w-full md:h-screen  bg-slate-200 flex justify-center md:items-center '>
    <div className=' bg-white  md:w-1/3  w-[375px]   '>
        <div className='flex justify-between mt-3 mx-5'>
            <span>9:41</span>
            <div className='flex space-x-1 '>
              <GiNetworkBars/>
              <BiWifi/>
              <FaBatteryFull/>
            </div>
            
        </div>
        <div className=' mx-5 mt-3 '>
          <Link to="/"><BsArrowLeft className='h-[24px] cursor-pointer w-[24px]'/></Link>
        </div>

        <div className='flex flex-col justify-center items-center space-y-3'>
            <img src={logo} className='w-[72px] h-[64px]' alt ="logo" />
            <span className='text-[#69235B] text-[18px] font-bold leading-5'>
                Sign up with Email
            </span>

            <div className='flex flex-col items-center'>
            <span className='text-[#69235B] text-[14px] leading-5 font-light tracking-tight '>
                Enter your details and dive into a realm of 
                
            </span>
            <span className='text-[#69235B] leading-5 text-[14px]  font-light tracking-tight'> ancient wisdom! 💫</span>
            </div>


           

        </div>






        <form className='flex flex-col mx-5 my-8  space-y-4'   onSubmit={handleSubmit}>
            <div className='mb-10 flex flex-col space-y-2'>
            
            <div className='flex flex-col mb-3 space-y-2'>

                <label className='text-[#69235B] text-[14px] font-medium leading-[14px] '>Your name</label>

                <input className='border-b-2 outline-none  text-[16px] font-normal leading-4 border-slate-300 border-x-none'
                 type='text'
                  name='name'
                  autoComplete='off'
                 value={values.name}
                 onChange={handleChange}
                 onBlur={handleBlur}
                />
                { errors.name && touched.name ? <p className='form-error flex flex-row-reverse text-[#FF2D1B] mt-1 text-[12px] leading-3'>
                    {errors.name}</p>:null}
            </div>

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

            <div className='flex flex-col  mb-3 space-y-2'>

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

            <div className='flex flex-col   space-y-2'>

                <label className='text-[#69235B] text-[14px] font-medium leading-[14px] '>Confirm password</label>

                <input className='border-b-2 outline-none   text-[16px] font-normal leading-4 border-slate-300 border-x-none'
                 type='text'
                  name='cpassword'
                  autoComplete='off'
                 value={values.cpassword}
                 onChange={handleChange}
                 onBlur={handleBlur}
                />
                { errors.cpassword && touched.cpassword ? <p className='form-error flex flex-row-reverse text-[#FF2D1B] mt-1 text-[12px] leading-3'>
                    {errors.cpassword}</p>:null}
            </div>
            </div>
            

           

           


            
            <div className='mx-5'>
            <Link to='/login'><button className='text-[20px] w-full text-[#69235B] py-[8px] bg-[#FFC746] rounded-lg font-medium' type="submit">Create an account</button>
            </Link></div>
        </form>
    </div>
    </div>
  )
}

export default SignUp