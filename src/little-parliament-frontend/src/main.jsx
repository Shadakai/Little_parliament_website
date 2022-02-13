import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthProvider.jsx'

ReactDOM.render(
  <React.StrictMode>
   <AuthProvider>
     <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
