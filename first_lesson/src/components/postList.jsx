import React from "react";
import Post_Item from "./post_item";

function PostList({posts, title, remove}) {
    
    
    
    return (
       <div>
            <h1 style={{textAlign: 'center', marginTop:'20px'}}>{title}</h1>
            {
                posts.map((post, index) => 
                    <Post_Item remove={remove} number={index + 1} post={post} key={post.id}/>)
            }
       </div>
    )
}




export default PostList