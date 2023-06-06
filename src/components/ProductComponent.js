import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.productReducers.products);

  const showProducts = products.map((product) => {
    const { id, title, price, description, image, category } = product;

    return (
      <div key={id}>
        <Link to={`/product/${id}`}>
          <div>
            {id}. <b>{title}</b>: <i>{price}</i>
          </div>
          <div>{category} </div>
          <div>{description} </div>
          <img src={image} alt={title} />
        </Link>
      </div>
    );
  });

  return <div>{showProducts}</div>;
};

export default ProductComponent;
