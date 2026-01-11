import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// [ SHARED ] --------------------------------------------------

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const SecondaryNavWrapper = styled.div`
  display: block;
  width: 100%;

  @media only screen and (max-width: 922px) {
    display: none;
  }
`

// [ NAVIGATION DESKTOP ] --------------------------------------

export const NavDesktopContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  width: 100%;
  background: transparent;
  transition: all 0.3s ease;

  @media (max-width: 922px) {
    display: none;
  }
`

export const NavDesktopGrid = styled.nav`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto 1fr;
  gap: 20px;
  width: 100%;
  max-width: 1440px;
  padding: 15px 40px;
  box-sizing: border-box;
  grid-template-areas: 'logo info';

  @media (max-width: 1220px) {
    padding: 12px 30px;
    gap: 15px;
  }

  @media (max-width: 700px) {
    padding: 12px 20px;
  }
`

export const NavDesktopLogoSection = styled.div`
  grid-area: logo;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const NavDesktopInfoSection = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;

  @media (max-width: 1220px) {
    gap: 12px;
  }
`

// [ TOP BAR & LANGUAGES ] -------------------------------------

export const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;

  @media only screen and (max-width: 1220px) {
    gap: 16px;
  }
`

export const AppointmentButton = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border: 1px solid #4a5568;
  background: transparent;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.08);
    border-color: #2c3e50;

    & p {
      color: #2c3e50;
    }
  }

  @media only screen and (max-width: 1220px) {
    padding: 8px 16px;
  }
`

export const TopBarButtonText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: #4a5568;
  white-space: nowrap;
  transition: color 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media only screen and (max-width: 1220px) {
    font-size: 13px;
  }
`

export const LangContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const LangButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.$isActive ? '#2c3e50' : '#4a5568'};
  background: ${props => props.$isActive ? 'rgba(0, 0, 0, 0.15)' : 'transparent'};
  border: 1px solid #4a5568;
  cursor: pointer;
  transition: all 0.3s ease;
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

// [ SECONDARY NAV ] -------------------------------------------

export const SecondaryNavOuter = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  background: transparent;
`

export const SecondaryNavInner = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 1440px;
  padding: 20px 40px;
  box-sizing: border-box;

  @media (max-width: 1220px) {
    padding: 15px 30px;
    gap: 12px;
  }

  @media (max-width: 700px) {
    padding: 15px 20px;
  }
`

export const NavLink = styled(Link)`
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.$isActive ? '#d97706' : '#373a47'};
  text-decoration: none;
  letter-spacing: 0.5px;
  border: 1px solid ${props => props.$isActive ? '#d97706' : '#373a47'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  white-space: nowrap;

  &:hover {
    color: #d97706;
    border-color: #d97706;
    transform: translateY(-2px);
  }

  @media (max-width: 1220px) {
    padding: 10px 18px;
    font-size: 15px;
  }
`

// [ NAVIGATION MOBILE ] ---------------------------------------

export const NavMobileContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 90;
  width: 100%;
  display: none;

  @media only screen and (max-width: 922px) {
    display: flex;
    justify-content: center;
    background: rgb(244, 244, 244);
  }
`

export const NavMobileTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  height: 90px;
  padding: 0 40px;
  box-sizing: border-box;
  background: transparent;
  transition: all 0.3s ease;

  & > div:first-child {
    max-width: 250px;
    min-width: 220px;
  }

  @media only screen and (max-width: 1220px) {
    padding: 0 30px;
  }

  @media only screen and (max-width: 700px) {
    padding: 0 20px;
    height: 85px;

    & > div:first-child {
      max-width: 240px;
      min-width: 210px;
    }
  }
`

// [ MOBILE MENU ] ---------------------------------------------

export const BurgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 50px;
  height: 45px;
  background: transparent;
  border: 1px solid ${props => props.$isOpen ? 'white' : '#4a5568'};
  cursor: pointer;
  padding: 10px;
  z-index: 101;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.$isOpen ? 'white' : '#2c3e50'};
    background: ${props => props.$isOpen ? 'transparent' : 'rgba(0, 0, 0, 0.08)'};
  }
`

export const BurgerLine = styled.span`
  display: block;
  width: 28px;
  height: 2px;
  background: ${props => props.$isOpen ? 'white' : '#4a5568'};
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

export const MobileOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 98;
  backdrop-filter: blur(2px);
`

export const MobileMenuContainer = styled(motion.nav)`
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

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 30px 20px;
  }
`

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;
`

export const MobileMenuTitle = styled.h2`
  color: white;
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  letter-spacing: 1px;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`

export const MobileDivider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 30px 0;
`

export const MobileMenuNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const MobileMenuItem = styled(Link)`
  color: #d1d1d1;
  text-decoration: none;
  padding: 12px 10px;
  font-size: 18px;
  letter-spacing: 1px;
  transition: color 0.2s;

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.05);
  }
`

export const MobileLangSelector = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding-right: 10px;
`

export const MobileLangButton = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.$active ? '#EDAE0E' : 'white'};
  cursor: pointer;
  font-size: 16px;
  font-weight: ${props => props.$active ? 'bold' : 'normal'};
  padding: 8px 12px;
  transition: all 0.2s;

  &:hover {
    color: #EDAE0E;
    background: rgba(255, 255, 255, 0.05);
  }
`

export const LangSeparator = styled.span`
  color: rgba(255, 255, 255, 0.3);
  font-size: 16px;
`

// [ SLIDER ] --------------------------------------------------

export const SliderMainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  height: auto;
  box-shadow: rgba(176, 176, 176, 0.3) 0px 4px 15px 0px;
  position: relative;
`

export const SlideWrapper = styled.div`
  width: 100vw;
  min-height: 481px;
  max-height: 500px;
  height: auto;
  overflow: hidden;
  position: relative;
  opacity: 0.4;

  @media only screen and (max-width: 922px) {
    opacity: 0.7;
    min-height: 250px;
    max-height: 280px;
    height: 280px;
  }
`

export const SlideImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${props => props.$isActive ? 1 : props.$isPrevious ? 1 : 0};
  z-index: ${props => props.$isActive ? 2 : props.$isPrevious ? 1 : 0};
  transition: opacity 2s ease-in-out;
  object-position: ${props => props.$objectPositionDesktop || 'center center'};

  @media only screen and (max-width: 922px) {
    object-position: ${props => props.$objectPositionMobile || 'center center'};
  }
`

export const SliderContentDesktop = styled.div`
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  height: inherit;
  padding: 0 40px;
  box-sizing: border-box;

  @media only screen and (max-width: 922px) {
    display: none;
  }

  @media only screen and (max-width: 1220px) {
    padding: 0 30px;
  }

  @media only screen and (max-width: 700px) {
    padding: 0 20px;
  }
`

export const SliderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 140px;
  padding-bottom: 10%;

  & p:first-child {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: ${props => props.$lang === 'ru' ? '400' : '500'};
    font-size: min(max(2.5vw, 22px), 36px);
    line-height: min(max(3.056vw, 24px), 44px) !important;
    text-transform: ${props => props.$lang === 'ru' ? 'uppercase' : 'none'};
    white-space: pre-wrap;
    opacity: 0.7;
    color: #152F3F;
    margin: 0;
  }

  & p:last-child {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: ${props => props.$lang === 'ru' ? '400' : '300'};
    font-size: min(max(1.2vw, 16px), 18px);
    line-height: 1.6;
    opacity: 0.7;
    color: #030303;
    margin: 0;
  }

  @media only screen and (max-width: 900px) {
    margin-top: 40px;

    & p:first-child {
      padding-bottom: 10px;
    }
  }
`

export const SliderContentMobile = styled.div`
  display: none;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  padding: 0 40px;
  box-sizing: border-box;

  @media only screen and (max-width: 922px) {
    display: flex;
  }

  @media only screen and (max-width: 1220px) {
    padding: 0 30px;
  }

  @media only screen and (max-width: 700px) {
    padding: 0 20px;
  }
`

export const SliderMobileTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 25px;

  & p:first-child {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: ${props => props.$lang === 'ru' ? '400' : '500'};
    font-size: min(max(2.5vw, 22px), 36px);
    line-height: min(max(3.056vw, 24px), 44px) !important;
    text-transform: ${props => props.$lang === 'ru' ? 'uppercase' : 'none'};
    white-space: pre-wrap;
    opacity: 0.7;
    color: #152F3F;
    margin: 0;
  }

  & p:last-child {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: ${props => props.$lang === 'ru' ? '400' : '300'};
    font-size: min(max(1.2vw, 16px), 18px);
    line-height: 1.6;
    opacity: 0.7;
    color: #030303;
    margin: 0;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 10px;
  }
`

// [ DESKTOP MENU ] --------------------------------------------

export const DesktopMenuWrapper = styled.div`
  position: relative;
`

export const DesktopMenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background: transparent;
  border: 1px solid #4a5568;
  color: #4a5568;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.08);
    color: #2c3e50;
    border-color: #2c3e50;
  }

  @media only screen and (max-width: 1220px) {
    padding: 8px 16px;
    font-size: 13px;
  }
`

export const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 10px;
  background: white;
  min-width: 280px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  border: 1px solid #e2e8f0;
  z-index: 1001;
  padding: 10px 0;
`

export const DropdownItem = styled(Link)`
  display: block;
  padding: 12px 24px;
  color: #4a5568;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background: #f7fafc;
    color: #2d3748;
    padding-left: 30px;
  }
`
