import Button from "./Button";
import { buttonList } from "../utils/constants";
const ButtonList=()=>{
    return (
        <div className="absolute top-0  left-0 right-0 flex flex-row p-2 w-[100%] ">
            {/* <h1>ButtonList Component</h1> */}
            <div className="flex overflow-x-scroll">
            {buttonList.map((button,index)=>{
                return <Button key={index} name={button}/>
            })}
            </div>   
        </div>
    )
}
export default ButtonList;