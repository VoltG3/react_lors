import { GlobalStyles } from './GlobalStyles'
import { GlobalColorStyles } from './GlobalColorStyles'
import { GlobalFontStyles } from './GlobalFontStyles'

import { Outlet } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import useWindowDimension from './utils/useWindowDimension'
import Cookie from "./Cookie";

export default function App() {
    console.log(useWindowDimension())

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
                maxWidth: 'var(--page--width)',
                   width: '100vw',
                   height: 'auto',
            background: 'var(--clr--default--ltst)'
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
