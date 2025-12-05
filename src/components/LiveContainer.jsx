import React,{useEffect} from 'react'
import LiveComment from './LiveComment'
import useGenerateName from '../utils/cutomHooks/useGenerateName'
import useGetComments from '../utils/cutomHooks/useGetComments'
import { useDispatch, useSelector } from 'react-redux'
import { addRandomName } from '../utils/redux/liveFeatureSlice'
import { comment } from 'postcss'
import store from '../utils/redux/store'

function LiveContainer() {
    const dispatch=useDispatch();
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
            },1000)

            return ()=> clearInterval(interval);                
        },[])
  return (
    <div className=' mx-2 py-2 w-[400px] border h-[400px] overflow-y-scroll'>
        <div className=''>Live</div>
        {chatData.map((item)=>{
            return (
<LiveComment name={item?.name} comment={item.comment}/>
            )
        })}
        
      
    </div>
  )
}

export default LiveContainer
