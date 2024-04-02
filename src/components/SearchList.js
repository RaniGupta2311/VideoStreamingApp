import {useState, useEffect } from "react";
import VideoCard,{AdVideoCard} from "./VideoCard";
import SearchVideoCard from "./SearchVideoCard";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_BY_QUERY_API } from "../utils/constants";
const SearchList=()=>{
    const [videos,setVideos]=useState([]);
    useEffect(()=>{
        getVideos();
    },[])

    const getVideos=async ()=>{
        const data=await fetch(YOUTUBE_SEARCH_BY_QUERY_API);
        const jsonData=await data.json();
        console.log(jsonData.items);
        setVideos(jsonData.items)
    }
    return (
         <div className="w-[100%] absolute top-16 left-0 h-[145%] overflow-y-scroll">
        <div className="flex flex-wrap justify-center ">
        {/* {videos[0] && <AdVideoCard info={videos[0]}/>} */}
            {(videos) && videos.map((video)=><Link to={"/watch?v="+video.id.videoId}  key={video.id.videoId}>
            <SearchVideoCard info={video}/>
            </Link>)}      
        </div>    
        </div> 
        // TODO SEARCHCONTAINER AND SEARCHVIDEOCARD
        // <div className="absolute top-16">
        //     <h1>Hello</h1>
        //     {videos && videos.map((video)=>{
        //         return <p>{video.id.videoId}</p>
        //     })}
        // </div>
    )
}
export default SearchList;