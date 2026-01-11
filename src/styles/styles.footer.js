import styled from 'styled-components'

export const StyledFooterContainer = styled.footer`
    position: relative;
    z-index: 10;
    background: #191b25;
    color: #a8a8a8;
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: "Open Sans", sans-serif;
`

export const StyledFooterCredentials = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 48px;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 72px 32px 64px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        gap: 32px;
        padding: 56px 24px 48px;
    }

    .footer-column {
        display: flex;
        width: auto;
        flex-direction: column;
        align-items: flex-start;
    }

    .footer-head {
        font-family: "Open Sans", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
        margin-bottom: 16px;
    }

    .footer-item {
        font-family: "Open Sans", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #828181;
        margin-bottom: 3px;
    }
`

export const StyledFooterLogo = styled.div`
    background: #21232e;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
        gap: 32px;
    }

    .inner-footer-logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 32px;
        max-width: 1400px;
        margin: 0 auto;
        padding: 72px 32px 64px;
        width: 100%;
        box-sizing: border-box;
        flex-wrap: wrap;

        @media (max-width: 1024px) {
            flex-direction: column-reverse;
            align-items: flex-start;
            gap: 24px;
        }

        @media (max-width: 768px) {
            padding: 56px 24px 48px;
        }
    }

    .text-block {
        flex: 1;
        text-align: left;
        color: #bcbcbc;
        font-size: 14px;
        line-height: 1.6;
        border-left: solid 2px lightgray;
        padding-left: 25px;

        @media (max-width: 1024px) {
            border-left: none;
            padding-left: 0;
            width: 100%;
        }
    }

    .inner-footer-logo-logo-container {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }

    .inner-footer-logo-logo-row {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 40px;
        flex-wrap: wrap;
        filter: brightness(0) invert(1);

        @media (max-width: 768px) {
            flex-direction: row;
            gap: 16px;
            flex-wrap: wrap;
        }
    }
`

export const StyledFooterDeveloper = styled.div`
    border-top: 1px solid #2a2a2a;
    padding: 14px;
    text-align: center;

    p {
        font-size: 12px;
        color: #888;
    }
`

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
    color: #112734 !important;
  }

  @media only screen and (max-width: 700px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`
