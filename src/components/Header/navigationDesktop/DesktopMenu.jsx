import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

const DesktopMenu = () => {
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
      <MenuButton
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        $isOpen={isOpen}
      >
        <BurgerLine $isOpen={isOpen} $index={0} />
        <BurgerLine $isOpen={isOpen} $index={1} />
        <BurgerLine $isOpen={isOpen} $index={2} />
      </MenuButton>

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

            <MenuPanel
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
            </MenuPanel>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

// Styled Components
const MenuButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;

  &:focus-visible {
    outline: 2px solid var(--clr--accent--base, #007bff);
    outline-offset: 4px;
  }
`

const BurgerLine = styled.span`
  display: block;
  width: 100%;
  height: 3px;
  background: ${props => props.$isOpen ? 'white' : '#373a47'};
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;

  ${props => props.$isOpen && props.$index === 0 && `
    transform: translateY(8.5px) rotate(45deg);
  `}

  ${props => props.$isOpen && props.$index === 1 && `
    opacity: 0;
    transform: translateX(-10px);
  `}

  ${props => props.$isOpen && props.$index === 2 && `
    transform: translateY(-8.5px) rotate(-45deg);
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

const MenuPanel = styled(motion.aside)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 450px;
  height: 100vh;
  background: #112734;
  z-index: 99;
  padding: 60px 50px;
  box-sizing: border-box;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 40px 30px;
  }
`

const MenuHeader = styled.div`
  margin-bottom: 20px;
`

const MenuTitle = styled.h2`
  color: white;
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  letter-spacing: 1px;
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 30px 0;
`

const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const MenuItem = styled(Link)`
  color: #d1d1d1;
  text-decoration: none;
  padding: 15px 20px;
  font-size: 18px;
  letter-spacing: 1px;
  transition: all 0.2s;
  border-radius: 8px;

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.08);
    transform: translateX(5px);
  }

  &:focus-visible {
    outline: 2px solid var(--clr--accent--base, #007bff);
    outline-offset: 2px;
  }
`

const LanguageSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

const LangButton = styled.button`
  background: ${props => props.$active ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  border: ${props => props.$active ? '1px solid var(--clr--accent--base, #007bff)' : '1px solid transparent'};
  color: ${props => props.$active ? 'var(--clr--accent--base, #007bff)' : 'white'};
  cursor: pointer;
  font-size: 16px;
  font-weight: ${props => props.$active ? '600' : '400'};
  padding: 10px 18px;
  transition: all 0.2s;
  border-radius: 6px;
  letter-spacing: 0.5px;

  &:hover {
    color: var(--clr--accent--base, #007bff);
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--clr--accent--base, #007bff);
  }

  &:focus-visible {
    outline: 2px solid var(--clr--accent--base, #007bff);
    outline-offset: 2px;
  }
`

const LangSeparator = styled.span`
  color: rgba(255, 255, 255, 0.3);
  font-size: 18px;
`

export default DesktopMenu
