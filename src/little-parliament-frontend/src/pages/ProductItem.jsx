import React from 'react';
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import SplitLayout from '../components/SplitLayout';
import "../styles/ProductItem.css"

export default function ProductItem() {
  const [productData, setProductData] = useState({})
  const { id } = useParams()
  const { title, description, image, sale_price } = productData
  const productDetails = {title, description, image: {src: image, alt: title}, sale_price}
  useEffect(async () => {
    const response = await fetch(`https://gentle-fortress-16563.herokuapp.com/products/${id}`)
    const result = await response.json()
    setProductData(result)
  }, [])
  return (
    <div className="container product">
      <SplitLayout details={productDetails} />
      <div className="container product__btn-container">
        <Link to={`/products`} className="btn-primary">Back to products</Link>
      </div>
    </div>
  )
}