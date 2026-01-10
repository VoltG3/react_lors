import styled from 'styled-components'

export const StyledOpeningHoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  gap: var(--size--padding40);
  padding-top: var(--size--padding40);
  padding-bottom: var(--size--padding40);

  @media only screen and (max-width: 700px) {
    gap: var(--size--padding30);
    padding-top: var(--size--padding30);
    padding-bottom: var(--size--padding30);
  }
`