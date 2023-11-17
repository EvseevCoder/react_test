import React, { useState } from "react";

function Post_Item(props) {

    return (

        <div className="post">
            <div className="post_content">
                <strong>{props.post.title} - {props.post.id}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post_button">
                <button>Удалить</button>
            </div>
        </div>
    )
}

export default Post_Item