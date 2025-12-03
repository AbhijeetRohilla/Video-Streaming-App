import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        toggleMenu:true,
        videos:null      
    },
    reducers:{
        openSidebar:(state,action)=>{            
          state.toggleMenu= !state.toggleMenu
        },
        getAllVideos:(state,action)=>{            
            state.videos=action.payload;
        },
        closeSidebar:(state,action)=>{
            state.toggleMenu=false;
        }
    }

})

export const {openSidebar,getAllVideos,closeSidebar}= appSlice.actions;
export default appSlice.reducer;