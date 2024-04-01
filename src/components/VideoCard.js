const VideoCard=({info})=>{
    // console.log(info);
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
    const {viewCount}=statistics
    return (
        <div className="w-72 p-2 m-2 shadow-lg">
            {/* <h1>VideoCard Component</h1> */}
            <img src={thumbnails.medium.url} alt="thumbnail" 
                className="rounded-lg"
            />
            <ul className="h-24">
                <li className="font-bold py-2 whitespace-nowrap overflow-ellipsis overflow-hidden ...">{title}</li>
                <li className="whitespace-nowrap overflow-ellipsis overflow-hidden ...">{channelTitle}</li>
                <li>{viewCount>=1000000?(Math.floor(viewCount/1000000)+"M"):(viewCount>=1000?(Math.floor(viewCount/1000)+"K"):viewCount)} views</li>
            </ul>
        </div>
    )
}
export const AdVideoCard=({info})=>{
    return <div className="p-1 m-1 border border-red-900">
        <VideoCard info={info}/>
    </div>
}
export default VideoCard;
