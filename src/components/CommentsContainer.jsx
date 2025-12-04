import React from 'react'
import Comment from './Comment'

function CommentsContainer() {
    const commentData=[
        {id:1,
            name:"Abhijeet",
            comment:"Some Random Comment no.1",
            reply:[
              { id:1,
            name:"Jio",
            comment:"Some Random Reply 2"},
            {
                id:2,
            name:"Jio",
            comment:"Some Random Reply 2",
            }
            ]
        },
        {id:2,
            name:"Jio",
            comment:"Some Random Comment no.2",
            reply:[
              { id:1,
            name:"Abhijeet",
            comment:"Some Random Reply 2"},
            {
                id:2,
            name:"Abhijeet",
            comment:"Some Random Reply 2",
            }
            ]
        }
    ]
  return (
    <div className='m-2 p-2'>
       <div className='text-lg font-semibold'>Comments</div>  
        <Comment data={commentData}/>
      
    </div>
  )
}

export default CommentsContainer
