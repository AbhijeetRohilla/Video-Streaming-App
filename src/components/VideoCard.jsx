import React from 'react'
import { useSelector } from 'react-redux';
import { tempData } from './temp';
import { Link } from 'react-router-dom';

function VideoCard() {
    const allVideos = useSelector((store)=>store.app.videos);
    // const allVideos= tempData    
    console.log(allVideos)    
  return (
    <div className='flex flex-wrap '>        
        {allVideos && allVideos.map((item)=>{    
                   
            return(
                
                <>
                <Link to={`/watch?v=${item?.id}`}> <div key={item?.id} className=' m-2 p-2 shadow-lg rounded-lg w-90 '>
                    <img className="rounded-lg w-full mx-2" alt="Thumbnail" src={item?.snippet?.thumbnails?.medium?.url}/>        
                    <p className='font-semibold text-sm m-2 px-2'>{item?.snippet.title}</p>
                    <p className='text-sm m-2 px-2'>{item.snippet.channelTitle}</p>
                    <p className='text-sm m-2 px-2'>{item?.statistics?.viewCount}</p>
                </div></Link>
                </>
            )
        })}
                 
    </div>
  )
}

export default VideoCard
