import styled from 'styled-components'

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
      width: 100%;
      height: 419px;
`

export default function Footer() {
    return (
        <StyledFooter>
            <p>Footer</p>
        </StyledFooter>
    )
}