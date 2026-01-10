import styled from 'styled-components'

export const StyledFooterButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  color: white !important;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 0;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
  white-space: nowrap;
  font-family: inherit;

  &:hover {
    background-color: white;
    color: var(--colors-base-01) !important;
  }

  @media only screen and (max-width: 700px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`
