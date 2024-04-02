import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { YOUTUBE_IMG_URL, YOUTUBE_SEARCH_API } from "../utils/constants";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, toggleSearchQuery } from "../utils/appSlice";
import {useState,useEffect} from "react";
import { cacheResults } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";

const Head=()=>{
    const dispatch=useDispatch();
    const searchCache=useSelector(store=>store.search)
    const navigate=useNavigate();

    const [searchQuery,setSearchQuery]=useState("");
    const [suggestions,setSuggestions]=useState([]);
    const [showSggestions,setShowSuggestions]=useState(false)

    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }
    const searchListHandler=()=>{
        navigate("/search?q="+searchQuery);
        console.log("navigate To ",searchQuery);
     
        
    }
    useEffect(()=>{
        // console.log(searchQuery);
        // make an api call after every key press
        // but if difference between 2 api calls is <200ms
        // decline the api call
       const timer= setTimeout(()=>{
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery])
            }
            else{
                getSearchSuggestions();
            }

            
        },200)

        return ()=>{
            clearTimeout(timer);
        }
        
    },[searchQuery])

    const getSearchSuggestions=async()=>{
        // console.log("API CALL -",searchQuery)
        const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const jsonData=await data.json();
        // console.log(jsonData[1]);
        setSuggestions(jsonData[1]);
        dispatch(cacheResults({
            [searchQuery]:jsonData[1]
        }))
    }

    return (
        <div className="grid grid-flow-col p-2 m-2 shadow-xl h-18 items-center">
            {/* <h1>Head Component</h1> */}
            <div className="flex items-center col-span-1">
                <GiHamburgerMenu className="min-w-16 min-h-10 cursor-pointer"
                    onClick={()=>toggleMenuHandler()}
                />
                <img src={YOUTUBE_IMG_URL} alt="youtube-logo"
                className="w-28 h-20 sm:block hidden"
                />
            </div>

            <div className=" col-span-10 px-5">
                <div className="flex items-center">
                <input className="px-4 w-[90%] sm:w-[70%] border border-gray-400 p-2 rounded-l-full" type="text"
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                    onFocus={()=>setShowSuggestions(true)}
                    onBlur={()=>setShowSuggestions(false)}

                />
                <button className="border border-gray-400 px-5 py-[10px] rounded-r-full bg-gray-100"
                onClick={searchListHandler}><IoSearchOutline size={20}/></button>
                </div>
                {showSggestions && <div className="absolute z-50 bg-white py-2 px-5 w-[59%] sm:w-[50%] md:w-[48%] lg:w-[52%]  shadow-lg rounded-b-lg border border-gray-100">
                    <ul>
                        {suggestions.map((sugg,index)=><li key={index} className="py-2 px-3 hover:bg-gray-100">{sugg}</li>)}
                    </ul>
                </div>}
            </div>

            <div className="flex items-center col-span-1">
                <FaCircleUser className="min-w-16 min-h-10"/>
            </div>
        </div>
    )
}
export default Head;