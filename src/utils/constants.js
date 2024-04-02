export const YOUTUBE_IMG_URL="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg";
export const buttonList=["All","Songs","Live","Gaming","Cricket","News","Soccer","Valentine","90s","Cooking","Mixes","TSeries","Comedy"];
const GOOGLE_API_KEY=process.env.REACT_APP_GOOGLE_API_KEY;
export const YOUTUBE_VIDEOS_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;
export const YOUTUBE_VIDEO_INFOBYID_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+GOOGLE_API_KEY+"&id=";
export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_SEARCH_BY_QUERY_API="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key="+GOOGLE_API_KEY+"&q=";


