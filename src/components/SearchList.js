import {useState, useEffect } from "react";
import SearchVideoCard from "./SearchVideoCard";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_BY_QUERY_API } from "../utils/constants";
import { useSelector,useDispatch } from "react-redux";
const SearchList=()=>{
    const dispatch=useDispatch();
   
    const [searchParams] = useSearchParams();

    const [videos,setVideos]=useState([]);
    useEffect(()=>{
        dispatch(closeMenu());
        getVideos();
    },[])

  
    const getVideos=async ()=>{
        const data=await fetch(YOUTUBE_SEARCH_BY_QUERY_API+searchParams.get("q"));
        console.log("search query",searchParams.get("q"))
        const jsonData=await data.json();
        console.log(jsonData.items);
        setVideos(jsonData.items)
    }
    return (
         <div className="w-[100%] absolute left-0 h-[145%] overflow-y-scroll ">
        <div className="flex flex-wrap justify-center ">
            {(videos) && videos.map((video)=><Link to={"/watch?v="+video.id.videoId}  key={video.id.videoId}>
            <SearchVideoCard info={video}/>
            </Link>)}      
        </div>    
        </div> 
    )
}
export default SearchList;