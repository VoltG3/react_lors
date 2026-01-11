import React from 'react'
import { useTranslation } from 'react-i18next'
import config from '../../config'
import * as S from './lists.styles'

export const ListInformation = () => {
  const { t } = useTranslation(['list_information'])
  const items = t('list_information.list_items', { returnObjects: true })

  return (
    <S.StyledListContainer variant="information">
      <S.StyledHeader>
        <p className="textContent--list--header">{t('list_information.list_header')}</p>
      </S.StyledHeader>
      {Array.isArray(items) &&
        items.map((listItem, key) => (
          <div key={key}>
            <p className="textContent--list--item">{listItem.item}</p>
          </div>
        ))}
    </S.StyledListContainer>
  )
}

export const ListServices = () => {
  const { t } = useTranslation(['list_services'])
  const items = t('list_services.list_items', { returnObjects: true })

  return (
    <S.StyledListContainer variant="services">
      <S.StyledHeader>
        <p className="textContent--list--header">{t('list_services.list_header')}</p>
      </S.StyledHeader>
      {Array.isArray(items) &&
        items.map((listItem, key) => (
          <div key={key}>
            <p className="textContent--list--item">{listItem.item}</p>
          </div>
        ))}
    </S.StyledListContainer>
  )
}

const PriceList = ({ translationKey }) => {
  const { t } = useTranslation(['list_prices'])
  const currencySign = config.common.currencySign
  const items = t(`${translationKey}.list_items`, { returnObjects: true })

  return (
    <S.StyledListContainer variant="prices">
      <S.StyledHeader>
        <p className="textContent--list--header">{t(`${translationKey}.list_header`)}</p>
      </S.StyledHeader>
      {Array.isArray(items) &&
        items.map((listItem, key) => (
          <div key={listItem.id || key}>
            <span className="productItemDescribe">
              <p className="textContent--list--item">{listItem.item}</p>
            </span>
            <span className="productItemPrice">
              <div>
                <p className="textContent--list--item">{listItem.price}</p>
              </div>
              <div>
                <p className="textContent--list--item">{currencySign}</p>
              </div>
            </span>
          </div>
        ))}
    </S.StyledListContainer>
  )
}

export const ListPricesWithReference = () => <PriceList translationKey="list_prices_with_reference" />
export const ListPricesWithoutReference = () => (
  <PriceList translationKey="list_prices_without_reference" />
)
