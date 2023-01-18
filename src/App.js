import React, { useEffect, useState } from "react";
import axios from "axios"; //for api call
import Products from "./components/Products"; //products component
import Paginations from "./components/Paginations"; //component for pagination requirement

export function App() {
  const [products, setProducts] = useState([]); //set state of products array
  const [data, setData] = useState([]); // this other state is a copy of the array which helps with catergory filtering, if theres a better
  //approach I would love to know it!
  const [loading, setLoading] = useState(false); //loading for user feedback on bigger data sets
  const [currentPage, setCurrentPage] = useState(1); //state of which page
  const [productsPerPage] = useState(10); //state on first 10 items as requested

  //Api request using axios
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
      setData(res.data.products);
      setLoading(false);
    };

    fetchProducts();
  }, []); //empty for once of mount

  // Get current posts
  const indexOfLastProducts = currentPage * productsPerPage;
  const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //filter function
  const filterResults = (catItem) => {
    const result = data.filter((curData) => {
      return curData.category === catItem;
    });
    setProducts(result);
  };

  return (
    <div className="container-fuild mx-2">
      <h1 className="display-1 text-center">CalaShockProject</h1>
      <div className="col-12 align-items-center justify-content-evenly">
        <h2 className="display-5 text-center">Categories</h2>
        {/* div and buttons for catergory */}
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-outline-secondary"
            onClick={() => setProducts(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              filterResults("smartphones");
              setOpenModal(false);
            }}
          >
            Smartphones
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => filterResults("laptops")}
          >
            Laptops
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => filterResults("fragrances")}
          >
            Fragrances
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => filterResults("skincare")}
          >
            Skincare
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => filterResults("groceries")}
          >
            Groceries
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => filterResults("home-decoration")}
          >
            Home-Decoration
          </button>
        </div>
      </div>
      <Products products={currentProducts} loading={loading} />
      <Paginations
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </div>
  );
}

/*
Smartphones
Laptops
Fragrances
Skincare
Groceries
Home-Decoration
*/
