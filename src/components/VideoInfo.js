import { YOUTUBE_VIDEO_INFOBYID_API } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { BiLike ,BiDislike} from "react-icons/bi";
const VideoInfo=()=>{
    const [searchParams] = useSearchParams();
    const [videoInfo,setVideoInfo]=useState([]);
    // console.log(searchParams.get("v"));
    const getVideoInfo=async ()=>{
        const data=await fetch(YOUTUBE_VIDEO_INFOBYID_API+searchParams.get("v"))
        const jsonData=await data.json();
        // console.log(jsonData.items);
        setVideoInfo(jsonData.items);
      }
     useEffect(()=>{
        getVideoInfo();
     },[]) 

     if(!videoInfo[0]) return null;

     const {snippet,statistics}=videoInfo[0];
     const {channelTitle,title,description}=snippet;
     const {likeCount,viewCount,commentCount}=statistics;
    return (
    <div className="flex flex-col w-[1200px] px-2">
    {videoInfo && <>
        <div>
            <h1 className="font-bold text-2xl">{title}</h1>
        </div>
        <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">{channelTitle}</h1>
            <div className="flex p-2 text-lg font-semibold">
                <div className="flex items-center rounded-l-full bg-gray-200 py-2 px-4 border-r-2 border-gray-800 gap-1">
                    <BiLike />
                    <h1>{likeCount>=1000?(Math.floor(likeCount/1000)+"K"):likeCount}</h1>
                </div>
                <div className="flex items-center py-2 px-4 rounded-r-full bg-gray-200">
                    <BiDislike />
                </div>
                
            </div>
            
        </div>
        <div className="flex flex-col bg-gray-100 py-4 gap-1">
            <p className="text-lg font-medium">{viewCount>=1000000?(Math.floor(viewCount/1000000)+"M"):(viewCount>=1000?(Math.floor(viewCount/1000)+"K"):viewCount)} views</p>
            <div>
                <p className="line-clamp-3">{description}</p>
            </div>
            <h1 className="text-lg font-semibold">Comments:{commentCount}</h1>
        </div> 
    </>
        
    }
       
    </div>
       
    )
}
export default VideoInfo;