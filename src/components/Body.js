import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body=()=>{
    return (
        <div className="flex">
            {/* <h1>Body Component</h1> */}
            <Sidebar/>
            <MainContainer/>
        </div>
    )
}
export default Body;