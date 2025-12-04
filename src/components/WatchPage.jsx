import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { closeSidebar } from '../utils/redux/appSlice'
import { useDispatch } from 'react-redux'
import CommentsContainer from './CommentsContainer'

function WatchPage() {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(closeSidebar())

        return ()=>{

        }
    },[])
    const [searchParam] = useSearchParams()
    const urlParam=(searchParam.get('v'))
    return (
        <div className='m-2 px-4 '>
            <div>
            <iframe className='rounded-3xl' width="800" 
            height="400"
             src={`https://www.youtube.com/embed/${urlParam}?si=cRUq36YcOSDzp5ff`}
              title="YouTube video player"                          
              allow="autoplay" 
              referrerPolicy="strict-origin-when-cross-origin"
               allowFullScreen></iframe>
               </div>
               <div>
                <CommentsContainer/>
               </div>
        </div>
    )
}

export default WatchPage
