import { GlobalStyles2 } from './GlobalStyles2'
import { GlobalColorStyles2 } from './GlobalColorStyles2'


import { Outlet } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Cookie from './components/Cookie'
import useWindowDimension from './utils/useWindowDimension'
import {GlobalFontStyles} from "./GlobalFontStyles";
import {GlobalColorStyles} from "./GlobalColorStyles";
import {GlobalSizeStyles} from "./GlobalSizeStyles";

export default function App() {
    console.log(useWindowDimension())

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
                width: '100vw',
                height: 'auto'
        }}>
            <GlobalStyles2 />
            <GlobalColorStyles2 />

            <GlobalSizeStyles />
            <GlobalColorStyles />
            <GlobalFontStyles />
                <Header />
                <Outlet />
                <Footer />
            <Cookie />
        </div>
  )
}
