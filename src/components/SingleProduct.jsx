import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useProductContext } from '../context/productContext';
import PageNavigation from './PageNavigation';
import styled from 'styled-components';
import FormatPrice from '../components/FormatPric'
import CartAmountToggle from './CartAmountToggle';
import ImageContainer from './ImageContainer';
const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();

  const { id } = useParams();

  const { id: alias, name, company, price, description, category, stock, stars, reviews, image } = singleProduct;

  const [amount , setAmount ] = useState(1);

  const setIncrease = () =>{
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  }
  const setDecrease = () =>{
    amount > 1 ? setAmount(amount -1) : setAmount(1);
  }
  
  useEffect(() => {

    getSingleProduct(`${API}?id=${id}`)

  }, [])


  if (isSingleLoading) {
    return <div className='loading'>Loading....</div>
  }
  return (

    <Wrapper>
      <PageNavigation title={name} />
      <Container>
        <LeftContainer>
          <div className="leftInnerContainer">
            <ImageContainer imageData={image}/>
          </div>
        </LeftContainer>

        <RightContainer>
          <h2 className='name'>{name}</h2>
          <h5 className='company'>{company}</h5>
          <div className='star'>
            <p>{stars} </p>
            <p> <i className="las la-star"></i>Rating </p>

          </div>
          <p className='review'>{reviews} Review</p>

          <h3 className='originalPrice'><FormatPrice price={price} /></h3>
          <div className="price">
            MRP <del><FormatPrice price={price + 250000} /></del>
          </div>
          <p className='desc'>{description}</p>
          <div className="icons">
            <div className="iconContainer">
              <i className="las la-shipping-fast"></i>
              <span>Free Delivery</span>
            </div>
            <div className="iconContainer">
              <i className="las la-shield-alt"></i>
              <span>1 Year Warranty</span>
            </div>
            <div className="iconContainer">
              <i className="las la-undo-alt"></i>
              <span>7 Days Return</span>
            </div>
          </div>
          <p>Available : <span style={{fontWeight:'bolder'}}> {stock > 0 ? 'In Stock' : 'Out of Stock'} </span></p>

          <CartAmountToggle amount={amount} setIncrease={setIncrease} setDecrease={setDecrease}/>
          <NavLink to='/cart' onClick={() => addToCart(id,amount)}>
            <button>Add To Cart</button>  
           </NavLink>
          
        </RightContainer>
      </Container>
    </Wrapper>
  )
}
export default SingleProduct

const Wrapper = styled.div`
  width: 100%;

`

const Container = styled.div`
  
  width: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 2vw;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 1vw;
  }
  
`

const RightContainer = styled.div`
  width: 100%;
  padding: 3vw;
  display:flex;
  justify-content:center;
  align-items:flex-start;
  flex-direction: column;
  text-transform: capitalize;
  .name{
    font-size: 2.5vw;
  }
  .company{
    font-size: 1.5vw;
    margin-bottom: .3rem;
  }
  .star{
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: green;
    color: white;
    padding: 0%.2rem;
    border-radius: 2px;
    margin: .2rem 0rem;
    i{
      padding: .2rem;
    }
  }
  .star svg{
    width: 20px;
    height: 20px;
    object-fit: cover;

  }
  .review{
    color: #000000;
  }
  .originalPrice{
    font-size: 1.7vw;
  }
  .price{
    color: gray;
  }
  .desc{
    font-size: 1.3vw;
  }
  .icons{
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 1rem 0rem;

    .iconContainer{
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction: column;
      margin-right: 1rem ;
      i{
        background-color: #8e8efc;
        padding: .5rem;
        font-size: 2vw;
        border-radius: 50%;
        color: white;
        margin: .2rem 0rem;
      }
    }
  }
  button{
    background-color: transparent;
    border: none;
    background-color:#8e8efc;
    color: white;
    font-size: 1.5vw;
    padding: .4rem;
    border-radius: 5px;
  }
  @media screen and (max-width:900px) {
    .name{
    font-size: 4.5vw;
    }
    .company{
    font-size: 3vw;
    }
    .star{
      padding: .2rem .3rem;
    }
   
    .originalPrice{
      font-size:5vw;
    }
    
    .desc{
      font-size: 2.6vw;

    }
  }
`

const LeftContainer = styled.div`
  
  width: 100%;
  height: 40vw;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  
  @media screen and (max-width: 900px) {
    height: 70vw;
    /* background-color: red; */
  }
  
`