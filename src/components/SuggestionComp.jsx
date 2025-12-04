import React from 'react'

function SuggestionComp({data}) {
  return (
    <div className='absolute w-[35%] overflow-y-scroll h-[80%] justify-center bg-white shadow-lg rounded-lg top-[10%] justify-self-center-safe '>  
        { data?.items?.map((item)=>{
            return(
<ul>
        <li className='px-2 m-2 py-1 hover:bg-gray-300 '>{item?.snippet.channelTitle}</li>
      </ul>
            )
        })     
      
}
    </div>
  )
}

export default SuggestionComp
