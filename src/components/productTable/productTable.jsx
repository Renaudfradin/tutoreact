import React from "react";

function productTable(props){
  return(
    <div>
        <div className="rowinfo">
          {props.stocked != true ? <p style={{color:'red'}}>{props.name} rouge</p> : <p>{props.name}</p>}
          <p>{props.price}</p>
        </div>
    </div>
  )
}
  
export default productTable;