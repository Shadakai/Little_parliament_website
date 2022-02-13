import React from 'react';
import { useState, useEffect } from 'react'
import CardComponent from '../components/CardComponent';
import "../styles/Products.css"
import HeroSection from "../components/HeroSection"

// Products component is used to display all of the available products. It makes a fetch request to the products endpoint, and for each product it passes the object to the CardComponent.
export default function Products() {
  // Setting the initial state of the productData to an empty array
  const [productData, setProductData] = useState([])
  useEffect(async() => {
    // Once the component is mounted it makes an asycronus fetch request to the /products endpoint. Once the promise has been resolved, we are storing its value in result and setting productData to the value of result. Which should be an array of objects.
    const response = await fetch('https://gentle-fortress-16563.herokuapp.com/products')
    const result = await response.json()
    setProductData(result)
  }, [])

  const products = productData.map((product, index) => {
    return <CardComponent details={product.product} key={index}/> 
  })

  // Creating the object that will be passed to the HeroSection component
  const heroDetails = {
    title: "Our Store",
    media: {
      type: 'image',
      src: 'https://littleparliament-bucket.s3.ap-southeast-2.amazonaws.com/little-parliament-public-assets/our_store_hero.JPG'
    }
  }
  return (
      <div className="container products">
        <HeroSection details={heroDetails}/>
        <div className="products__content">
          {products}
        </div>
      </div>
  )
}