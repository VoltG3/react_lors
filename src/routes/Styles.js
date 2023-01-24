import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
      max-width: 1440px;
      min-width: auto;
          width: 100%;
          height: auto;
    box-sizing: border-box;
    padding-top: var(--size--padding70);
    padding-bottom: var(--size--padding80);
  
    & h1 {
      align-self: flex-start;
      padding-bottom: var(--size--padding30);
    }

    & span {
      & p { padding-bottom: var(--size--padding20); }
      & p:last-child { padding-bottom: 0!important; }
    }

  /* */
  
    .BTNSmallComponent {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      height: auto;
      box-sizing: border-box;

      & p {
        padding-bottom: 0!important;
      }

      @media only screen and (max-width: 563px) {
        flex-direction: column;
      }
    }

    .rmBottomMargin {
      display: inline-block;
      margin-bottom: var(--margin--p);

      & * { margin-bottom: 0px!important; }
    }

    .noBottomPadding {
      padding-bottom: 0!important;
    }

    .shadow {
      box-shadow: var(--box--shadow);

      &:hover {
        transition: box-shadow .3s linear;
        box-shadow: var(--box--hover);
      }
    }
`

