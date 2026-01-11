import styled from 'styled-components'

export const StyledLineLang = styled.div`
  width: 100%;
  height: 2px;
  margin-bottom: 40px;
  background: var(--color--line--lang);
`

export const StyledLineTiny = styled.div`
  width: 43px;
  height: 4px;
  margin-top: 22px;
  margin-bottom: 44px;
  background: ${props => {
    switch (props.color) {
      case 'colorFirst': return 'var(--color--line--variant--v1)';
      case 'colorSecond': return 'var(--color--line--variant--v2)';
      case 'colorThird': return 'var(--color--line--variant--v3)';
      default: return 'transparent';
    }
  }};
`
