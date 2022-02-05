import React from 'react';

export default function About() {
  const about_details = [
    {
      title: "Our Story",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto pariatur quas nostrum aspernatur molestias, magni nulla in ea natus vel a doloremque? At delectus cumque nisi dolores molestiae omnis architecto!",
      image: {
        src: 'https://little-parliament-website.s3.ap-southeast-2.amazonaws.com/sign1.PNG',
        alt: "Little Parliament Sign",
      }
    },
    {
      title: "Location",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores ea temporibus sunt distinctio! Praesentium recusandae totam assumenda sunt eius ullam fugit deserunt dolorum nobis? Iste veniam asperiores sapiente ipsum?',
      image: {
        src: 'https://little-parliament-website.s3.ap-southeast-2.amazonaws.com/Capture.PNG',
        alt: "Little Parliament Location"
      }
    },
    {
      title: 'Coffee',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores ea temporibus sunt distinctio! Praesentium recusandae totam assumenda sunt eius ullam fugit deserunt dolorum nobis? Iste veniam asperiores sapiente ipsum?',
      image: {
        src: 'https://little-parliament-website.s3.ap-southeast-2.amazonaws.com/coffee.PNG',
        alt: "Coffee"
      }
    },
    {
      title: 'Food',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores ea temporibus sunt distinctio! Praesentium recusandae totam assumenda sunt eius ullam fugit deserunt dolorum nobis? Iste veniam asperiores sapiente ipsum?',
      image: {
        src: 'https://little-parliament-website.s3.ap-southeast-2.amazonaws.com/food.PNG',
        alt: "Vegan Cheesecake"
      }
    },
    {
      title: 'Souvenirs',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores ea temporibus sunt distinctio! Praesentium recusandae totam assumenda sunt eius ullam fugit deserunt dolorum nobis? Iste veniam asperiores sapiente ipsum?',
      image: {
        src: 'https://little-parliament-website.s3.ap-southeast-2.amazonaws.com/products.PNG',
        alt: "Products"
      }
    },
  ]

  const details = about_details.map((detail, index) => {
    const {title, description, image} = detail;
    return <div key={index}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <img src={image.src} alt={image.alt} />
    </div>
  })

  return (
    <>
    {details}
    </>
  )
}
