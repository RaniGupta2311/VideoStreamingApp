import {useState, useEffect } from "react";
import VideoCard,{AdVideoCard} from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";
const VideoContainer=()=>{
    const [videos,setVideos]=useState([]);
    useEffect(()=>{
        getVideos();
    },[])

    const getVideos=async ()=>{
        const data=await fetch(YOUTUBE_VIDEOS_API);
        const jsonData=await data.json();
        // console.log(jsonData.items);
        setVideos(jsonData.items)
    }

    return (
        <div className="flex flex-wrap justify-center">
            {videos[0] && <AdVideoCard info={videos[0]}/>}
            {(videos) && videos.map((video)=><Link to={"/watch?v="+video.id}  key={video.id}>
            <VideoCard info={video}/>
            </Link>)}
        </div>
    )
}
export default VideoContainer;