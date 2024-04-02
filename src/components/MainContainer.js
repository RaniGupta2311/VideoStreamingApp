import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import SearchList from "./SearchList";

const MainContainer=()=>{
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
    const isSearchQuery=useSelector(store=>store.app.isSearchQuery.isSearchQueryFlag);
    return (
        <div className={`flex flex-col items-center relative ${isMenuOpen?"w-[85%]":"w-[100%]"}  left-0 right-0 mx-auto`}>
            {/* <h1>MainContainer Component</h1> */}
            <ButtonList/>
            {isSearchQuery?<SearchList/>:<VideoContainer/>}
        </div>
    )
}
export default MainContainer;