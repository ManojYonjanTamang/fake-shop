import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectedProduct,
  removePrevProduct,
} from "../redux/actions/productActions";

const ProductDetail = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();

  const product = useSelector((state) => state.selectedProductReducer);

  const { id, title, price, category, description, image } = product;

  const getProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => console.log(error));
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    getProductDetail();
    return () => {
      dispatch(removePrevProduct());
    };
  }, [productId]);
  // console.log(product);

  return (
    <>
      <div>
        {id}. <b>{title}</b>: <i>{price}</i>
      </div>
      <div>{category} </div>
      <div>{description} </div>
      <img src={image} alt={title} />
    </>
  );
};

export default ProductDetail;
