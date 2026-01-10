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
        gap: 32px;
        max-width: 1400px;
        margin: 0 auto;
        flex-wrap: wrap; /* ļaujam blokiem pārliekt jaunā rindā, ja nepietiek vietas */
    }

    .text-block {
        max-width: 600px;
        text-align: left;
        color: #bcbcbc;
        font-size: 14px;
        line-height: 1.6;
    }

    .inner-footer-logo-logo-container {
        padding-right: 0;

        @media (max-width: 768px) {
            padding-right: 0;
        }
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
            flex-wrap: nowrap;
        }
    }
    
    .inner-footer-logo-text-container {
        display: flex;
        height: 100%;
        max-width: 600px;
        border-left: solid 2px lightgray;
        
        p {
            padding-left: 25px;
            text-align: left;
            color: #bcbcbc;
            font-size: 14px;
            line-height: 1.6;
        }
    }

    /* Kad kļūst šaurāk, logotipu bloks un teksts iet katrs savā rindā */
    @media (max-width: 900px) {
        .inner-footer-logo-logo-container,
        .inner-footer-logo-text-container {
            flex: 1 1 100%;
        }

        .inner-footer-logo-text-container {
            border-left: none;
            border-top: 2px solid lightgray;
            margin-top: 16px;

            p {
                padding-left: 0;
                padding-top: 16px;
            }
        }
    }
`
