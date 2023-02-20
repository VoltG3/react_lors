import React from 'react'
import styled from 'styled-components'
import config from '../../config'

function FooterLogo() {
    const { logo_transparent } = config

    return(
        <StyledFooterLogo>
            <div className={"innerFooterLogo"}>
                <div className={"firstLogo"}>
                    <img src={ logo_transparent.logoTransparent00 } alt={"icon"} style={{ maxWidth: '150px', minWidth: '95px', paddingBottom: '15px' }}/>
                </div>

                <div className={"secondLogo"}>
                    <img src={ logo_transparent.logoTransparent01 } alt={"icon"} style={{ maxWidth: '40px', minWidth: '25px' }}/>
                    <img src={ logo_transparent.logoTransparent02 } alt={"icon"} style={{ maxWidth: '60px', minWidth: '30px' }}/>
                    <img src={ logo_transparent.logoTransparent03 } alt={"icon"} style={{ maxWidth: '53px', minWidth: '25px' }}/>
                    <img src={ logo_transparent.logoTransparent04 } alt={"icon"} style={{ maxWidth: '99px', minWidth: '45px' }}/>
                    <img src={ logo_transparent.logoTransparent05 } alt={"icon"} style={{ maxWidth: '95px', minWidth: '45px', paddingBottom: '12px' }}/>
                </div>
            </div>
        </StyledFooterLogo>
    )
}

const StyledFooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    width: 100vw;
    height: auto;
  background: #112734; 
  
  .innerFooterLogo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
      max-width: 1440px;
      width: var(--page--width100);
      height: auto;
    
    .firstLogo {
      display: flex;
      justify-content: center;
      align-items: center;
        height: 140px;
        width: auto;
      border-right: solid 1px var(--color--none);
     
      & img {
        width: 100%;
        height: auto;
        margin-right: 15px;
      }
    }
    
    .secondLogo {
      display: flex;
      flex-direction: row;
        height: 140px;
        width: auto;
      
      & img {
        display: flex;
        width: 100%;
        height: auto;
        padding-left: 20px;
      }
    }
  }
`

export default FooterLogo