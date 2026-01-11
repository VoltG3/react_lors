import { GlobalFontStyles } from './GlobalFontStyles'
import { GlobalColorStyles } from './GlobalColorStyles'

import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Cookie from './components/Cookie'

import { DataProvider } from './DataContext'

export default function App() {

    return (
        <DataProvider>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                    width: '100vw',
                    height: 'auto'
            }}>
                <GlobalColorStyles />
                <GlobalFontStyles />
                    <Header />
                    <Outlet />
                    <Footer />
                <Cookie />
            </div>
        </DataProvider>
  )
}
