import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/components/CardComponent.css"

export default function CardComponent(props) {
  const { details } = props
  return (
    <div className='card-component'>
      <img src={details.image} alt={details.title} className="card-component__image" />
      <div className="card-component__content">
        <div className="card-component__pricing-container">
          <h1 className="card-component__title">{details.title}</h1>
          <p className="card-component__price">{details.sale_price}</p>
        </div>
        <p className="card-component__description">{details.description}</p>
      </div>
      <Link to={`/products/${details.id}`} className="btn-primary">View Product</Link>
    </div>
  )
}
