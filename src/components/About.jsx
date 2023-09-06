import React from 'react'
import styled from 'styled-components'
const About = () => {
  return (
    <>

      <Wrapper>
        <div className="leftContainer">
          <h1>Who are we</h1>
        </div>
        <div className="rightContainer">
          <p>
            Kain is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. Kain strives to be Earth’s most customer-centric company, Earth’s best employer, and Earth’s safest place to work. Customer reviews, 1-Click shopping, personalized recommendations, Prime, Fulfillment by Kain, AWS, Kindle Direct Publishing, Kindle, Career Choice, Fire tablets, Fire TV, Kain Echo, Alexa, Just Walk Out technology, Kain Studios, and The Climate Pledge are some of the things pioneered by Kain.</p>
        </div>
        <div className="cards">
          <div className="cardContainer">
            <h3>Leadership Principles</h3>
            <p>Our Leadership Principles are more than inspirational wall hangings. The 16 principles guide our discussions and decisions every day.</p>
          </div>
          <div className="cardContainer">
            <h3>Our Positions</h3>
            <p>While our positions are carefully considered and deeply held, there is much room for healthy debate and differing opinions. We hope being clear about our positions is helpful.</p>
          </div>
          <div className="cardContainer">
            <h3>Public Policy</h3>
            <p>We engage with policymakers on a wide range of issues that are important to our customers and employees. Learn more about our views on current policy issues.</p>
          </div>
          <div className="cardContainer">
            <h3>Awards and Recognition</h3>
            <p>We are honored to be recognized for the work we do on behalf of our customers, employees, and communities every day.</p>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default About;

const Wrapper = styled.div`
  
  width:100% ;
  min-height: 100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  padding: 4vw;
  margin-top: 4rem;

  .cards{
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
    .cardContainer{
      background-color: #d8d8d8;
      margin: 1rem;
      width: 300px;
      height: 300px;
      display:flex;
      justify-content:center;
      flex-direction: column;
      box-shadow: 8px 8px 5px #c9c8c8;
      border-radius: 5px;
      align-items:center;
      padding: 2rem;
      
    }
  }
`