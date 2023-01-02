import { StyledHeader, StyledInnerHeader } from './Header.styles'

import React, { useEffect, useRef } from 'react'

import NavigationDesktop from './navigationDesktop/Header.navigation.desktop'
import HeaderSetSlider from './slider/Header.set.slider'
import NavigationMobile from './navigationMobile/navigationMobile'

function Header() {
    const menuRef = useRef(null)
    let previousScrollPosition = 0

    useEffect(() => {
        function handleScroll() {
            const currentScrollPosition = window.pageYOffset

            if (currentScrollPosition > previousScrollPosition) {
                // scrolling down
                menuRef.current.style.display = 'none'
            } else {
                // scrolling up
                menuRef.current.style.display = 'block'
            }

            previousScrollPosition = currentScrollPosition
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <StyledHeader>
            <StyledInnerHeader
                className={"navDesktop"}
            >
                <NavigationDesktop />
            </StyledInnerHeader>

            <StyledInnerHeader
                className={"navMobile"}
                ref={ menuRef }
            >
                <NavigationMobile />
            </StyledInnerHeader>

           <HeaderSetSlider />
        </StyledHeader>
    )
}

export default Header