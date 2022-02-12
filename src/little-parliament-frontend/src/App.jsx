import './styles/index.css'
import { BrowserRouter } from "react-router-dom"
import Nav from "./components/Nav"
import MobileNav from "./components/MobileNav"
import Router from "./Router"
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <MobileNav />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

export default App
