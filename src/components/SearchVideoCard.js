const SearchVideoCard=({info})=>{
    // console.log(info);
    const {snippet}=info;
    const {channelTitle,title,thumbnails}=snippet;
    
    return (
        <div className="w-72 p-2 m-2 shadow-lg">
           
            <img src={thumbnails.medium.url} alt="thumbnail" 
                className="rounded-lg"
            />
            <ul className="h-24">
                <li className="font-bold py-2 whitespace-nowrap overflow-ellipsis overflow-hidden ...">{title}</li>
                <li className="whitespace-nowrap overflow-ellipsis overflow-hidden ...">{channelTitle}</li>
                {/* <li>{viewCount>=1000000?(Math.floor(viewCount/1000000)+"M"):(viewCount>=1000?(Math.floor(viewCount/1000)+"K"):viewCount)} views</li> */}
            </ul>
        </div>
    )
}

export default SearchVideoCard;