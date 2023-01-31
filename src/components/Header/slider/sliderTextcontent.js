import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

import BTN_header from '../../Button/BTN_header'

function SliderTextcontent() {
    const [t] = useTranslation(["sections"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h1 = i18n.language === 'ru' ? 'textcontent--header1--rus' : 'textcontent--header1'
    const introHeader = 'SIA "Jautrītes Liepiņas ārsta prakse otorinolaringoloģijā"'

    return (
      <div style={{
          position: 'absolute',
          zIndex: '3',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '1440px',
          width: '100%',
          height: 'inherit'
      }}>
          <div style={{ margin: '80px 0 0 0' }}>
              <p className={ h1 }>{ introHeader }</p>
              <p className={ paragraph }>{ t("sections:section_header_part06") }</p>

              <div style={{ margin: '80px 0 0 0'}}>
                  <BTN_header />
              </div>
          </div>
      </div>
    )
}

export default SliderTextcontent