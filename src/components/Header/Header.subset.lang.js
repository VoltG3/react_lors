import styled from 'styled-components'

const StyledSubSetLang = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
      width: 100px;
      height: 20px;
`

export default function HeaderSubSetLang() {
    return (
        <div>
            <StyledSubSetLang>
                <p>LV</p>
                <p>EN</p>
                <p>RU</p>
            </StyledSubSetLang>
        </div>
    )
}
