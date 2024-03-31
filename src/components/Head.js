import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { YOUTUBE_IMG_URL } from "../utils/constants";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head=()=>{
    const dispatch=useDispatch();

    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }

    return (
        <div className="grid grid-flow-col p-2 m-2 shadow-xl">
            {/* <h1>Head Component</h1> */}
            <div className="flex items-center col-span-1">
                <GiHamburgerMenu className="min-w-16 min-h-10 cursor-pointer"
                    onClick={()=>toggleMenuHandler()}
                />
                <img src={YOUTUBE_IMG_URL} alt="youtube-logo"
                className="w-28 h-20"
                />
            </div>

            <div className="flex items-center col-span-10 px-5">
                <input className="w-[70%] border border-gray-400 p-2 rounded-l-full" type="text"/>
                <button className="border border-gray-400 px-5 py-[10px] rounded-r-full bg-gray-100"><IoSearchOutline size={20}/></button>
            </div>

            <div className="flex items-center col-span-1">
                <FaCircleUser className="min-w-16 min-h-10"/>
            </div>
        </div>
    )
}
export default Head;