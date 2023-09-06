import React from 'react'
import styled from 'styled-components';
import ProductList from './ProductList';
import Sort from './Sort';
import SearchFilter from './SearchFilter';
const Product = () => {
  return (
    <>
      <Wrapper>
        <div className="leftContainer">
          <div className="filterContainer">
            <Sort/> 
            <SearchFilter/>
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
    width: 100%;
    padding: 1vw 5vw;

    .filterContainer{
      width: 100%;
      display:flex;
      justify-content:space-between;
      align-items:center;
    }
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