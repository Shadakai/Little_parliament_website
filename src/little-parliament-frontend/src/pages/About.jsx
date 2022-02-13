import React from 'react';
import SplitLayout from '../components/SplitLayout';
import HeroSection from '../components/HeroSection'

export default function About() {
  // Array of objects which are being passed to the SplitLayout component
  const about_details = [
    {
      title: "Our Story",
      description: "Crammed in the back of an old taxi, marlborough red fumes taint the humid sea air as we wind through the narrow backstreets of crete in the Greek Islands. 'Where the hell is he taking us?' Curiosity, hunger and a serious hankering for an iced glass of pine tree resin wine quickly overcame any fear or apprehension. Finally, we arrive. Small tables cloaked in blue and white checkered tablecloths fill the town square. Every seat occupied. The hum of conversation floods our ears as the locals - cigaretter in one hand, coffee in the other - talk politics, gossip and exchange the odd dirty joke. Fresh, simple, seasonal food comes out in piecemeal. No rush. 'What is this place' Micri Voulee. Translated into Micro Parliament. And so our spin on this slice of paradise was born; Little Parliament",
      image: {
        src: 'https://littleparliament-bucket.s3.ap-southeast-2.amazonaws.com/little-parliament-public-assets/sign1.PNG',
        alt: "Little Parliament Sign",
      }
    },
    {
      title: "Location",
      description: 'We are located in the beautiful little town of Rainbow Beach, bring your surfboards and leave your worries behind and come visit us today!',
      image: {
        src: 'https://littleparliament-bucket.s3.ap-southeast-2.amazonaws.com/little-parliament-public-assets/Capture.PNG',
        alt: "Little Parliament Location"
      }
    },
    {
      title: 'Coffee',
      description: 'Would it be too presumptious to say we have the best coffee in Rainbow Beach? Maybe, but it is good! Locally sourced!',
      image: {
        src: 'https://littleparliament-bucket.s3.ap-southeast-2.amazonaws.com/little-parliament-public-assets/coffee.PNG',
        alt: "Coffee"
      }
    },
    {
      title: 'Food',
      description: 'Our food is all locally sourced and delicious, please check out our menu to browse all we offer!',
      image: {
        src: 'https://littleparliament-bucket.s3.ap-southeast-2.amazonaws.com/little-parliament-public-assets/food.PNG',
        alt: "Vegan Cheesecake"
      }
    },
    {
      title: 'Souvenirs',
      description: "Why not take home a souvenir from this beautiful place? We have plenty to offer, please check out 'Our Store'",
      image: {
        src: 'https://littleparliament-bucket.s3.ap-southeast-2.amazonaws.com/little-parliament-public-assets/products.PNG',
        alt: "Products"
      }
    },
  ]

  const heroDetails = {
    title: 'Our Story',
    description: " ",
    media: {
      type: 'video',
      src: 'https://littleparliament-bucket.s3.ap-southeast-2.amazonaws.com/little-parliament-public-assets/about_us_hero.mp4'
    }
  }

  // Mapping over about_details array, and if the index is odd we are passing through tru to the reverse prop.
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
