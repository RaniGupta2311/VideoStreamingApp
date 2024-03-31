export const YOUTUBE_IMG_URL="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg";
export const buttonList=["All","Songs","Live","Gaming","Cricket","News","Soccer","Valentine","90s","Cooking","Mixes","TSeries","Comedy"];
const GOOGLE_API_KEY=process.env.REACT_APP_GOOGLE_API_KEY;
export const YOUTUBE_VIDEOS_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&key="+GOOGLE_API_KEY;
