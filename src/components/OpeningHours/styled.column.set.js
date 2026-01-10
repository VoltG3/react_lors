import styled from 'styled-components'

export const StyledOpeningHoursColumnSet = styled.div`
  display: ${({ showContent }) => {
    if (showContent === false) return 'none'
    else return 'flex'
  }};
  
    flex-direction: column;
    box-sizing: border-box;
      width: 100%;
      height: auto;
    box-shadow: var(--box--shadow);
    border-radius: var(--border--radius);
    background-color: var(--color--none);
    overflow: hidden;
    transition: all .3s ease;

    &:hover {
      box-shadow: var(--box--hover);
      transform: translateY(-2px);
    }
`