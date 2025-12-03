import React, { useEffect } from 'react'
import { YOUTUBE_URL } from '../constant/Constant'
import VideoCard from './VideoCard';
import { useDispatch } from 'react-redux';
import {getAllVideos} from "../utils/redux/appSlice.js"

function VideoContainer() {
    const dispatch=useDispatch();
    useEffect(() => {
        videoFetch()
    }, [])

    const videoFetch =async () => {
        const res = await fetch(YOUTUBE_URL);
        const json = await res.json();
        dispatch(getAllVideos(json?.items))

    }

    return (
        <div>
            <VideoCard />
        </div>
    )
}

export default React.memo(VideoContainer)
