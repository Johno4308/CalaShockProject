import React, { useEffect, useState } from "react";
import { useProducts } from "./stores";

export function App() {
  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   axios("https://dummyjson.com/products")
  //     .then((response) => {
  //       setProducts(response.data);
  //       setError(null);
  //     })
  //     .catch(setError);
  // }, []);

  // if (error) return <p>An error occurred</p>;

  // console.log(products)
  const { products } = useProducts();
  return (
    <div>
      <h1>TESTING {new Date().toDateString()}</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <div>{p.title}</div>
            <img
              // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
              src={`https://i.dummyjson.com/data/products/${p.id}/1.jpg`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
