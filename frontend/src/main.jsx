import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function App() {
  return (
    <div style={{fontFamily: 'system-ui, sans-serif', padding: 24}}>
      <h1>Studiroute Student Portal</h1>
      <p>Frontend placeholder — replace with your app components.</p>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
