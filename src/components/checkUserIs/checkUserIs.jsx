import React from "react";

function cheackUserIs(props) {
    const name = props.username;

    if (name == "BG2") {
        return <p>oui</p>
    }
    return <p>non</p>
}

export default cheackUserIs;