import React from 'react'
import styled from 'styled-components';
const Services = () => {
  return (
    <BigContainer>
        <Container>
            <div className="box1 flexC">
                <i className="las la-truck"></i>
                <p>Super Fast And Free Delivery</p>
            </div>
            <div className="box2 flex">
                <i className="las la-user-shield"></i>
                <p>Non-Contact Shipping</p>

            </div>
            <div className="box3 flex">
                <i className="las la-hand-holding-usd"></i>
                <p>100% Refund And Money Back Guarantee</p>

            </div>
            <div className="box4 flexC">
                <i className="las la-shield-alt"></i>
                <p>Super Secure Payment System</p>
            </div>
        </Container>
    </BigContainer>
  )
}

export default Services;
const BigContainer = styled.section`
    
    width: 100%;
    min-height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`
const Container = styled.div`
    
    width: 80%;
    height: 100%;
    display: grid;
    align-items: center;
    justify-content: center;

    .box1,.box2,.box3,.box4{
        padding: var(--paddingMedium);
        margin: 2rem;
        border-radius: 10px;
        background-color: #dddedf;
        text-align: center;
    }
    .box1,.box4{
        width: 400px;
        height: 250px;
    }
    .box2,.box3{
        width: 400px;
        height: 150px;
    }

    .box1 i,.box2 i,.box3 i,.box4 i{
        font-size: var(--fontLarge);
        background-color: #a3a3a3;
        border-radius: 50%;
        padding: var(--paddingSmall);
        margin: var(--marginSmall);
        color: var(--black);

    }
    .box1 p,.box2 p,.box3 p,.box4 p{
        font-size: var(--fontSmall);
    }
    .box1{
        
        grid-column: 1/3;
        grid-row: 1/12;
    }
    .box2{
        grid-column: 3/6;
        margin: 1rem;
    }
    .box3{
        margin: 1rem;
        grid-column: 3/6;
        grid-row: 1/3;
    }
    .box4{
        grid-column: 9/12;
        grid-row: 1/12;
    }
    @media screen and (max-width: 1500px) {
        .box1,.box4{
            width: 350px;
            height: 200px;
            padding: var(--paddingSmall);
            
        }
        .box2,.box3{
            width: 350px;
            height: 150px;
            padding: var(--paddingSmall);
        }
        .box1 i,.box2 i,.box3 i,.box4 i{
            font-size: var(--fontMedium);
         }
        width: 100%;
    }
    @media screen and (max-width: 1200px) {
        .box1,.box4{
            width: 350px;
            /* height: auto; */
            height: 250px;
            padding: var(--paddingSmall);
            
        }
        .box1,.box2,.box3,.box4{
            margin: 1rem;
        }
        .box2,.box3{
            width: 350px;
            height: 250px;
            padding: var(--paddingSmall);
            flex-direction: column;
        }
        .box1{
            grid-column: 1/6;
            grid-row: 1/3;
            
        }
        .box2{
            grid-column: 1/6;
            grid-row: 3/6;
        }
        .box3{
            grid-column: 6/12;
            grid-row: 1/3;
            
        }
        .box4{
            grid-column: 6/12;
            grid-row: 3/6;
        }
        width: 100%;
    }
    @media screen and (max-width: 800px) {
        .box1,.box4{
            /* width: 200px; */
            height: auto;
            padding: var(--paddingSmall);
            
        }
        .box1,.box2,.box3,.box4{
            margin: 1rem;
            width: auto;
        }
        .box2,.box3{
            height: auto;
            padding: var(--paddingSmall);
            flex-direction: column;
        }
        .box1{
            grid-column: 1/12;
            grid-row: 1/3;
            
        }
        .box2{
            grid-column: 1/12;
            grid-row: 3/6;
        }
        .box3{
            grid-column: 1/12;
            grid-row: 6/9;
            
        }
        .box4{
            grid-column: 1/12;
            grid-row: 9/12;
        }
        width: 100%;
    }

`