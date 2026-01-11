import React, { useState } from 'react'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { AnimatePresence } from 'framer-motion'
import config from '../config'
import * as S from '../styles/styles.header'
import Logo from './Logo'
import logoColoredLors from '../assets/logo/colored_logo_00.svg'
import { ButtonController } from './Button'

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useTranslation(['chapters', 'navigation'])

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    const appointmentUrl = i18n.language === 'lv'
        ? config.external_url.URL_01
        : config.external_url.URL_00

    const menuItems = [
        { to: 'home', label: t('chapters:home') },
        { to: 'about', label: t('chapters:about') },
        { to: 'services', label: t('chapters:services') },
        { to: 'prices', label: t('chapters:prices') },
        { to: 'info', label: t('chapters:info') },
        { to: 'contacts', label: t('chapters:contacts') }
    ]

    return (
        <>
            <S.BurgerButton
                onClick={toggleMenu}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                $isOpen={isOpen}
            >
                {[0, 1, 2].map((i) => (
                    <S.BurgerLine key={i} $isOpen={isOpen} $index={i} />
                ))}
            </S.BurgerButton>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <S.MobileOverlay
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMenu}
                        />

                        <S.MobileMenuContainer
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                        >
                            <S.MobileMenuHeader>
                                <S.MobileMenuTitle>Menu</S.MobileMenuTitle>
                            </S.MobileMenuHeader>

                            <S.MobileDivider />

                            <S.MobileMenuNav>
                                {menuItems.map((item) => (
                                    <S.MobileMenuItem key={item.to} to={item.to} onClick={closeMenu}>
                                        {item.label}
                                    </S.MobileMenuItem>
                                ))}
                            </S.MobileMenuNav>

                            <S.MobileDivider />

                            <S.MobileLangSelector>
                                {['lv', 'en', 'ru'].map((lang, index) => (
                                    <React.Fragment key={lang}>
                                        <S.MobileLangButton
                                            onClick={() => changeLanguage(lang)}
                                            $active={i18n.language === lang}
                                        >
                                            {lang.toUpperCase()}
                                        </S.MobileLangButton>
                                        {index < 2 && <S.LangSeparator>/</S.LangSeparator>}
                                    </React.Fragment>
                                ))}
                            </S.MobileLangSelector>

                            <S.MobileDivider />

                            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '10px' }}>
                                <a href={appointmentUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                                    <ButtonController variant="mobile" />
                                </a>
                            </div>
                        </S.MobileMenuContainer>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

const HeaderNavMobile = () => {
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <S.NavMobileContainer>
            <S.NavMobileTopBar>
                <Logo
                    src={logoColoredLors}
                    alt="Lors"
                    maxHeight="55px"
                    mobileMaxHeight="45px"
                />
                <S.MobileTopBarRightSection>
                    {['lv', 'en', 'ru'].map((lang) => (
                        <S.MobileTopBarLangButton
                            key={lang}
                            onClick={() => changeLanguage(lang)}
                            $active={i18n.language === lang}
                        >
                            {lang}
                        </S.MobileTopBarLangButton>
                    ))}
                    <MobileMenu />
                </S.MobileTopBarRightSection>
            </S.NavMobileTopBar>
        </S.NavMobileContainer>
    )
}

export default HeaderNavMobile
