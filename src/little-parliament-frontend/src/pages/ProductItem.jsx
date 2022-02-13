import React from 'react';
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import SplitLayout from '../components/SplitLayout';
import "../styles/ProductItem.css"
// ProductItem component is used to display an individual product. It uses the useParams hook from react-router-dom to get the products ID, which is then used in the fetch request.
export default function ProductItem() {
  // Setting intiail state of ProductData to an empty object
  const [productData, setProductData] = useState({})
  // Destructuring id from useParams
  const { id } = useParams()
  // Destructing productData object
  const { title, description, image, sale_price } = productData
  // We are rebuilding the productData object to be combatible with the SplitLayout component. The SplitLayout component expects an image object which is why this had to be recreated. It may have been a better practice to pass in the props individually, instead of passing in a single object.
  const productDetails = {title, description, image: {src: image, alt: title}, sale_price}
  // Asyncronous fetch request to the products/id endpoint. Once the promise is resolved, we are setting the value to the ProductData
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