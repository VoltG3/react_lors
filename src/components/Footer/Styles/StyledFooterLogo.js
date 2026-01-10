import styled from "styled-components"

export const StyledFooterLogo = styled.div`
    background: #21232e;
    padding: 72px 32px 64px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        gap: 32px;
        padding: 56px 24px 48px;
    }

    .inner-footer-logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 32px;
        max-width: 1400px;
        margin: 0 auto;
        flex-wrap: wrap;

        @media (max-width: 1024px) {
            flex-direction: column-reverse;
            align-items: flex-start;
            gap: 24px;
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
       // border: solid 1px white;

        @media (max-width: 768px) {
            flex-direction: row;
            gap: 16px;
            flex-wrap: wrap;
        }
    }
    
    /* Kad kļūst šaurāk, logotipu bloks un teksts iet katrs savā rindā */
    @media (max-width: 900px) {
    }
`
