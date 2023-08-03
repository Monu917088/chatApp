import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'
import { addChat } from '../utils/chatSlice'
import onboard from '../assets/onboard.png'

const Chat = () => {
     // subscribing the store
    const chatItem= useSelector((store)=>store.chat.message)

  return (
    <div className="overflow-y-scroll h-[400px]    flex flex-col-reverse">
                {chatItem.map((chat)=>
                    <div className='flex mb-3 mx-3  my-2  '> 
                        <img src={onboard} className='h-6 w-6 mr-2 rounded-full'/>
                       <div className='mr-8 py-2  max-w-[250px] px-3 text-white rounded-r-md rounded-b-md bg-[#69235B]'> {chat}</div>
                     </div>
                )}
            </div>
  )
}

export default Chat