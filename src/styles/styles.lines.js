import styled from 'styled-components'

export const StyledLineLang = styled.div`
  width: 100%;
  height: 2px;
  margin-bottom: 40px;
  background: rgb(214, 214, 214);
`

export const StyledLineTiny = styled.div`
  width: 43px;
  height: 4px;
  margin-top: 22px;
  margin-bottom: 44px;
  background: ${props => {
    switch (props.color) {
      case 'colorFirst': return '#EDAE0E';
      case 'colorSecond': return '#EF5DA8';
      case 'colorThird': return '#C20031';
      default: return 'transparent';
    }
  }};
`
