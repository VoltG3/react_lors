import React from 'react'
import { useTranslation } from 'react-i18next'
import * as S from '../styles/styles.button'

export const ButtonController = ({ variant }) => {
    const { t } = useTranslation(["navigation"])
    
    const theme = S.themes[variant] || S.themes.default

    const getButtonLabel = () => {
        if (variant === "sliderDesktop" || variant === "sliderMobile") {
            return t("navigation_buttons.btn_variant_04")
        }
        if (variant === "appointment" || variant === "contacts" || variant === "mobile") {
            return t("navigation_buttons.btn_variant_01")
        }
        return t("navigation_buttons.btn_variant_02")
    }

    return (
        <S.StyledButtonContainer $theme={theme}>
            <div id="button">
                <button className="button">
                    <p>{getButtonLabel()}</p>
                </button>
            </div>
        </S.StyledButtonContainer>
    )
}
