import React, { useState , useEffect } from 'react';
import Products from '../components/products/Products';
import Footer from '../components/footer/Footer'
import Category from '../components/products/category';
// import { useEffect } from 'react';



const Home = () => {
const [products , setProducts] = useState([])
    useEffect(() => {
      let fecthProducts = async ()=>{
          let res = await fetch('https://fakestoreapi.com/products')
          const data = await res.json()
        //   console.log(data)
          setProducts(data)

      } 
      fecthProducts()
    }, [])
    
  return(  
  <>
    <h1 className='text-center my-5'> slider</h1>
    
    <Category products={products}/>

    <h1 className='text-center my-5'> All Products</h1>
    {
    products.length > 0 ?
    <Products products={products} />
    : <div> Wait a lil We r coming ....</div>
    }

    <Footer></Footer>
  </>
  )
};

export default Home;