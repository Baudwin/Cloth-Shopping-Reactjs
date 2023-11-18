const Image = (props)=>{
return  <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
<div class="bg-image hover-zoom ripple rounded ripple-surface">
  <img src={props.imgUrl}  class="w-100" />
  <a href="#!">
    <div class="hover-overlay">
      <div class="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
    </div>
  </a>
</div>
</div>
}

export default Image