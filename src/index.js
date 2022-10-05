import React from 'react'
import ReactDOM from 'react-dom/client'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import App from './App'
import Home from './routes/Home'
import Admission from './routes/Admission'
import Services from './routes/Services'
import Info from './routes/Info'
import About from './routes/About'
import Contacts from './routes/Contacts'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes>
            <Route exact path={"/"} element={<App />} >
                <Route path={"home"} element={<Home />} />
                <Route path={"admission"} element={<Admission />} />
                <Route path={"services"} element={<Services />} />
                <Route path={"info"} element={<Info />} />
                <Route path={"about"} element={<About />} />
                <Route path={"contacts"} element={<Contacts />} />
                <Route path={"/"} element={<Navigate replace to={"home"} />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
