import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function SecondaryNav() {
    const { t } = useTranslation(['navigation'])

    return (
        <OuterContainer>
            <InnerContainer>
                <NavLink to="home">
                    {t('navigation_primary.home')}
                </NavLink>

                <NavLink to="about">
                    {t('navigation_primary.about')}
                </NavLink>

                <NavLink to="services">
                    {t('navigation_primary.services')}
                </NavLink>

                <NavLink to="prices">
                    {t('navigation_primary.prices')}
                </NavLink>

                <NavLink to="info">
                    {t('navigation_primary.info')}
                </NavLink>

                <NavLink to="contacts">
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
  background: rgb(244, 244, 244);
  box-shadow: rgba(176, 176, 176, 0.3) 0px 2px 15px 0px;
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
`

const NavLink = styled(Link)`
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  color: #373a47;
  text-decoration: none;
  letter-spacing: 0.5px;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  white-space: nowrap;

  &:hover {
    color: var(--clr--accent--base, #007bff);
    border-color: var(--clr--accent--base, #007bff);
    background: rgba(0, 123, 255, 0.05);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid var(--clr--accent--base, #007bff);
    outline-offset: 3px;
  }

  @media (max-width: 1220px) {
    padding: 10px 18px;
    font-size: 15px;
  }
`

export default SecondaryNav
