const ProductInfo = (props)=>{
    const {product} = props
    const {name,gender}=product
    return  <div class="col-md-6 col-lg-6 col-xl-6">
    <h5>{name}</h5>
    <div class="d-flex flex-row">
      <div class="text-danger mb-1 me-2">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
      </div>
      <span>145</span>
    </div>
    <div class="mt-1 mb-0 text-muted small">
      <span>100% cotton</span>
      <span class="text-primary"> • </span>
      <span>Light weight</span>
      <span class="text-primary"> • </span>
      <span>Best finish<br /></span>
    </div>
    <div class="mb-2 text-muted small">
      <span>Unique design</span>
      <span class="text-primary"> • </span>
      <span>For {gender}</span>
      <span class="text-primary"> • </span>
      <span>Casual<br /></span>
    </div>
    <p class="text-truncate mb-4 mb-md-0">
      There are many variations of passages of Lorem Ipsum available.
    </p>
  </div>
}

export default ProductInfo