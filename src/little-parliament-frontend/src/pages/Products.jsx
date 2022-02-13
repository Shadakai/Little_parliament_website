import React from 'react';
import { useState, useEffect } from 'react'
import CardComponent from '../components/CardComponent';
import "../styles/Products.css"
import HeroSection from "../components/HeroSection"

export default function Products() {
  const [productData, setProductData] = useState([])
  useEffect(async() => {
    const response = await fetch('https://gentle-fortress-16563.herokuapp.com/products')
    const result = await response.json()
    setProductData(result)
  }, [])

  const products = productData.map((product, index) => {
    return <CardComponent details={product.product} key={index}/> 
  })

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