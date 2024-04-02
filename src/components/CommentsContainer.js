import Comment from "./Comment";
import CommentsLists from "./CommentLists";

const commentsData=[
    {
        name:"Rani Gupta",
        text:"lorem ipsum color sit amet, consecturer adip",
        replies:[
            {
                name:"Rani Gupta",
                text:"lorem ipsum color sit amet, consecturer adip",
                replies:[]
            },
            {
                name:"Rani Gupta",
                text:"lorem ipsum color sit amet, consecturer adip",
                replies:[{
                    name:"Rani Gupta",
                    text:"lorem ipsum color sit amet, consecturer adip",
                    replies:[]
                },{
                    name:"Rani Gupta",
                    text:"lorem ipsum color sit amet, consecturer adip",
                    replies:[]
                },{
                    name:"Rani Gupta",
                    text:"lorem ipsum color sit amet, consecturer adip",
                    replies:[{
                        name:"Rani Gupta",
                        text:"lorem ipsum color sit amet, consecturer adip",
                        replies:[]
                    },{
                        name:"Rani Gupta",
                        text:"lorem ipsum color sit amet, consecturer adip",
                        replies:[]
                    },{
                        name:"Rani Gupta",
                        text:"lorem ipsum color sit amet, consecturer adip",
                        replies:[]
                    }]
                }]
            }
        ]
    },
    {
        name:"Rani Gupta",
        text:"lorem ipsum color sit amet, consecturer adip",
        replies:[]
    },
    {
        name:"Rani Gupta",
        text:"lorem ipsum color sit amet, consecturer adip",
        replies:[{
            name:"Rani Gupta",
            text:"lorem ipsum color sit amet, consecturer adip",
            replies:[]
        },{
            name:"Rani Gupta",
            text:"lorem ipsum color sit amet, consecturer adip",
            replies:[]
        },{
            name:"Rani Gupta",
            text:"lorem ipsum color sit amet, consecturer adip",
            replies:[{
                name:"Rani Gupta",
                text:"lorem ipsum color sit amet, consecturer adip",
                replies:[]
            },{
                name:"Rani Gupta",
                text:"lorem ipsum color sit amet, consecturer adip",
                replies:[]
            },{
                name:"Rani Gupta",
                text:"lorem ipsum color sit amet, consecturer adip",
                replies:[]
            },{
                name:"Rani Gupta",
                text:"lorem ipsum color sit amet, consecturer adip",
                replies:[]
            }]
        }]
    },
    {
        name:"Rani Gupta",
        text:"lorem ipsum color sit amet, consecturer adip",
        replies:[]
    },
    {
        name:"Rani Gupta",
        text:"lorem ipsum color sit amet, consecturer adip",
        replies:[]
    }
]
const CommentsContainer=()=>{
    return (
        <div className="p-2 m-5">
            {/* <h1>Comments:</h1> */}
            {/* {commentsData.map((cmnt)=><Comment data={cmnt}/>)}     */}
            <CommentsLists comments={commentsData}/>
        </div>
    )
}
export default CommentsContainer;