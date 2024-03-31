import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body=()=>{
    return (
        <div className="flex flex-row">
            {/* <h1>Body Component</h1> */}
            <Sidebar/>
            <MainContainer/>
        </div>
    )
}
export default Body;