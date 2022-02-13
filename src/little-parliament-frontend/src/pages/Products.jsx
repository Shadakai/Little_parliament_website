import React from 'react';
import { useState, useEffect } from 'react'
import CardComponent from '../components/CardComponent';
import "../styles/Products.css"

export default function Products() {
  const [loading, setLoading] = useState(true)
  const [productData, setProductData] = useState([])
  useEffect(async() => {
    const response = await fetch('https://gentle-fortress-16563.herokuapp.com/products')
    if(response.status === 200) setLoading(false)
    const result = await response.json()
    setProductData(result)
  }, [])

  const products = productData.map((product, index) => {
    return <CardComponent  details={product.product} loading={loading} key={index}/> 
  })
  return (
      <div className="container products">
        {products}
      </div>
  )
}