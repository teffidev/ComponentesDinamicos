import React from "react";
import Products from "../Products/Products";

const ProductList = () => {
    let type = "products3";
    return (
        <div>
            <Products type={type}/>
        </div>
    );
};

export default ProductList;
