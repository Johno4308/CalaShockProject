import React from "react";

const Products = ({ products, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {products.map((product) => (
        <li key={product.id} className="list-group-item">
          <h2>{product.title}</h2>
          <h3>Brand: {product.brand}</h3>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
          <p>Discount {product.discountPercentage}%</p>
          <p>£ {product.price}.00</p>
          <p>Rating: {product.rating}</p>
          <p>Items Left: {product.stock}</p>
          <img src={product.thumbnail} />
          {product.images.map((img) => (
            <div key={img} className="row-lg-4 row-md-4 row-xs-4 thumb">
              <img
                src={img}
                className="img-responsive"
                width={50}
                height={50}
              />
            </div>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default Products;

//array properties
/*
title --
brand --
category --
description --
discountPercentage --
images[]
price
rating
stock
thumbnail
*/
