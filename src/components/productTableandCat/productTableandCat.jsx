import React from "react";
import SportData from '../../Data/datasport.json'
import ProductTable from "../productTable/productTable";
import ProductTablecat from "../productTablecat/productTablecat";


function productTableandCat(){
  const Sports = SportData;
  return (
    <div>
      {Sports.map((sport) =>
        <div>
          <ProductTablecat
            key={sport.id}
            category={sport.category}
          ></ProductTablecat>
          <ProductTable
            key={sport.id}
            name={sport.name}
            price={sport.price}
            stocked={sport.stocked}
          ></ProductTable>
        </div>
      )}
    </div>
  )
}

export default productTableandCat;
