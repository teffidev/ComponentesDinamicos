import React from "react";
import ProductsJson from "../../../products.json";
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ type }) => {
    let productsByType = ProductsJson[type];

    return (
        <div>
            {productsByType.map((element) => {
                return <ProductCard element={element} key={element.id} />;
            })}
        </div>
    );
};

export default Products;
