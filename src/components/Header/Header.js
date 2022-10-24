import styled from 'styled-components'

import HeaderSetNavigation from './Header.set.navigation'
import HeaderSetSlider from './Header.set.slider'

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    //max-width: var(--page--width);
        width: 100%;
        height: 474px;
`

export default function Header() {
    return (
        <StyledHeader>
           {/* <div style={{
                width: '100%',
                height: '340px',
                background: 'yellow'
            }}>

            </div>*/}
           <HeaderSetNavigation />
            <HeaderSetSlider />
        </StyledHeader>
    )
}
