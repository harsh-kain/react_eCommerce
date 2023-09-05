import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const PageNavigation = ({title}) => {
    return (
        <Wrapper>
        <NavLink className="text" to="/" style={{textDecoration: 'none'}}> Home</NavLink> <span className='text'>/{title}</span>

    </Wrapper>
  )
}

export default PageNavigation
 
const Wrapper = styled.div`
    width: 100%;
    padding: 1rem 2rem;
    text-decoration: none;
    background-color: #d5d5ff;
    font-size: 1.3vw;
    font-weight: bold;
    @media screen and (max-width: 800px) {
        .text{
            font-size: 4vw;
        }
        
    }
`