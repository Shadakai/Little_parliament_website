import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import CoffeeSection from '../components/Home/CoffeeSection';
import FoodSection from '../components/Home/FoodSection';
import OurStoreSection from '../components/Home/OurStoreSection';
import Welcome from '../components/Home/Welcome';
import "../styles/home.css"

export default function Home() {

  return (
    <>
      <Welcome />
      {/* About us */}
      <HeroSection />
      {/* Coffee */}
      <CoffeeSection />
      {/* Menu */}
      <FoodSection />
      {/* Products */}
      <OurStoreSection />
    </>
  )
}

