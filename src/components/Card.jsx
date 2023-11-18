import React from "react";
import Buttons from "./Buttons";
import Price from "./Price";
import ProductInfo from "./ProductInfo";
import Img from "./Img";
import products from "../products";

let Card = (props) => {
   const {addToCart, viewCart} = props
    return <section className="card" style={{backgroundColor: "#eee;"}}>
    <div class="container py-5">

    {products.map(product=>{
     return <div class="row justify-content-center mb-3">
        <div class="col-md-3 col-xl-10">
          <div class="card shadow-0 border rounded-3">
            <div class="card-body">
              <div class="row">
            <Img imgUrl = {product.image}/>
          <ProductInfo product = {product} /> 
        <div class="col-md-6 col-xl-3 border-sm-start-none border-start">
               <Price  price = {product.price} prevPrice = {product.prevPrice} />
         <h6 class="text-success">Free shipping</h6>
              <Buttons product = {product} addToCart = {addToCart} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  })}
      
    </div>
  </section>
}


export default Card