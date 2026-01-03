import React from 'react'
import styled from 'styled-components'
import i18n from 'i18next'

function Languages() {
    const [currentLang, setCurrentLang] = React.useState(i18n.language)

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
        setCurrentLang(lang)
    }

    return (
        <LanguageContainer>
            <LanguageButton
                $isActive={currentLang === 'lv'}
                onClick={() => changeLanguage('lv')}
            >
                LV
            </LanguageButton>

            <LanguageButton
                $isActive={currentLang === 'en'}
                onClick={() => changeLanguage('en')}
            >
                EN
            </LanguageButton>

            <LanguageButton
                $isActive={currentLang === 'ru'}
                onClick={() => changeLanguage('ru')}
            >
                RU
            </LanguageButton>
        </LanguageContainer>
    )
}

const LanguageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0;
`

const LanguageButton = styled.button`
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.$isActive ? '#2c3e50' : '#4a5568'};
    background: ${props => props.$isActive ? 'rgba(0, 0, 0, 0.15)' : 'transparent'};
    border: 1px solid #4a5568;
    border-radius: 0;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
    min-width: 55px;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &:hover {
        color: #2c3e50;
        background: rgba(0, 0, 0, 0.08);
        border-color: #2c3e50;
    }

    @media only screen and (max-width: 1220px) {
        padding: 8px 16px;
        font-size: 13px;
        min-width: 50px;
    }
`

export default Languages