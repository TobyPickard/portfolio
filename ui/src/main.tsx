import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div style={{width: '100vw', height: '100vh', overflowY: 'auto'}} >
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </div>
)
