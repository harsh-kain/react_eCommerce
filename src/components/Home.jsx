import React from 'react'
import Hero from './homePageComponents/Hero';
import FeatureProduct from './homePageComponents/FeatureProduct';
import Services from './homePageComponents/Services';
import Sale from './homePageComponents/Sale';
import BestSelling from './homePageComponents/BestSelling';
const Home = () => {
  const myData = {
    discount : "20%",
    product : "Gaming Headphone",
    date : "12 Nov to 1 Jan",
    text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, totam",
    img : "./images/headphone.png",
    color: "rgb(219,56,56)",

  }
  return (
    <>
        <Hero/>
        <FeatureProduct/>
        <Services />
        <Sale data = {myData}/>
        <BestSelling />
    </>
  )
}

export default Home