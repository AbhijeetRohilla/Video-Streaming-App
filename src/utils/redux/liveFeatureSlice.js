import { createSlice } from "@reduxjs/toolkit";

const liveSlice=createSlice({
    name:"live",
    initialState:{
        messages:[

        ]
    },
    reducers:{
        addRandomName:(state,action)=>{  
            state.messages.splice(10,1)          
            state.messages.unshift(action.payload);
        }
    }
})

export const {addRandomName}= liveSlice.actions;
export default liveSlice.reducer;