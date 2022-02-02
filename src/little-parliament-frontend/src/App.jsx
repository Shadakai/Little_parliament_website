import './App.css'
import { BrowserRouter } from "react-router-dom"
import Nav from "./components/Nav"
import Router from "./Router"


function App() {

  return (
    <BrowserRouter>
        <h1>Little Parliament</h1>
        <Nav />
        <Router />
    </BrowserRouter>
  )
}

export default App
