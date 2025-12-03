import React from 'react'
import { HAMBURGER_MENU,YOUTUBE_LOGO,PROFILE,SEARCH_ICON } from '../constant/Constant'
import { useDispatch } from 'react-redux';
import {openSidebar} from "../utils/redux/appSlice.js"

function Head() {
    const dispatch=useDispatch();
    function handleHamburger(){
        dispatch(openSidebar())
    }
  return (
    <div className='grid grid-flow-col m-2 p-2 shadow-md '>
      <div className='col-span-2 flex h-8'>
        <img alt="Menu" src={HAMBURGER_MENU} onClick={handleHamburger}/>
        <img className="mx-8" alt="Logo" src={YOUTUBE_LOGO}/>
      </div>
      <div className='col-span-8 flex justify-center h-8'>
        <input type='text' placeholder='Search' className=' border-gray-500 border rounded-l-full w-2/3 px-4 placeholder:text-gray-400 placeholder:mx-4 '></input>
        <button className='border-gray-500 border rounded-r-full w-12'>
            <img alt="Search" className="w-8 justify-self-center" src={SEARCH_ICON}/></button>
      </div>
      <div className='col-span-2 flex justify-end h-8 px-8'>
        <img alt="Profile" src={PROFILE}/>
      </div>
    </div>
  )
}

export default Head
