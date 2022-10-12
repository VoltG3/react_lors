import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
    width: 83px;
    height: 20px;
`

export default function HeaderSubSetNavLanguage() {
    return (
        <StyledContainer>
            <div><p>LV</p></div>
            <div><p>EN</p></div>
            <div><p>RU</p></div>
        </StyledContainer>
    )
}
