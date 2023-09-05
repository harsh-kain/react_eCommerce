import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const Navbar = () => {

    const [burgerStatus , setBurgerStatus] = useState(false);
    const [iconStatus , setIconStatus] = useState(false);
  return (
    <>
        <Container>
            <Left>
                <h1>#Kain</h1>
            </Left>
            <i className={iconStatus ? 'las la-bars bars hidden' : 'las la-bars bars '} onClick={()=> {setBurgerStatus(true),setIconStatus(true)}}></i>
            <i className={iconStatus ? 'las la-times close ' : 'las la-times close hidden'} onClick={()=> {setBurgerStatus(false),setIconStatus(false)}}></i>
            <Right>
                
                <NavLink className="link" to="/">Home</NavLink>
                <NavLink className="link" to="/about">About</NavLink>
                <NavLink className="link" to="/contact">Contact</NavLink>
                <NavLink className="link" to="/product">Product</NavLink>  
            </Right>
        </Container>
        <MobileNav className={burgerStatus ? '' : 'showNav'}>
            
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/about">About</NavLink>
            <NavLink className="link" to="/contact">Contact</NavLink>
            <NavLink className="link" to="/product">Product</NavLink>  
        </MobileNav>
    </>
  )
}

export default Navbar;

const Container = styled.nav`
    
    width: 100%;
    height: 50px;
    /* background: rgba( 255, 255, 255, 0.75 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5.5px );
    -webkit-backdrop-filter: blur( 5.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 ); */
    position: fixed;
    top: 0;
    z-index: 999;
    display: flex;
    padding: var(--paddingMedium) var(--paddingLarge);
    justify-content: space-between;
    align-items: center;
    .bars,.close{
        display: none;
    }
    @media screen and (max-width: 800px) {
        padding: var(--paddingSmall) var(--paddingMedium);
        .bars{
            display: block;
            color: black;
            position: absolute;
            right: 20px;
            font-size: var(--fontMedium);
        }
        .close{
            display: block;
            color: #000000;
            position: absolute;
            right: 20px;
            font-size: var(--fontMedium);
        }
        
    }

`
const Left = styled.div`
    h1{
        color: black;
        font-size: var(--fontMedium);
        font-family: var(--fontOne);
    }
    @media screen and (max-width: 1400px) {
        h1{
            font-size: var(--fontSmall);
        }
    }
    @media screen and (max-width: 800px) {
        h1{
            font-size: var(--fontSmall);
            display: inline-block;
        }
    }
    @media screen and (max-width: 500px) {
        h1{
            font-size: var(--fontExtraSmall);
        }
    }

`
const Right = styled.div`
    
    .link{
        font-size: var(--fontSmall);
        color: #000000;
        font-family: var(--fontOne);
        font-weight: 600;
        padding: var(--paddingExtraSmall);
        transition: all .3s cubic-bezier(0.25, 0.46, 0.45, 0.94) ;
    }
    .link:hover{
        background-color: var(--white);
        color: var(--black);
        border-radius: 3px;
    }
   
    @media screen and (max-width: 1400px) {
        .link{
            font-size: var(--fontExtraSmall);
        }
    }
    @media screen and (max-width: 800px) {
        .link{
            display: none;
        }
    }

`
const MobileNav = styled.div`
    position: fixed;
    display: none;
    width: 100%;
    min-height: 100vh;
    top: 0;
    right:0;
    background: rgba( 0, 0, 0, 0.6 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    padding: 5rem;
    z-index: 10000;
    margin-top: 3rem;
    transition: all .5s ease-in-out;
    .link{
        font-size: var(--fontSmall);
        color: #ffffff;
        font-family: var(--fontOne);
        font-weight: 600;
        padding: 3rem 0rem;
        transition: all .3s cubic-bezier(0.25, 0.46, 0.45, 0.94) ;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        /* width: 100%; */
    }
    .link:hover{
        background-color: var(--white);
        color: var(--black);
        border-radius: 3px;
    }
    h1{
        display: none;
    }
    @media screen and (max-width: 800px) {
        display: block;
        h1{
            position:absolute;
            top: 0;
            left: 0;
            z-index: 999;
        }
        
    }
    @media screen and (max-width: 500px) {
        padding: 3rem;
        .link{
            padding: 2rem 0rem;
    }
    }

`