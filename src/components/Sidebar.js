import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar=()=>{
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
    // early return
    if(!isMenuOpen) return null;
    return (
        <div className="w-48 shadow-md h-screen bg-white -mt-[8px] py-4 px-4">
        <ul>
            <li className="py-1"><Link to="/">Home</Link></li>
            <li className="py-1">Shorts</li>
            <li className="py-1">Subscriptions</li>
            <li className="py-1">Youtube Music</li>
        </ul>
        <h1 className="font-bold pt-5">Subscription</h1>
        <ul>
            <li className="py-1">History</li>
            <li className="py-1">Watch Later</li>
            <li className="py-1">Downloads</li>
            <li className="py-1">Movies</li>
        </ul>
        {/* <h1 className="font-bold pt-5">Subscription</h1>
        <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Live</li>
            <li>Gaming</li>
        </ul> */}
        <h1 className="font-bold pt-5">Explore</h1>
        <ul>
            <li className="py-1">Trending</li>
            <li className="py-1">Shopping</li>
            <li className="py-1">Live</li>
            <li className="py-1">Gaming</li>
            <li className="py-1">News</li>
            <li className="py-1">Courses</li>
            <li className="py-1">Sports</li>
            <li className="py-1">Fashion</li>
            {/* <li className="py-1">Beauty</li> */}
            <li className="py-1">Podcasts</li>
        </ul>
        </div>
       
    )
}
export default Sidebar;