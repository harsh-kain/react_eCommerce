import React from 'react'
import styled from 'styled-components';
const CartAmountToggle = ({amount , setIncrease, setDecrease}) => {
  return (
    <>
        
        <Wrapper>
            <i class="las la-plus" onClick={()=> setIncrease()}></i>
            <p>{amount}</p>
            <i class="las la-minus" onClick={()=> setDecrease()}></i>
           
        </Wrapper>
    
    </>
  )
}

export default CartAmountToggle;

const Wrapper = styled.div`
    
    width: 130px;
    height: 100px;
    display:flex;
    justify-content:space-between;
    align-items:center;

    i{
        font-size: 2vw;
        font-weight: 600;
        background-color: #9c9cf0;
        color: white;
        border-radius: 8px;
        padding: .3rem;
    }
    p{
        font-size: 2vw;
    }
`
