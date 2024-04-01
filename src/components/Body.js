import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body=()=>{
    return (
        <div className="flex flex-row h-[calc(100vh-18rem)]">
            {/* <h1>Body Component</h1> */}
            <Sidebar/>
            {/* <MainContainer/> */}
            <Outlet/>
        </div>
    )
}
export default Body;