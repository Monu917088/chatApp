import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";
import { BiWifi } from "react-icons/bi";
import { FaBatteryFull } from "react-icons/fa";
import onboard from "../assets/onboard.png";
import {IoIosSend} from 'react-icons/io';
import {MdOutlineKeyboardVoice} from 'react-icons/md'
import Chat from "./Chat";
import { useDispatch } from "react-redux";
import { addChat } from "../utils/chatSlice";
import { Link } from "react-router-dom";

const Message = () => {
     // creating state for input message
    const [textmsg,setTextmsg]= useState("")

    //creating dispatch using use dispatch to dispatch a action to redux store
    const disptach= useDispatch();
    

    // function to store msg in redux 
    function dispatchMSg(){
        disptach(addChat(textmsg))

        setTextmsg("");



    }

  return (
    <div className="w-full h-screen  bg-slate-200 flex justify-center items-center ">
      <div className=" bg-white    w-[375px]   ">
        <div className="flex justify-between mx-5  py-3 ">
          <span>9:41</span>
          <div className="flex space-x-1 ">
            <GiNetworkBars />
            <BiWifi />
            <FaBatteryFull />
          </div>
        </div>

        <div className="flex justify-center items-center mb-3 ">
          <div className="flex justify-between">
            <div className=" flex flex-row space-x-2 items-center  w-[322px] h-[44px]">
             <Link to="/"> <BsArrowLeft className="h-[16px] w-[16px]" /></Link>
              <img
                src={onboard}
                alt="profile"
                className="h-[44px] w-[44px] rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-[16px] text-[#69235B]">Arya</span>
                <span className="text-[12px] text-slate-400">Vedic AI Bot</span>
              </div>
            </div>
            <div className="text-[#FFC746] font-semibold text-[16px]">A/क</div>
          </div>
        </div>

        <div className="mt-2  bg-gray-200">
            <Chat/>
            <div className="flex justify-center mt-2 items-center bg-gray-200">
            <div className=" w-[326px] bg-white h-[46px] flex items-center justify-between rounded-3xl border border-slate-300">
                
                <input className="outline-none pl-3 rounded-3xl"
                 type='text' placeholder="write  your message"
                  value={textmsg}
            
                  onChange={(e)=>setTextmsg(e.target.value)} />
                  
                  

                <div className="flex pr-2">
                    
                <IoIosSend  onClick={()=>dispatchMSg()} className='h-[24px] cursor-pointer w-[24px]'/>
                <MdOutlineKeyboardVoice  className='h-[24px] w-[24px]'/>
                </div>
                
            </div>
            </div>



        </div>

      </div>
    </div>
  );
};

export default Message;
