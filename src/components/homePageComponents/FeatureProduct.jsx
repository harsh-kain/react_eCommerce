import React from 'react'
import styled from 'styled-components';
const FeatureProduct = () => {
  return (
    <>
      <Container>
        <div className="items1 flex">
            <h4>Gaming</h4>
            <h1>EARPHONE</h1>
            <img src="./images/earphone.png" alt="" />
        </div>
        <div className="items2 flex">
            <h4>Logitech</h4>
            <h1>MOUSE</h1>
            <img src="./images/mouse.png" alt="" />
        </div>
        <div className="items3 flex">
            <h4>M2 chips</h4>
            <h1>LAPTOP</h1>
            <img src="./images/laptop.png" alt="" />
        </div>
      </Container>

    </>
  )
}

export default FeatureProduct;

const Container = styled.div`
  width: 100%;
  min-height: 40vh;
  display: grid;
  padding: var(--marginSmall);
  gap: 2rem;
  margin-top: var(--marginMedium);
  /* z-index: -1; */
  .items1{
    background: rgb(219,56,56);
    background: linear-gradient(90deg, rgba(219,56,56,1) 0%, rgba(199,150,150,1) 100%);
    grid-column-start: 1;
    grid-column-end: 3;    
  }
  .items2{
    background: rgb(45,45,45);
    background: linear-gradient(90deg, rgba(45,45,45,1) 0%, rgba(167,159,159,1) 100%, rgba(121,121,121,1) 100%);
    grid-column-start: 3;
    grid-column-end: 6;
  }
  .items3{
    background: rgb(179,179,179);
    background: linear-gradient(90deg, rgba(179,179,179,1) 0%, rgba(177,177,177,1) 100%);
    grid-column-start: 6;
    grid-column-end: 12;
  }
  .items1 ,.items2,.items3{
    position: relative;
    overflow: hidden;
    padding: 0px var(--paddingMedium);
    align-items: flex-start;
    flex-direction:column;
    border-radius: 10px;
    font-family: var(--fontOne);
  }
  .items1 img,.items2 img ,.items3 img{
      position: absolute;
      object-fit: cover;
      right: 0;
      width: 350px;
  }
  .items1 p,.items2 p ,.items3 p{
     font-size: var(--fontSmall);
     font-weight: 600;
     color: #686767;
     padding: var(--paddingSmall);
  }
  .items1 h4,.items2 h4 ,.items3 h4{
     font-size: var(--fontMedium);
     font-weight: 600;
     color: var(--white);
     padding: 0px var(--paddingSmall);
  }
  .items1 h1,.items2 h1 ,.items3 h1{
     font-size: var(--fontLarge);
     font-weight: 900;
     /* color: var(--white); */
     padding: 0px var(--paddingSmall);
  }
  .items1 h1{
    color: #ac0e0e;
  }
  .items2 h1{
    color: #161616;
  }
  .items3 h1{
    color: #585858;

  }

  @media screen  and (max-width:1600px) {
    .items1 img,.items2 img ,.items3 img{
      width: 250px;
    }
    .items1 p,.items2 p ,.items3 p{
      font-size: var(--fontExtraSmall);
    }
    .items1 h4,.items2 h4 ,.items3 h4{
      font-size: var(--fontSmall);   
    }
    .items1 h1,.items2 h1 ,.items3 h1{
      font-size: var(--fontMedium);
    }
  }
  @media screen  and (max-width:1200px) {
    min-height: 70vh;
   
    .items1{
      background: rgb(219,56,56);
      background: linear-gradient(90deg, rgba(219,56,56,1) 0%, rgba(199,150,150,1) 100%);
      grid-column-start: 1;
      grid-column-end: 6;    
    }
    .items2{
      background: rgb(45,45,45);
      background: linear-gradient(90deg, rgba(45,45,45,1) 0%, rgba(167,159,159,1) 100%, rgba(121,121,121,1) 100%);
      grid-column-start:6 ;
      grid-column-end: 12;
    }
    .items3{
      background: rgb(179,179,179);
      background: linear-gradient(90deg, rgba(179,179,179,1) 0%, rgba(177,177,177,1) 100%);
      grid-column-start: 1;
      grid-column-end: 12;
    }
  }
  @media screen  and (max-width:800px) {
    min-height: 80vh;
    gap: 1rem;
    margin-top: var(--marginSmall);
    .items1{
      background: rgb(219,56,56);
      background: linear-gradient(90deg, rgba(219,56,56,1) 0%, rgba(199,150,150,1) 100%);
      grid-column-start: 1;
      grid-column-end: 12;   
      padding: 0px var(--paddingExtraSmall);
      
    }
    .items2{
      background: rgb(45,45,45);
      background: linear-gradient(90deg, rgba(45,45,45,1) 0%, rgba(167,159,159,1) 100%, rgba(121,121,121,1) 100%);
      grid-column-start:1 ;
      grid-column-end: 12;
      padding: 0px var(--paddingExtraSmall);
    }
    .items3{
      background: rgb(179,179,179);
      background: linear-gradient(90deg, rgba(179,179,179,1) 0%, rgba(177,177,177,1) 100%);
      grid-column-start: 1;
      grid-column-end: 12;
      padding: 0px var(--paddingExtraSmall);
    }
    .items1 p,.items2 p ,.items3 p{
      font-size: var(--fontExtraSmall);
    }
    .items1 h4,.items2 h4 ,.items3 h4{
      font-size: var(--fontSmall);   
    }
    .items1 h1,.items2 h1 ,.items3 h1{
      font-size: var(--fontMedium);
    }
    .items1 img,.items2 img ,.items3 img{
      width: 200px;
    }
  }
`