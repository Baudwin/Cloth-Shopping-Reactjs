const Price = (props)=>{
    return <div class="d-flex flex-row align-items-center mb-1">
    <h5 class="mb-1 me-1">CAF {props.price}</h5>
    <span class="text-danger"><s>CAF {props.prevPrice}</s></span>
  </div>
}

export default Price