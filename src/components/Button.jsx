import React from 'react'

function Button({info}) {       
  return (
    <div>
        {
            info.map((item,index)=>{                
                return(
                    <>
                    <button key={index} className='bg-gray-200 m-2 p-2 rounded-lg'>{item}</button>
                    </>
                )
            })
        }
        
      
    </div>
  )
}

export default Button
