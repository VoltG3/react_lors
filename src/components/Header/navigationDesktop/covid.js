import styled from 'styled-components'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function Covid() {
    const [t] = useTranslation(["sections", "covid"])
    const [covidBarVisible, setCovidbarVisible] = useState(false);

    const toggleInfobar = () => {
        setCovidbarVisible(!covidBarVisible);
    }

    return (
        <StyledCovid onClick={toggleInfobar}>

            <div className={`covidbar ${covidBarVisible ? 'visible' : 'hidden'}`}>
                <div className={"innerCovid"}>
                    <p>{ t("covid:covid")}</p>
                </div>
            </div>

            <p className={"textcontent--header--desktop--infoline hoverLink"}>{ t("sections:section_header_part01") }</p>
        </StyledCovid>
    )
}

const StyledCovid = styled.div`
  .covidbar {
    position: absolute;
    z-index: var(--layer--covid);
      top: -100%;
      left: 0;
      right: 0;
    display: flex;
    justify-content: center;
      width: 100vw;
      height: var(--desktop--navigation--height);
    background: yellow;
    transition: top 0.5s ease-in-out;
    
    .innerCovid {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
        max-width: var(--page--width);
            width: 100%;
            height: var(--desktop--navigation--height);
      box-sizing: border-box;
      background-color: aquamarine;
    }
  }

  .covidbar.visible {
    top: 0;
  }

  .covidbar.hidden {
    top: -100%;
  }
`

export default Covid