import React from 'react';
import MenuSelector from '../components/Menu/MenuSelector';
import DrinkDisplay from '../components/Menu/DrinksDisplay';
import CabinetDisplay from '../components/Menu/CabinetDisplay';
import BreakfastDisplay from '../components/Menu/BreakfastDisplay'
import LunchDisplay from '../components/Menu/LunchDisplay';
import '../styles/menu.css'

export default function Menu() {
  return (
      <>
        {/* Menu Selector */}
        <MenuSelector />
        {/* Drinks */}
        <DrinkDisplay />
        {/* Cabinet */}
        <CabinetDisplay />
        {/* Breakfast */}
        <BreakfastDisplay />
        {/* Lunch */}
        <LunchDisplay />
      </>
  )
}