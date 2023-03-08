/*import React, { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { I18nextProvider } from 'react-i18next'
import i18nInstance from './translations/i18n'

import App from './App';

const Home = lazy(() => import('./routes/Home'))
const About = lazy(() => import('./routes/About'))
const Services = lazy(() => import('./routes/Services'))
const Prices = lazy(() => import('./routes/Prices'))
const Info = lazy(() => import('./routes/Info'))
const Contacts = lazy(() => import('./routes/Contacts'))


const root = createRoot(document.getElementById('root'))
root.render(
    <I18nextProvider i18n={i18nInstance}>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App />} >
                    <Route path="home" element={<Suspense><Home /></Suspense>} />
                    <Route path="about" element={<Suspense><About /></Suspense>} />
                    <Route path="services" element={<Suspense><Services /></Suspense>} />
                    <Route path="prices" element={<Suspense><Prices /></Suspense>} />
                    <Route path="contacts" element={<Suspense><Contacts /></Suspense>} />
                    <Route path="info" element={<Suspense><Info /></Suspense>} />
                    <Route path="*" element={<Suspense><Home /></Suspense>} />
                    <Route path="/" element={<Navigate replace to="home" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </I18nextProvider>
)*/



/*

  <Route path="home" element={<Suspense fallback={<StyledSyspense>Loading...</StyledSyspense>}><Home /></Suspense>} />
  <Route path="about" element={<Suspense fallback={<StyledSyspense>Loading...</StyledSyspense>}><About /></Suspense>} />
  <Route path="services" element={<Suspense fallback={<StyledSyspense>Loading...</StyledSyspense>}><Services /></Suspense>} />
  <Route path="prices" element={<Suspense fallback={<StyledSyspense>Loading...</StyledSyspense>}><Prices /></Suspense>} />
  <Route path="contacts" element={<Suspense fallback={<StyledSyspense>Loading...</StyledSyspense>}><Contacts /></Suspense>} />
  <Route path="info" element={<Suspense fallback={<StyledSyspense>Loading...</StyledSyspense>}><Info /></Suspense>} />
  <Route path="*" element={<Suspense fallback={<StyledSyspense>Loading...</StyledSyspense>}><Home /></Suspense>} />
  <Route path="/" element={<Navigate replace to="home" />} />

*/

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
            <Route exact path={"/"} element={<App />} >
                <Route path={"home"} element={<Home />} />
                <Route path={"about"} element={<About />} />
                <Route path={"services"} element={<Services />} />
                <Route path={"prices"} element={<Prices />} />
                <Route path={"contacts"} element={<Contacts />} />
                <Route path={"info"} element={<Info />} />
                <Route path={"*"} element={<Home />} />
                <Route path={"/"} element={<Navigate replace to={"home"} />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
