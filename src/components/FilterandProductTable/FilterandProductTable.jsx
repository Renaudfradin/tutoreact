import React from "react";
import ProductTableandCat from "../productTableandCat/productTableandCat";
import SearchBar from "../searchBar/searchBar";

function FilterandProductTable(props) {
  return(
    <div>
      <SearchBar> </SearchBar>
      <p>name</p>
      <p>price</p>
      <ProductTableandCat> </ProductTableandCat>
    </div>
  )  
}

export default FilterandProductTable;