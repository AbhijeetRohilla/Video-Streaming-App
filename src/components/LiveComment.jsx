import React, { useEffect } from 'react'
import { PROFILE } from '../constant/Constant'


function LiveComment({name,comment}) {    
   
  return (
    <div className='flex m-2 '>
          <div className='col-span-2 flex h-8'>
                <img alt="Profile" src={PROFILE} />
              </div>
              <div className='m-1 p-1 font-semibold text-md'>{name}</div>
              <div className='m-1 p-1'>{comment}</div>
      
    </div>
  )
}

export default LiveComment
