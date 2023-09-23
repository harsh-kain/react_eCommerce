import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import ProductList from '../features/product-list/ProductList'
const HomePage = () => {
    return (
    <>
        <Navbar>
            <ProductList/>
            
        </Navbar>
    </>
  )
}

export default HomePage