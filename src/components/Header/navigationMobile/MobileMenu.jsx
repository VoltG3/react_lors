import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import Logo from '../navigationDesktop/Logo'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation(['chapters'])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  }

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: { duration: 0.3 }
    },
    open: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  }

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <>
      {!isOpen && (
        <BurgerButton
          onClick={toggleMenu}
          aria-label="Open menu"
          aria-expanded={isOpen}
        >
          <BurgerLine />
          <BurgerLine />
          <BurgerLine />
        </BurgerButton>
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            <Overlay
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              onClick={closeMenu}
            />

            <MenuContainer
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <MenuHeader>
                <LogoWrapper>
                  <Logo variant="transparent" />
                </LogoWrapper>
                <CloseButton
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <CloseIcon>×</CloseIcon>
                </CloseButton>
              </MenuHeader>

              <Divider />

              <MenuNav>
                <MenuItem to="home" onClick={closeMenu}>
                  {t('chapters:home')}
                </MenuItem>
                <MenuItem to="about" onClick={closeMenu}>
                  {t('chapters:about')}
                </MenuItem>
                <MenuItem to="services" onClick={closeMenu}>
                  {t('chapters:services')}
                </MenuItem>
                <MenuItem to="prices" onClick={closeMenu}>
                  {t('chapters:prices')}
                </MenuItem>
                <MenuItem to="info" onClick={closeMenu}>
                  {t('chapters:info')}
                </MenuItem>
                <MenuItem to="contacts" onClick={closeMenu}>
                  {t('chapters:contacts')}
                </MenuItem>
              </MenuNav>

              <Divider />

              <LanguageSelector>
                <LangButton
                  onClick={() => changeLanguage('lv')}
                  $active={i18n.language === 'lv'}
                >
                  LV
                </LangButton>
                <LangSeparator>/</LangSeparator>
                <LangButton
                  onClick={() => changeLanguage('en')}
                  $active={i18n.language === 'en'}
                >
                  EN
                </LangButton>
                <LangSeparator>/</LangSeparator>
                <LangButton
                  onClick={() => changeLanguage('ru')}
                  $active={i18n.language === 'ru'}
                >
                  RU
                </LangButton>
              </LanguageSelector>

              <Divider />
            </MenuContainer>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

// Styled Components
const BurgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus-visible {
    outline: 2px solid var(--clr--accent--base, #007bff);
    outline-offset: 4px;
  }
`

const BurgerLine = styled.span`
  width: 100%;
  height: 3px;
  background: #373a47;
  border-radius: 2px;
  transition: all 0.3s ease;
`

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 98;
  backdrop-filter: blur(2px);
`

const MenuContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background: #112734;
  z-index: 99;
  padding: 40px;
  box-sizing: border-box;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 30px 20px;
  }
`

const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const LogoWrapper = styled.div`
  max-width: 150px;
  min-width: 95px;
  height: auto;

  @media (max-width: 480px) {
    max-width: 120px;
  }
`

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
  color: #bdc3c7;
  transition: color 0.2s;

  &:hover {
    color: white;
  }

  &:focus-visible {
    outline: 2px solid var(--clr--accent--base, #007bff);
    outline-offset: 2px;
  }
`

const CloseIcon = styled.span`
  font-size: 36px;
  line-height: 1;
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 30px 0;
`

const MenuNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const MenuItem = styled(Link)`
  color: #d1d1d1;
  text-decoration: none;
  padding: 12px 10px;
  font-size: 18px;
  letter-spacing: 1px;
  transition: color 0.2s;
  border-radius: 4px;

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.05);
  }

  &:focus-visible {
    outline: 2px solid var(--clr--accent--base, #007bff);
    outline-offset: 2px;
  }
`

const LanguageSelector = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding-right: 10px;
`

const LangButton = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.$active ? 'var(--clr--accent--base, #007bff)' : 'white'};
  cursor: pointer;
  font-size: 16px;
  font-weight: ${props => props.$active ? 'bold' : 'normal'};
  padding: 8px 12px;
  transition: all 0.2s;
  border-radius: 4px;

  &:hover {
    color: var(--clr--accent--base, #007bff);
    background: rgba(255, 255, 255, 0.05);
  }

  &:focus-visible {
    outline: 2px solid var(--clr--accent--base, #007bff);
    outline-offset: 2px;
  }
`

const LangSeparator = styled.span`
  color: rgba(255, 255, 255, 0.5);
`

export default MobileMenu
