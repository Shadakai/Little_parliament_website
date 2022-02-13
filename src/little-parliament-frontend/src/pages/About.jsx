import React from 'react';
import SplitLayout from '../components/SplitLayout';
import HeroSection from '../components/HeroSection'

export default function About() {
  const about_details = [
    {
      title: "Our Story",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto pariatur quas nostrum aspernatur molestias, magni nulla in ea natus vel a doloremque? At delectus cumque nisi dolores molestiae omnis architecto!",
      image: {
        src: 'https://littleparliament-bucket.s3.ap-southeast-2.amazonaws.com/little-parliament-public-assets/sign1.PNG',
        alt: "Little Parliament Sign",
      }
    },
    {
      title: "Location",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores ea temporibus sunt distinctio! Praesentium recusandae totam assumenda sunt eius ullam fugit deserunt dolorum nobis? Iste veniam asperiores sapiente ipsum?',
      image: {
        src: 'https://littleparliament-bucket.s3.ap-southeast-2.amazonaws.com/little-parliament-public-assets/Capture.PNG',
        alt: "Little Parliament Location"
      }
    },
    {
      title: 'Coffee',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores ea temporibus sunt distinctio! Praesentium recusandae totam assumenda sunt eius ullam fugit deserunt dolorum nobis? Iste veniam asperiores sapiente ipsum?',
      image: {
        src: 'https://littleparliament-bucket.s3.ap-southeast-2.amazonaws.com/little-parliament-public-assets/coffee.PNG',
        alt: "Coffee"
      }
    },
    {
      title: 'Food',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores ea temporibus sunt distinctio! Praesentium recusandae totam assumenda sunt eius ullam fugit deserunt dolorum nobis? Iste veniam asperiores sapiente ipsum?',
      image: {
        src: 'https://littleparliament-bucket.s3.ap-southeast-2.amazonaws.com/little-parliament-public-assets/food.PNG',
        alt: "Vegan Cheesecake"
      }
    },
    {
      title: 'Souvenirs',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores ea temporibus sunt distinctio! Praesentium recusandae totam assumenda sunt eius ullam fugit deserunt dolorum nobis? Iste veniam asperiores sapiente ipsum?',
      image: {
        src: 'https://littleparliament-bucket.s3.ap-southeast-2.amazonaws.com/little-parliament-public-assets/products.PNG',
        alt: "Products"
      }
    },
  ]

  const heroDetails = {
    title: 'Our Story',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus architecto sed, consectetur commodi quidem omnis? Repudiandae consectetur laborum quos numquam?',
    media: {
      type: 'video',
      src: 'https://littleparliament-bucket.s3.ap-southeast-2.amazonaws.com/little-parliament-public-assets/about_us_hero.mp4'
    }
  }

  const details = about_details.map((detail, index) => {
    return (
      <SplitLayout details={detail} reverse={index % 2 != 0 ? true : false} key={index} />
    )
  })

  return (
    <div className='container about'>
      <HeroSection details={heroDetails} />
      {details}
    </div>
  )
}
