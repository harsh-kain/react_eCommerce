import React from 'react'
import styled from 'styled-components'
const Home = () => {
  return (
    <Container>
      <video autoPlay loop controls>
        <source src="./images/video1.webm"/>
      </video>
      {/* <h1>kain</h1> */}
    </Container>
  )
}

export default Home;

const Container = styled.section`
    width: 100%;
    height: 100vh;
    background-color: black;
    margin-top: 65px;
    video{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media screen and (max-width: 1400px) {
      height: 90vh;
    }
    @media screen and (max-width: 1000px) {
      height: 70vh;
    }
    @media screen and (max-width: 900px) {
      height: 50vh;
    }
    @media screen and (max-width: 500px) {
      margin-top: 50px;
      height: 30vh;
    }

`