import React from "react";

function Post(props){
    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.id}</p>
        </div>
    )
}

export default Post;