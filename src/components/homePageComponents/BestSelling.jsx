import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {useProductContext} from '../../context/productContext'
import GridLayoutProduct from './GridLayoutProduct'

const BestSelling = () => {

    const {isLoading , featureProduct} = useProductContext();
    // console.log(featureProduct);
    if(isLoading){
        return <div>.......Loading</div>
    }

  return (
    <Wrapper> 
        <div className="container">
            {/* <div className="check"></div> */}
            <div className="heading">
                <h4>Check Now!</h4>
                <h1>Our Feature Services</h1>
            </div>
            <div className="box">
               {featureProduct.map((curEle) => {
                return <GridLayoutProduct key={curEle.id} {...curEle}/>
               })}
            </div>
            <NavLink to='/product'><button>All Products</button></NavLink>
        </div>

    </Wrapper>
  )
  
  
}

export default BestSelling;

const Wrapper = styled.section`
    width: 100%;
    min-height: 40vh;
    margin-top: 6vw;
    overflow: hidden;
    .container{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction: column;
        button{
            background-color: transparent;
            border: none;
            background-color:#8e8efc;
            color: white;
            font-size: 1.5vw;
            padding: .4rem;
            border-radius: 5px;
            margin: 2rem;
        }
    }
    .heading{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction: column;
        h1{
            font-size: 4vw;
        }
        h4{
            font-size: 2vw;
        }
    }
    .box{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    @media screen and (max-width:700px) {
        .heading{
        
            h1{
                font-size: 5vw;
            }
            h4{
                font-size: 4vw;
            }
        }
    }
`