import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function SecondaryNav() {
    const { t } = useTranslation(['navigation'])
    const location = useLocation()
    const currentPath = location.pathname.replace('/', '')

    return (
        <OuterContainer>
            <InnerContainer>
                <NavLink to="home" $isActive={currentPath === 'home' || currentPath === ''}>
                    {t('navigation_primary.home')}
                </NavLink>

                <NavLink to="about" $isActive={currentPath === 'about'}>
                    {t('navigation_primary.about')}
                </NavLink>

                <NavLink to="services" $isActive={currentPath === 'services'}>
                    {t('navigation_primary.services')}
                </NavLink>

                <NavLink to="prices" $isActive={currentPath === 'prices'}>
                    {t('navigation_primary.prices')}
                </NavLink>

                <NavLink to="info" $isActive={currentPath === 'info'}>
                    {t('navigation_primary.info')}
                </NavLink>

                <NavLink to="contacts" $isActive={currentPath === 'contacts'}>
                    {t('navigation_primary.contacts')}
                </NavLink>
            </InnerContainer>
        </OuterContainer>
    )
}

const OuterContainer = styled.nav`
  display: flex;
  justify-content: center;
  width: 100vw;
  background: transparent;
  box-shadow: none;
`

const InnerContainer = styled.div`
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

  @media (max-width: 922px) {
    display: none;
  }

  @media (max-width: 700px) {
    padding: 15px 20px;
  }
`

const NavLink = styled(Link)`
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.$isActive ? '#d97706' : '#373a47'};
  text-decoration: none;
  letter-spacing: 0.5px;
  border: 1px solid ${props => props.$isActive ? '#d97706' : '#373a47'};
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  white-space: nowrap;

  &:hover {
    color: #d97706;
    border-color: #d97706;
    background: transparent;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid #d97706;
    outline-offset: 3px;
  }

  @media (max-width: 1220px) {
    padding: 10px 18px;
    font-size: 15px;
  }
`

export default SecondaryNav
