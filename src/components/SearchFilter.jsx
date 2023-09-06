import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/FilterContext'
const SearchFilter = () => {
    const {filters : {text}, updateFilter} = useFilterContext();
    return (
        <>
            <Wrapper>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text"  name="text" placeholder='Find Products' value={text} onChange={updateFilter} />
                </form>
            </Wrapper>
        
        </>
  )
}

export default SearchFilter;

const Wrapper = styled.div`
    
    input{
        padding: .4rem;
        font-size: 1vw;
        color: black;
        border-radius: 5px;
        border: none;
        outline: none;
        border: 2px solid #5252f7;
        background-color: transparent;

    }
    @media screen and (max-width: 800px) {
        input{
            font-size: 2vw;
        }
        
    }
    @media screen and (max-width: 500px) {
        input{
            font-size: 3vw;
        }
        
    }
`

