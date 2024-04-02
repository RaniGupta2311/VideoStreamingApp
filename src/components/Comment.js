import { FaCircleUser } from "react-icons/fa6";
const Comment=({data})=>{
    const {name,text,replies}=data;
    return (
        <>
        <div className="flex items-center gap-2 bg-gray-100 p-2  my-2 rounded-lg">
            <div>
                <FaCircleUser/>
            </div>
            <div>
                <h1>{name}</h1>
                <h2>{text}</h2>
            </div>
        </div>
        {/* <Comment/> */}
        </>
    )
}
export default Comment;