import React from "react";

const ProductCard = ({ element }) => {
    return (
        <div>
            <h1>{element.name}</h1>
            <img src={element.image} alt="Device" />
            <h2>{element.price}</h2>
        </div>
    )
};

export default ProductCard;
