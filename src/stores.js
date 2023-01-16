import React, { useEffect, useState } from "react";
import axios from "axios";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        setError(null);
      })
      .catch(setError);
  }, []);

  if (error) return <p>An error occurred</p>;

  console.log(products);

  return { products };
}
