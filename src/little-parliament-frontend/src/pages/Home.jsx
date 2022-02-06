import React from 'react';
import HeroSection from '../components/HeroSection';
import CoffeeSection from '../components/CoffeeSection';
import FoodSection from '../components/FoodSection';
import OurStoreSection from '../components/OurStoreSection';
import Welcome from '../components/Welcome';
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

