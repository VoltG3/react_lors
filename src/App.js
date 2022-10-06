import { GlobalStyles } from './GlobalStyles'
import { GlobalColorStyles } from './GlobalColorStyles'
import { GlobalFontStyles } from './GlobalFontStyles'

import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import useWindowDimension from './utils/useWindowDimension'

export default function App() {
    console.log(useWindowDimension())

    return (
        <div>
            <GlobalStyles />
            <GlobalColorStyles />
            <GlobalFontStyles />
            <Header />
            <Outlet />
            <Footer />
        </div>
  )
}
