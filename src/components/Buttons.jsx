const Buttons = (props)=>{
    const {addToCart,product,viewCart} = props
    return <div class="d-flex flex-column mt-4">
    <button onClick={()=>{viewCart()}} class="btn btn-primary btn-sm" type="button">Details</button>
    <button onClick={()=>{addToCart(product)}} class="btn btn-outline-primary btn-sm mt-2" type="button">
      Add to Cart
    </button>
  </div>
}

export default Buttons