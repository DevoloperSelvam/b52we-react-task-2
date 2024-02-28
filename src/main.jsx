import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './Header.jsx'
import Head from './Headstyle.jsx'
import Ready from './My.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <Header/>
    <Head/>
   <Ready/>
  </React.StrictMode>,
)
