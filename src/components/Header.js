import styled from 'styled-components'

import Navigation from './Navigation'

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
      width: 100%;
      height: 419px;
`

export default function Header() {
    return (
        <StyledHeader>
            <p>Header</p>
            <Navigation />
        </StyledHeader>
    )
}