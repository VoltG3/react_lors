import styled from 'styled-components'

import Navigation from './Navigation'
import HeaderSetNav from './Header/headerSet.nav'
import HeaderSetSlider from './Header/headerSet.slider'

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
      width: 100%;
      height: 474px;
`

export default function Header() {
    return (
        <StyledHeader>
            <HeaderSetNav />
            <HeaderSetSlider />
        </StyledHeader>
    )
}
