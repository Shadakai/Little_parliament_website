import React from 'react';

export default function MenuItem(item) {
  console.log(location)
  return (
      <> 
        <div className="itemDetail">
          <image href={item.image}/>
        </div>
        <div>
          <h1>{item.title}</h1>
          <h2>{item.price}</h2>
        </div>
        <p>{item.description}</p>
      </>
  )
}