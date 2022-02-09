import './App.css'
import { BrowserRouter } from "react-router-dom"
import Nav from "./components/Nav"
import MobileNav from "./components/MobileNav"
import Router from "./Router"


function App() {

  return (
    <BrowserRouter>
        <Nav />
        <MobileNav />
        <Router />
    </BrowserRouter>
  )
}

export default App
