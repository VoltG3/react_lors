import styled from 'styled-components'

export const StyledOpeningHoursColumnSet = styled.div`
  display: ${({ showContent }) => {
    if (showContent === false) return 'none;'
    else return 'flex;'
  }}
  
    flex-direction: column;
    box-sizing: border-box;
      width: 100%;
      height: auto;
    box-shadow: var(--box--shadow);
    border-radius: var(--border--radius);

    &:hover {
      transition: box-shadow .3s linear;
      box-shadow: var(--box--hover);
    }
`