import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FormatPrice from '../FormatPric'
const GridLayoutProduct = (curEle) => {
    const {id, name, image, price, category} = curEle;
  return (
        <NavLink to={`/singleproduct/${id}`} style={{textDecoration: 'none'}}>
            <Wrapper className="cards">
                <figure>
                    <figcaption >{category}</figcaption>
                    <img src={image} alt={name} />
                </figure>
                <div className="cardData">
                    <h3>{name}</h3>
                    <p>{<FormatPrice price={price}/>}</p>
                </div>
            </Wrapper>
        </NavLink>
    
  )
}

export default GridLayoutProduct;

const Wrapper = styled.div`
    width: 300px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem;

    figure{
        img{
            width: 300px;
            height: auto;
            border-radius: 5px;
            object-fit: cover;
        }
        figcaption{
            background: rgba( 255, 255, 255, 0.25 );
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            backdrop-filter: blur( 10px );
            -webkit-backdrop-filter: blur( 3.5px );
            border-radius: 5px;
            border: 1px solid rgba( 255, 255, 255, 0.18 );
            display: inline-block;
            padding: .3rem .4rem;
            transform: translateX(10px) translateY(60px);
            color: white;
            background-blend-mode: lighten;
            margin-bottom: .7rem;
            font-size: 1vw;
        }
        
    }
    .cardData{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        h3{
            text-decoration: none;
            color: black;
        }
        p{
            text-decoration: none;
            color: black;
        }
    }
    @media screen and (max-width : 800px) {
        figure{

            figcaption{
                font-size: 2vw;
            }
        }
    }
    @media screen and (max-width : 500px) {
        figure{

            figcaption{
                font-size: 3vw;
            }
        }
    }
`