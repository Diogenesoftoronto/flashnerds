import React from "React";
import Comment from "./Show";
// const  comments = [
//     {
//         user: {
//             userId: 1,
//             avatar: "image",
//             name: "dudebro"
//         },
//         comment: {
//             commentId: 1,
//             post_time: "asdfsadfsdfasfds",
//             content: "dude what a nerd",

//         }
//     },
//     {

//     }

// ]
const CommentList = (props) => {
const {comments} =  props
const CommetMap = comments.map((comment) =>{<Comment {...comment} />})
    return(
        {CommentMap}
    )
}


export default CommentList