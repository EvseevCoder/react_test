import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";

function Post_Item(props) {

    return (

        <div className="post">
            <div className="post_content">
                <strong>{props.post.title} - {props.number}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post_button">
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    )
}

export default Post_Item