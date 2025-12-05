import React,{useEffect, useState} from 'react'
import LiveComment from './LiveComment'
import useGenerateName from '../utils/cutomHooks/useGenerateName'
import useGetComments from '../utils/cutomHooks/useGetComments'
import { useDispatch, useSelector } from 'react-redux'
import { addRandomName } from '../utils/redux/liveFeatureSlice'
import { comment } from 'postcss'
import store from '../utils/redux/store'

function LiveContainer() {
  const dispatch=useDispatch();
  const [liveMessage,setLiveMessage] = useState("")
  const chatData=useSelector((store)=>store.live.messages);    
   useEffect(()=>{
    //Pooling
      const interval= setInterval(()=>{
        const name=useGenerateName();
        const comment=  useGetComments();
        dispatch(addRandomName({
        "name":name,
        "comment":comment
        }));
      },10000)

      return ()=> clearInterval(interval);                
    },[])

    const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(addRandomName({
        name:"Abhijeet",
        comment:liveMessage
      }))
      setLiveMessage("")
    }
     
  return (
  <div className='flex flex-col gap-2'>    
    <div className='mx-2 py-2 w-[400px] border h-[400px] overflow-y-scroll flex flex-col-reverse'>       
      {chatData.map((item)=>{
        return (
        <LiveComment name={item?.name} comment={item.comment}/>
        )
      })}
    </div>
    <form className="mx-2 w-[400px]" onSubmit={handleSubmit}>
      <span><input className="w-3/4 border bg-amber-100" type='text' value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}
      placeholder='Type here'/></span>
    <button className='bg-green-200 rounded-2xl w-1/4' type='submit'>Sent</button> 
    </form>
  </div>
  )
}

export default LiveContainer
