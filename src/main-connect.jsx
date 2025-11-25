import React from 'react'
import { createRoot } from 'react-dom/client'
import Connect from './Connect'
import './styles.css'

createRoot(document.getElementById('connect-root')).render(
  <React.StrictMode>
    <Connect />
  </React.StrictMode>
)
