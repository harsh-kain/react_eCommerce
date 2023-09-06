import React from 'react'
import { useFilterContext } from '../context/FilterContext'
import styled from 'styled-components';
const Sort = () => {
    const {filter_products,sorting } = useFilterContext();
  return (
    <>
        <Wrapper>
            <form action="#">

                <label htmlFor="sort">
                <select name="sort" id="sort" onClick={sorting}>
                    <option value="lowest">Price ( Lowest )</option>
                    <option value="highest">Price ( Highest )</option>
                    <option value="a-z">Price ( A - Z )</option>
                    <option value="z-a">Price ( Z - A ) </option>
                </select>
                </label>
            </form>
        </Wrapper>
    </>
  )
}

export default Sort;

const Wrapper = styled.div` 
    width: auto;
    height: auto;
    select{
        background-color: transparent;
        border: 2px solid #5252f7;
        padding:.4rem;
        font-size: 1vw;
        width: 140px;
        color: #000000;
        border-radius: 5px;
    }
    select option{
        border: none;
        color: #000000;
    }
    @media screen and (max-width: 800px) {
        select{
            font-size: 2vw;
            width: 130px;
        }
    }
    
`


