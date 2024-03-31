import { useSelector } from "react-redux";
import store from "../utils/store";

const Sidebar=()=>{
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
    // early return
    if(!isMenuOpen) return null;
    return (
        <div className="w-48 shadow-md">
        <ul>
            <li>Home</li>
            <li>Sports</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>
        <h1 className="font-bold pt-5">Subscription</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className="font-bold pt-5">Subscription</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        </div>
       
    )
}
export default Sidebar;