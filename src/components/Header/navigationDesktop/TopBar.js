import React from 'react'
import styled from 'styled-components'
import config from '../../../config'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

import {
    IconNavigation01,
    IconNavigation02,
    IconNavigation03
} from '../../../assets/icons'

function TopBar() {
    const [t] = useTranslation(["navigation"])

    const appointmentUrl = i18n.language === 'lv'
        ? config.external_url.URL_01
        : config.external_url.URL_00

    return (
        <TopBarContainer>
            {/* <InfoBox>
                <IconNavigation01 size={16} />
                <InfoText>{ t("navigation_secondary.telephone") }</InfoText>
            </InfoBox>

            <InfoBox>
                <IconNavigation02 size={20} />
                <InfoText>{ t("navigation_secondary.email") }</InfoText>
            </InfoBox> */}

            <AppointmentButton
                href={appointmentUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                {/* <IconNavigation03 size={20} /> */}
                <ButtonText>{ t("navigation_secondary.e_appointment") }</ButtonText>
            </AppointmentButton>
        </TopBarContainer>
    )
}

const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;

  @media only screen and (max-width: 1220px) {
    gap: 16px;
  }

  @media only screen and (max-width: 922px) {
    display: none;
  }
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border: 2px solid rgba(55, 58, 71, 0.3);
  border-radius: 0;
  background: transparent;
  transition: all 0.3s ease;

  & svg {
    color: #373a47;
    flex-shrink: 0;
  }

  &:hover {
    border-color: var(--clr--accent--base, #007bff);
    background: rgba(0, 123, 255, 0.05);

    & svg {
      color: var(--clr--accent--base, #007bff);
    }
  }

  @media only screen and (max-width: 1220px) {
    padding: 8px 16px;
  }
`

const InfoText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #373a47;
  white-space: nowrap;
  font-weight: 400;

  @media only screen and (max-width: 1220px) {
    font-size: 13px;
  }
`

const AppointmentButton = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border: 1px solid #4a5568;
  border-radius: 0;
  background: transparent;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  & svg {
    color: #4a5568;
    transition: color 0.3s ease;
    flex-shrink: 0;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.08);
    border-color: #2c3e50;

    & p {
      color: #2c3e50;
    }

    & svg {
      color: #2c3e50;
    }
  }

  @media only screen and (max-width: 1220px) {
    padding: 8px 16px;
  }

  @media only screen and (max-width: 922px) {
    display: none;
  }
`

const ButtonText = styled.p`
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

export default TopBar
