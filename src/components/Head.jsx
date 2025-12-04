import React, { useEffect, useState } from 'react'
import { HAMBURGER_MENU, YOUTUBE_LOGO, PROFILE, SEARCH_ICON } from '../constant/Constant'
import { useDispatch } from 'react-redux';
import { openSidebar } from "../utils/redux/appSlice.js"
import { YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_API_2 } from '../constant/Constant';
import SuggestionComp from './SuggestionComp.jsx';

function Head() {
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState("");
  const [suggestions, setSuggestions] = useState({});
  const [showSuggestions, setShowSuggestions] = useState(false);
  function handleHamburger() {
    dispatch(openSidebar())
  }
 
  useEffect(() => {
    //Debouncing....
    const debouncedVal = setTimeout(() => {
      fetchSearchApi();
    }, 200)
    //Clearing Timeout or declining immediate calls
    return () => {
      clearInterval(debouncedVal)
    }
  }, [searchVal])
   const fetchSearchApi=async()=> {
    const res = await fetch(`${YOUTUBE_SEARCH_API}${searchVal}${YOUTUBE_SEARCH_API_2}`)
    const jsonData = await res.json();
    await setSuggestions(jsonData)     
  }

  return (
    <div className='grid grid-flow-col m-2 p-2 shadow-md '>
      <div className='col-span-2 flex h-8'>
        <img alt="Menu" src={HAMBURGER_MENU} onClick={handleHamburger} />
        <img className="mx-8" alt="Logo" src={YOUTUBE_LOGO} />
      </div>
      <div className='col-span-8 flex justify-center h-8'>
        <input type='text' value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          placeholder='Search' onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)}
          className=' border-gray-500 border rounded-l-full w-2/3 px-4 placeholder:text-gray-400 placeholder:mx-4 '></input>
        <button className='border-gray-500 border rounded-r-full w-12'>
          <img alt="Search" className="w-8 justify-self-center" src={SEARCH_ICON} /></button>
      </div>
      {showSuggestions && 
      <SuggestionComp data={suggestions}/>
      }
      
      <div className='col-span-2 flex justify-end h-8 px-8'>
        <img alt="Profile" src={PROFILE} />
      </div>
    </div>
  )
}

export default Head
