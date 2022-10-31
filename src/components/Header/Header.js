import styled from 'styled-components'

import HeaderSetNavigation from './Header.set.navigation'
import HeaderSetSlider from './Header.set.slider'

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
           <HeaderSetNavigation />
           <HeaderSetSlider />
        </StyledHeader>
    )
}
