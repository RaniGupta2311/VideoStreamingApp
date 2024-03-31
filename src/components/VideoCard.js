const VideoCard=({info})=>{
    console.log(info);
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
    return (
        <div className="w-72 p-2 m-2 shadow-lg">
            {/* <h1>VideoCard Component</h1> */}
            <img src={thumbnails.medium.url} alt="thumbnail" 
                className="rounded-lg"
            />
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    )
}
export default VideoCard;