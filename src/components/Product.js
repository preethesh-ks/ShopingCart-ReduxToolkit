import React, { useState,useEffect } from "react";
import axios from "axios";
import  Alert  from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch,useSelector } from "react-redux";
import {add} from "../store/cartSlice"
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode"
const Product =  () => {
const {data,status} = useSelector(state=>state.products)
const dispatch = useDispatch()
  useEffect(() => {

    //dispatch an action for fetchproducts api call in redux
    dispatch(getProducts());
    // const fetch = async () => {
    //   try {
    //     const api = await axios.get("https://fakestoreapi.com/products");
    //     console.log(api.data);
    //     setData(api.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetch()
  }, []);
  const addToCart = (product)=>{
    dispatch(add(product))
  }

  if(status=== StatusCode.LOADING){
    return <p>Loadi</p>
  }
  if(status=== StatusCode.ERROR){
    return <Alert key="danger" variant="danger">Something went wrong</Alert>
  }

  const cards = data.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card className="h-100" key={product.id}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{backgroundColor:"white"}}>
          <Button variant="primary" onClick={()=> addToCart(product)}>Add to cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>product List</h1>
      <div className="row">
        {cards}
      </div>
    </>
  );
};

export default Product;
