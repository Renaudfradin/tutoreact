import React from "react";
import { Link } from "react-router-dom";

const nav =() =>{
    return(
        <div>
            <Link to="/">home</Link>
            <Link to="/sport">sport</Link>
        </div>
    )
} 

export default nav