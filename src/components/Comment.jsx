import React from 'react'

function Comment({data}) {
  return (
    <div>
        {data.map((item)=>{
            return (
                <div className='shadow-lg'>
                <div key={item.id} className='font-semibold text-md  '>{item.name}</div>
      <div className='text-sm' >{item.comment}</div>   
      {item.reply.length>0 &&
      <>
      {item.reply.map((one,index)=>{
        return(
            <div key={index} className='mx-2 px-2 my-2'>
            <div className='text-gray-700 font-semibold'>{one.name}</div>
            <div className='text-sm'>{one.comment}</div>
            </div>
        )
      })
      }
      </>
      }      
                </div>
            )
        })}

      
    </div>
  )
}

export default Comment
