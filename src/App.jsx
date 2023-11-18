import React, { useState } from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Card from './components/Card'
import BestSellers from './components/BestSellers';


const App = () => {
const [cart, setCart] = useState([])

const addToCart = (product)=>{
    setCart((prevItems)=>{
        return [...prevItems, product]
    })
}

const viewCart = ()=>{
    console.log(cart);
}


    return <div>
<Header viewCart={viewCart} cart = {cart} />
<Card addToCart = {addToCart}  />
<BestSellers/>
<Footer/>

 </div>
}

export default App