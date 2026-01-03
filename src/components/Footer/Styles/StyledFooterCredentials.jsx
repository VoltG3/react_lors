import styled from "styled-components"

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

    .p_footer_header {
        font-weight: 600;
        font-size: 16px;
        color: #fff;
        text-transform: uppercase;
        margin-bottom: 16px;
        letter-spacing: 1px;
    }

    .p_footer_content {
        margin-bottom: 3px;
        font-size: 14px;
        line-height: 1.5;
    }
`
