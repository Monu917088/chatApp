import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:'chat',
    initialState:{
        message:["hii how can i help","i can solve your all problem"],
    },
    reducers:{
        addChat:(state,action)=>{
            state.message.unshift(action.payload)
        },
    }
})

export default chatSlice.reducer;
export const {addChat}=chatSlice.actions;