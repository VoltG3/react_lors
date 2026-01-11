import React, { useState } from 'react'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import config from '../config'
import * as S from '../styles/styles.header'
import Logo from './Logo'
import logoColoredLors from '../assets/logo/colored_logo_00.svg'
import logoTransparentLors from '../assets/logo/transparent_logo_00.svg'

const NavLogo = ({ variant, maxHeight }) => {
    const isColored = variant === "colored"
    const logoSrc = isColored ? logoColoredLors : logoTransparentLors
    return (
        <Logo
            src={logoSrc}
            alt="Lors"
            maxHeight={maxHeight || "45px"}
        />
    )
}

const Languages = () => {
    const [currentLang, setCurrentLang] = useState(i18n.language)
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
        setCurrentLang(lang)
    }

    return (
        <S.LangContainer>
            {['lv', 'en', 'ru'].map((lang) => (
                <S.LangButton
                    key={lang}
                    $isActive={currentLang === lang}
                    onClick={() => changeLanguage(lang)}
                >
                    {lang}
                </S.LangButton>
            ))}
        </S.LangContainer>
    )
}

const TopBar = () => {
    const { t } = useTranslation(["navigation"])
    const appointmentUrl = i18n.language === 'lv'
        ? config.external_url.URL_01
        : config.external_url.URL_00

    return (
        <S.TopBarContainer>
            <S.AppointmentButton
                href={appointmentUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                <S.TopBarButtonText>{t("navigation_secondary.e_appointment")}</S.TopBarButtonText>
            </S.AppointmentButton>
        </S.TopBarContainer>
    )
}

const DesktopMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useTranslation(['chapters'])
    const toggleMenu = () => setIsOpen(!isOpen)

    const menuItems = [
        { to: 'home', label: t('chapters:home') },
        { to: 'about', label: t('chapters:about') },
        { to: 'services', label: t('chapters:services') },
        { to: 'prices', label: t('chapters:prices') },
        { to: 'info', label: t('chapters:info') },
        { to: 'contacts', label: t('chapters:contacts') }
    ]

    return (
        <S.DesktopMenuWrapper onMouseLeave={() => setIsOpen(false)}>
            <S.DesktopMenuButton onMouseEnter={() => setIsOpen(true)}>
                MENU
            </S.DesktopMenuButton>
            <AnimatePresence>
                {isOpen && (
                    <S.DropdownMenu
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        {menuItems.map((item) => (
                            <S.DropdownItem key={item.to} to={item.to} onClick={() => setIsOpen(false)}>
                                {item.label}
                            </S.DropdownItem>
                        ))}
                    </S.DropdownMenu>
                )}
            </AnimatePresence>
        </S.DesktopMenuWrapper>
    )
}

export const SecondaryNav = () => {
    const { t } = useTranslation(['navigation'])
    const location = useLocation()
    const currentPath = location.pathname.replace('/', '')

    const navLinks = [
        { to: 'home', label: t('navigation_primary.home'), active: currentPath === 'home' || currentPath === '' },
        { to: 'about', label: t('navigation_primary.about'), active: currentPath === 'about' },
        { to: 'services', label: t('navigation_primary.services'), active: currentPath === 'services' },
        { to: 'prices', label: t('navigation_primary.prices'), active: currentPath === 'prices' },
        { to: 'info', label: t('navigation_primary.info'), active: currentPath === 'info' },
        { to: 'contacts', label: t('navigation_primary.contacts'), active: currentPath === 'contacts' }
    ]

    return (
        <S.SecondaryNavOuter>
            <S.SecondaryNavInner>
                {navLinks.map((link) => (
                    <S.NavLink key={link.to} to={link.to} $isActive={link.active}>
                        {link.label}
                    </S.NavLink>
                ))}
            </S.SecondaryNavInner>
        </S.SecondaryNavOuter>
    )
}

const HeaderNavDesktop = () => {
    return (
        <S.NavDesktopContainer>
            <S.NavDesktopGrid>
                <S.NavDesktopLogoSection>
                    <NavLogo variant="colored" />
                </S.NavDesktopLogoSection>

                <S.NavDesktopInfoSection>
                    <TopBar />
                    <Languages />
                    <DesktopMenu />
                </S.NavDesktopInfoSection>
            </S.NavDesktopGrid>
        </S.NavDesktopContainer>
    )
}

export default HeaderNavDesktop
