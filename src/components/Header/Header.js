import styled from 'styled-components'
import React, { useEffect, useRef } from 'react'

import NavigationDesktop from './navigationDesktop/navigationDesktop'
import NavigationMobile from './navigationMobile/navigationMobile'
import Slider from './slider/slider'

function Header() {
    const menuRef = useRef(null)
    let previousScrollPosition = 0

    useEffect(() => {
        function handleScroll() {
            const currentScrollPosition = window.pageYOffset

            if (currentScrollPosition > previousScrollPosition) {
                menuRef.current.style.display = 'none' // scrolling down
            } else {
                menuRef.current.style.display = 'block' // scrolling up
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
            <div className={"navigation desktop"}>
               <NavigationDesktop />
            </div>

            <div className={"navigation mobile"}
                 ref={ menuRef } >
               <NavigationMobile />
            </div>

            <Slider />
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
    width: 100vw;
    height: auto;

  .navigation {
    display: flex;
    justify-content: center;
      max-width: var(--page--width);
          width: 100%;
          height: auto;
  }
    .desktop { display: block!important; }
    .mobile { display: none!important; }
  
  @media only screen and (max-width: 922px) {
    .desktop { display: none!important; }
    .mobile { display: block!important; }
  }
`

export default Header