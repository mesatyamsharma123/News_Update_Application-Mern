import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Router } from 'react-router-dom'
import Routers from './routers/Routers.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Routers/>
</BrowserRouter>
 

)
