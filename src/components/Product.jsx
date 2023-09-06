import React from 'react'
import styled from 'styled-components';
import ProductList from './ProductList';
import Sort from './Sort';
const Product = () => {
  return (
    <>
      <Wrapper>
        <div className="leftContainer">
          <div className="filterContainer">
            <Sort/> 
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
  flex-direction: column;
  margin-top: 4rem;
  .leftContainer{
  }
  .rightContainer{
    width: 100%;
    height: auto;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
    
  }
`