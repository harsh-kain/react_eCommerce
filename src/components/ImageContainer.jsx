import React,{useState} from 'react'
import styled from 'styled-components';

const ImageContainer = ({imageData = [{url : ''}]}) => {
    const [mainImg, setmainImg] = useState(imageData[0])
  return (
    <>
       <Wrapper>
        
            <div className="leftImage">
              {imageData.map((ele,index) => {
                return (
                  <img src={ele.url} alt={ele.filename} key={index} onClick={() => setmainImg(ele)} />
                )
              } )}
            </div>
            <div className="rightImage">
              <img src={mainImg.url} alt="" />
            </div>
          
       </Wrapper>
    </>
  )
}

export default ImageContainer;
const Wrapper = styled.div`
  
  width: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 1rem;
  .leftImage{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;

    img{
      width: 10vw;
      height: auto;
      object-fit: cover;
      margin: .5rem 1rem;
      border-radius: 5px;
    }
    
  }
  .rightImage{
    img{
      width: 40vw;
      height: auto;
      object-fit: cover;
      border-radius: 5px;
    }
  }
  @media screen and (max-width: 1100px) {
      .leftImage img{
          width: 15vw;
        }
      }
    @media screen and (max-width: 900px) {
      .leftImage img{
        width: 20vw;
      }
      .rightImage img{
        width: 60vw;
      }

    }
    @media screen and (max-width: 500px) {
      flex-direction: column-reverse;
      .leftImage{
        flex-direction: row;
      }
      .leftImage img{
        margin: .5rem;

      }
      .rightImage img{
        width: 70vw;
      }
    }
`