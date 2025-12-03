import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';

function Body() {
    const sideBarState= useSelector((store)=>store.app.toggleMenu);
   
  return (
    <div className=' grid grid-flow-col'>
        {sideBarState && 
        <Sidebar/>
        }        
        <Outlet/>
      
    </div>
  )
}

export default Body
