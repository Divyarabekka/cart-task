import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Header.jsx'
import Home from './Home.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
    <Header></Header>
    <div id='main'>
    <Home name="Fancy Product" alt="" price="$40.00 - $80.00"></Home>
    <Home name="Special Item" alt=""price="$20.00 -$18.00"></Home>
    <Home name="Sale item" price="$25.00"></Home>
    <Home name="popular item" price="$40.00"></Home>
    </div> <div id='main'>
    <Home name="Sale Item" price="$25.00"></Home>
    <Home name="Fancy Product" price="$120.00 - $280.00"></Home>
    <Home name="Special Item" price="$18.00"></Home>
    <Home name="Popular Item" price="$40.00" Box=" "></Home>
    </div>
    
  </React.StrictMode>,
)
