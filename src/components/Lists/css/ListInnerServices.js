import { css } from 'styled-components'

export const ListInnerServices = css`
  & p {
    padding: 8px 0;

    @media only screen and (min-width: 1024px) {
      padding: 12px 0;
    }

    @media only screen and (max-width: 700px) {
      padding: 6px 0;
    }
  }
`