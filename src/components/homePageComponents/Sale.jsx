import React from 'react'
import styled from 'styled-components'

const Sale = ({data}) => {

  return (
    <>
        <Container color={data.color} secondColor={data.color}>
            <div className="left">
                <p>{data.discount}</p>
                <h1>{data.product}</h1>
                <p>{data.date}</p>
            </div>
            <img src={data.img} alt="" />
            <div className="right">
                <h1>SUMMER SALE</h1>
                <p>{data.text}</p>
            </div>
        </Container>
    </>
  )
}

export default Sale;

const Container = styled.div`
    width: auto;
    min-height: 30vh;
    margin: var(--marginSmall) var(--marginMedium);
    background: ${props => props.color};
    background: linear-gradient(90deg, rgba(219,56,56,1) 0%, rgba(199,150,150,1) 100%);
    border-radius: 10px;
    padding: var(--paddingMedium);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    font-family: var(--fontOne);
    color: var(--white);
    img{
        position: absolute;
        left: 35%;
        width: 500px;
        height: auto;
        object-fit: cover;
    }
    .left{
        padding: var(--paddingSmall);
    }
    .right{
        /* padding: var(--paddingSmall); */
        text-align: right;
    }
    .left p{
        font-size: var(--fontMedium);
        font-weight: 600;
    }
    .left h1{
        font-size: var(--fontLarge);
        color: var(--white);
    }
    .right p{
        font-size: var(--fontSmall);
    }
    .right h1{
        font-size: var(--fontSmall);
    }

    @media screen and (max-width: 1600px) {
        .left p{
            font-size: var(--fontSmall);
            font-weight: 600;
        }
        .left h1{
            font-size: var(--fontMediumLarge);
            color: var(--white);
        }
        img{
            left: 20%;
            width: 400px;
        }
        
    }
    @media screen and (max-width: 900px) {
        .left p{
            font-size: var(--fontExtraSmall);
            font-weight: 600;
        }
        .left h1{
            font-size: var(--fontMedium);
            color: var(--white);
        }
        img{
            left: 60%;
            width: 250px;
        }
        .right{
            display: none;
        }
        margin: var(--marginSmall);
        .left{
            padding: var(--paddingExtraSmall);
        }
        
    }
    @media screen and (max-width: 600px) {
        img{
            position: relative;
            left: 0;
        }
        flex-direction: column;
        .left p{
            font-size: var(--fontExtraSmall);
            font-weight: 600;
        }
        .left h1{
            font-size: var(--fontSmall);
        }
    }
` 
// we are 