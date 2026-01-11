import styled, { css } from 'styled-components'

const ListContainerBase = css`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  white-space: pre-wrap;
  border-radius: var(--border--radius);
  box-shadow: var(--box--shadow);

  &:hover {
    transition: box-shadow 0.3s linear;
    box-shadow: var(--box--hover);
  }

  & > div {
    display: flex;
    align-items: stretch;
    width: 100%;
    min-height: var(--list--line--height);
    padding: 0;
    box-sizing: border-box;
  }

  & > div:nth-child(even) {
    background: var(--color--list--even);
  }

  & > div:nth-child(odd) {
    background: var(--color--list--odd);
  }

  & > div:nth-last-child(-n + 1) {
    border-bottom-left-radius: var(--border--radius);
    border-bottom-right-radius: var(--border--radius);
  }

  & p {
    margin: 0 var(--list--margin);

    @media only screen and (min-width: 1024px) {
      margin: 0 45px;
    }
    @media only screen and (max-width: 700px) {
      margin: 0 var(--list--margin);
    }
  }
`

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  background: var(--color--list--header) !important;
  border-top-left-radius: var(--border--radius);
  border-top-right-radius: var(--border--radius);

  & p {
    margin-top: 15px !important;
    margin-bottom: 15px !important;
  }

  white-space: pre-wrap;
`

export const StyledListContainer = styled.div`
  ${ListContainerBase}

  ${(props) =>
    props.variant === 'information' &&
    css`
      margin-top: var(--size--padding30);
    `}

  ${(props) =>
    (props.variant === 'information' || props.variant === 'services') &&
    css`
      & p {
        padding: 8px 0;
        @media only screen and (min-width: 1024px) {
          padding: 12px 0;
        }
        @media only screen and (max-width: 700px) {
          padding: 6px 0;
        }
      }
    `}

  ${(props) =>
    props.variant === 'prices' &&
    css`
      .productItemDescribe {
        flex: 1;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        text-align: left;
        & p {
          padding: 8px 0;
          margin-right: 0 !important;
          @media only screen and (min-width: 1024px) {
            padding: 12px 0;
          }
          @media only screen and (max-width: 700px) {
            padding: 6px 0;
          }
        }
      }
      .productItemPrice {
        display: flex;
        flex-direction: row;
        align-items: center;
        max-width: 180px;
        width: 100%;
        height: auto;
        border-left: 1px solid rgba(0, 0, 0, 0.08);
        background-color: rgba(0, 0, 0, 0.02);
        padding-left: 20px;
        padding-right: var(--list--margin);
        @media only screen and (max-width: 700px) {
          max-width: 100px;
          padding-left: 10px;
        }
        & div:nth-child(1) {
          display: flex;
          justify-content: flex-end;
          width: 50px;
          @media only screen and (max-width: 700px) {
            width: 45px;
          }
          & p {
            margin: 0 5px 0 0 !important;
          }
        }
        & div:nth-child(2) {
          display: flex;
          justify-content: flex-start;
          width: 20px;
          @media only screen and (max-width: 700px) {
            width: 15px;
          }
          & p {
            margin: 0 !important;
          }
        }
      }
    `}
`
