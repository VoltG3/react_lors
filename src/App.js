import { GlobalStyles } from './GlobalStyles'
import { GlobalColorStyles } from './GlobalColorStyles'
import { GlobalFontStyles } from './GlobalFontStyles'

import { Outlet } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Cookie from './components/Cookie'
import useWindowDimension from './utils/useWindowDimension'

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
            <GlobalStyles />
            <GlobalColorStyles />
            <GlobalFontStyles />
                <Header />
                <Outlet />
                <Footer />
            <Cookie />
        </div>
  )
}
