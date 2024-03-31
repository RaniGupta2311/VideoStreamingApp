import Button from "./Button";
import { buttonList } from "../utils/constants";
const ButtonList=()=>{
    return (
        <div className="flex flex-row  p-2 overflow-x-auto">
            {/* <h1>ButtonList Component</h1> */}
            <div className="flex">
            {buttonList.map((button,index)=>{
                return <Button key={index} name={button}/>
            })}
            </div>   
        </div>
    )
}
export default ButtonList;