import React from 'react'
import {GiNetworkBars} from 'react-icons/gi'
import {BiWifi} from 'react-icons/bi'
import {FaBatteryFull} from 'react-icons/fa'
import onboard from '../assets/onboard.png'
import {BsFacebook} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import {DiApple} from 'react-icons/di'
import { Link } from 'react-router-dom'

const Onboarding = () => {
  return (
    <div className='w-full h-full  bg-slate-200 flex justify-center items-center'>

      <div className=' bg-[#69235B]  w-[375px]'>

         <div className='flex bg-[#69235B] justify-between   py-3 '>
            <span className='ml-5'>9:41</span>
            <div className='flex space-x-1 mr-5'>
              <GiNetworkBars/>
              <BiWifi/>
              <FaBatteryFull/>
            </div>
            
         </div>

         <div className='relative rounded-sm'>

            <img className='w-full h-[304px]' src={onboard}/>

            <div className='h-[30px] w-[191px] absolute left-[25%] bottom-[-14px] bg-[#CBCBFF] items-center text-center'>
            <span className='text-[16px] text-[#69235B] leading-4 font-medium'>Arya, AI Acharya</span>
         </div>


         </div>

         <div className='flex flex-col justify-center items-center  mt-7'>

            <div className='w-[291px] '>

                <div className='text-[32px] text-white  font-semibold leading-9'>
                Discover the timeless wisdom of 
                <div className='text-[#FFC746]'>the Vadas</div>
                </div>

                <div className='text-[16px] mt-2 text-white leading-7'>Sign up and 
                <span className='text-[#FFC746]'> journey through ancient knowledge with Arya 🌟</span>
                </div>

                <div className='flex justify-center mt-5'>
          <div className='w-[184px] h-48px] flex justify-between'>

            <div className='w-[48px] h-[48px] border flex items-center justify-center border-white rounded-full '>

                <BsFacebook className='h-[35px] w-[40px] text-blue-500'/>
            </div>

            <div className='w-[48px] h-[48px] border flex items-center justify-center border-white rounded-full '>

                <FcGoogle className='h-[35px] w-[40px] '/>
            </div>

            <div className='w-[48px] h-[48px] border flex items-center justify-center border-white rounded-full '>

                <DiApple className='h-[35px] w-[40px] '/>
            </div>

          </div>
        </div>




            </div>


        </div>

        <div  className='flex items-center justify-center mt-3 '>
          <div className='h-[1px] w-[150px]  bg-gray-300'></div>
          <div className='text-gray-300  text-[14px] mx-3'>OR</div>
          <div className='h-[1px] w-[150px]  bg-gray-300'></div>
        </div>

        <div className='flex flex-col justify-center my-5 items-center'>
          <Link to="/signup">
        <button className='text-[20px] w-[340px] text-[#69235B] py-[8px] bg-[#FFC746] rounded-lg font-medium' type="submit">
          Create an account</button></Link>

          <div className='text-[20px] text-white mt-2'>Existing account?
          <Link to="/login"><span className='text-[#FFC746] cursor-pointer '> Log in</span> </Link>
          </div>
        </div>

        

         
            
      </div>

    </div>
  )
}

export default Onboarding