import { GlobalFontStyles } from './GlobalFontStyles'
import { GlobalColorStyles } from './GlobalColorStyles'
import { GlobalSizeStyles } from './GlobalSizeStyles'

import { Outlet } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Cookie from './components/Cookie'

export default function App() {

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