import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer=()=>{
    return (
        <div className="flex flex-col items-center">
            {/* <h1>MainContainer Component</h1> */}
            <ButtonList/>
            <VideoContainer/>
        </div>
    )
}
export default MainContainer;