import React from 'react'
import styled from 'styled-components';
import ProductList from './ProductList';
const Product = () => {
  return (
    <>
      <Wrapper>
        <div className="leftContainer">
          <div className="filterContainer">
            <h1>kain</h1>
          </div>
        </div>
        <div className="rightContainer">
          <ProductList/>
        </div>
      </Wrapper>
    </>
  )
}

export default Product;

const Wrapper = styled.div`
  
  width: 100%;
  min-height: 100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top: 4rem;
  .leftContainer{
    background-color: green;
    width:20%;
  }
  .rightContainer{
    width: 80%;
    height: auto;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
    
  }
`