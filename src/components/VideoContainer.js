import VideoCard from "./VideoCard";

const VideoContainer=()=>{
    return (
        <div className="flex ">
            {/* <h1>VideoContainer Component</h1> */}
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
        </div>
    )
}
export default VideoContainer;