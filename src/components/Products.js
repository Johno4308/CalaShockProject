import React, { useState } from "react";
import Modal from "./Modal";

const Products = ({ products, loading }) => {
  const [openModal, setOpenModal] = useState(false); //state for displaying zoom image
  const [modalData, setModalData] = useState(null); //state for which image to show due to .map on image array

  //loading userfeed back for bigger datasets
  if (loading) {
    return <h2>Loading...</h2>;
  }

  //individual component lay out below.
  return (
    <div className="container-fluid mx-2 border ">
      <ul className="container mb-4">
        {products.map((product) => (
          <li key={product.id} className="list-group-item mb-4 border">
            {/* image section*/}
            <div className="col-md-12 bg-light p-0">
              <img
                src={product.thumbnail}
                height="400"
                width="400"
                className="img-responsive rounded mx-auto d-block border"
              />
              <div className="container row">
                {product.images.map((img) => (
                  <div
                    key={img}
                    className="col-md-2 p-2 thumbnails border d-flex justify-content-center ml-4"
                  >
                    <img
                      src={img}
                      className="img-responsive gx-1 rounded justify-content-center align-items-center"
                      height="70"
                      width="70"
                      onClick={() => {
                        setOpenModal(true);
                        setModalData(img);
                      }}
                    />
                  </div>
                ))}
                <Modal
                  open={openModal}
                  onClose={() => setOpenModal(false)}
                  modalData={modalData}
                />
              </div>
              <div className="col-12">
                <h1 className="text-center text-justify text-capitalize">
                  {product.title}
                </h1>
                <h4 className="text-center text-justify text-capitalize">
                  Brand: {product.brand}
                </h4>
                <p className="m text-center text-justify text-capitalize">
                  Category: {product.category}
                </p>
                <p className="m text-center text-justify">
                  Description: {product.description}
                </p>
                <p className="m text-center text-justify">
                  Discount {product.discountPercentage}%
                </p>
                <p className="m text-center text-justify">
                  £ {product.price}.00
                </p>
                <p className="m text-center text-justify">
                  Rating: {product.rating} / 5
                </p>
                <p className="m text-center text-justify text-danger">
                  Items Left: {product.stock}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
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
