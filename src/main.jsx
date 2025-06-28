import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // <-- Add this
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/*Enables routing for the entire app*/}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
// This code sets up your React app and connects it to the HTML file
// It imports React, ReactDOM, your main App component, and the CSS file
// The last line renders your App inside the HTML element with id 'root'
// This is where your entire app will live and be displayed in the browser
// The './index.css' file contains your Tailwind CSS styles
// This means your app will use Tailwind's utility classes for styling
// Make sure to run your app with a tool like Vite or Create React App to see it work
// If you see any errors, check your file paths and make sure everything is installed

