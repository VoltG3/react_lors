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
      <BurgerButton
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        $isOpen={isOpen}
      >
        <BurgerLine $isOpen={isOpen} $index={0} />
        <BurgerLine $isOpen={isOpen} $index={1} />
        <BurgerLine $isOpen={isOpen} $index={2} />
      </BurgerButton>

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
                <MenuTitle>Menu</MenuTitle>
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
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 50px;
  height: 45px;
  background: transparent;
  border: 1px solid ${props => props.$isOpen ? 'white' : '#4a5568'};
  border-radius: 0;
  cursor: pointer;
  padding: 10px;
  z-index: 101;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.$isOpen ? 'white' : '#2c3e50'};
    background: ${props => props.$isOpen ? 'transparent' : 'rgba(0, 0, 0, 0.08)'};
  }

  &:focus-visible {
    outline: 2px solid ${props => props.$isOpen ? 'white' : '#2c3e50'};
    outline-offset: 2px;
  }
`

const BurgerLine = styled.span`
  display: block;
  width: 28px;
  height: 2px;
  background: ${props => props.$isOpen ? 'white' : '#4a5568'};
  border-radius: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;

  ${props => props.$isOpen && props.$index === 0 && `
    transform: translateY(7px) rotate(45deg);
  `}

  ${props => props.$isOpen && props.$index === 1 && `
    opacity: 0;
    transform: translateX(-10px);
  `}

  ${props => props.$isOpen && props.$index === 2 && `
    transform: translateY(-7px) rotate(-45deg);
  `}
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
  gap: 20px;
`

const MenuTitle = styled.h2`
  color: white;
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  letter-spacing: 1px;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`

const LogoWrapper = styled.div`
  max-width: 200px;
  min-width: 150px;
  height: auto;

  @media (max-width: 480px) {
    max-width: 180px;
    min-width: 140px;
  }
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
  border-radius: 0;

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
  border-radius: 0;

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
