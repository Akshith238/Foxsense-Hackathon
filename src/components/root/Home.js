import React from 'react'
import { useState,useEffect,useRef } from 'react';
import NavBar from '../Navbar';
import Hero from './Hero';
import Main from './Main';
import Footer from '../Footer';
import Loader from '../Loader';
import { useCart } from '../../context/CartContext';

const Home = () => {
  const [isLoading,setLoading]=useState(true);
  const mainRef = useRef(null);
  const footerRef = useRef(null);

  const {cart, updateCart} = useCart();
    useEffect(()=>{
      setTimeout(()=>{
         setLoading(false);
      },2000)
    },[])
  return (
    <div>
      {isLoading?(
        <Loader />
      ):(
        <div className='flex flex-col'>
            <NavBar mainRef={mainRef} footerRef={footerRef} cart={cart}/>
            <Hero />
            <Main ref={mainRef} cart={cart} setCart={updateCart}/>
            <Footer ref={footerRef}/>
        </div>
      )}
    </div>
  )
}

export default Home