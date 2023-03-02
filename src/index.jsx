import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/router.jsx'
import Header from './components/Header'
import Footer from './components/Footer'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700;800&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: inherit;
  }
  body {
    font-family: 'Montserrat';
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
