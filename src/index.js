import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import App from './App'
import Home from './routes/Home'
import About from './routes/About'
import Services from './routes/Services'
import Prices from './routes/Prices'
import Info from './routes/Info'
import Contacts from './routes/Contacts'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="prices" element={<Prices />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="info" element={<Info />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    </BrowserRouter>
)