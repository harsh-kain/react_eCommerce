import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <div className="top">
        <div className="topOne">
          <h2>#Kain</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eum.</p>
        </div>
        <div className="topTwo">
          <h4>Shop</h4>
          <a href="">Sell online</a>
          <a href="">Features</a>
          <a href="">Examples</a>
          <a href="">Website editors</a>
          <a href="">Online retail</a>

        </div>
        <div className="topTwo">
          <h4>Press</h4>
          <a href="">Events</a>
          <a href="">News</a>
          <a href="">Awards</a>
          <a href="">Testimonials</a>
          <a href="">Online retail</a>
        </div>
        <div className="topTwo">
          <h4>About</h4>
          <a href="">Services</a>
          <a href="">Team</a>
          <a href="">Awards</a>
          <a href="">Career</a>
          <a href="">Contacts</a>
        </div>
      </div>
      <div className="bottom">
        <div className="bottomTop">
          <div className="bottomTopLeft">
              <a href="">Privacy Policy</a>
              <a href="">Terms & Conditions</a>
              <a href="">Code of Conduct</a>
          </div>
          <div className="bottomTopRight">
            <i class="lab la-instagram"></i>
            <i class="lab la-facebook"></i>
            <i class="lab la-twitter"></i>
            <i class="lab la-pinterest"></i>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore error laborum enim vero cum possimus id odio, quae rerum voluptatem est laudantium reprehenderit. Fugiat ipsa in aliquid amet magni.</p>
      </div>
      <h4>Designed And Developed By <span>#Kain</span></h4>
    </Wrapper>
  );
};

export default Footer;

const Wrapper =  styled.div`  
  width: 100%;
  min-height: 70vh;
  background-color: #000000;
  display:flex;
  padding: 2rem;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  color: white;
  a{
    text-decoration: none;
    color: white;
  }
  h4{
    margin: 2rem 0rem;
  }
  span{
    color: var(--primaryColor);
  }
  .top{
    margin: 1rem;
    width: 80%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap: wrap;

  }
  .topOne{
    width: 30%;
    height: 150px;
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    flex-direction: column;
  }
  .topTwo{
    margin-left: 5rem ;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    flex-direction: column;
  }
  .bottom{
    width: 80%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top: 3rem;
    flex-direction: column;
    flex-wrap: wrap;
    p{
      margin-top: 1rem;
      /* font-size: 1vw; */
    }
  }
  .bottomTop{
    display:flex;
    justify-content:space-between;
    align-items:center;
    width: 100%;
    margin-top: 1rem;
    /* padding: 2vw 5vw; */
  }
  .bottomTopLeft{
    display:flex;
    justify-content:space-between;
    align-items:center;
    width: 50%;
  }
  .bottomTopRight{
    display:flex;
    justify-content:flex-end;
    align-items:center;
    width: 30%;
    i{
      font-size: 2rem;
      margin-left: 1rem;
    }
  }
  @media screen and (max-width: 1000px) {
    .bottom{
      width: 100%;
    }
    .top{
      width: 100%;
    }
  }
  @media screen and (max-width: 800px) {
    .top{
      justify-content: center;
      align-items: center;
      margin:1rem ;
    }
    .bottomTop{
      flex-direction: column;
    }
    .bottomTopLeft{
      width: 100%;
      padding: 1rem 0rem;
    }

  }
`