import React from 'react'
import styled from 'styled-components'
import GridLayoutProduct from './homePageComponents/GridLayoutProduct'
const GridView = ({products}) => {
  return (
    <>
        <Wrapper>
          <div className="container">
            {products.map((curr) =>{
              
              return <GridLayoutProduct key={curr.id} {...curr}/>
            })}
          </div>
        </Wrapper>
    </>
  )
}

export default GridView

const Wrapper = styled.div`
  width: 100%;
  min-height: 140vh;
  padding: 1rem;
  .container{

    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
  }
`