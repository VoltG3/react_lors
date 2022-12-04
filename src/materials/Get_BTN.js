import styled from 'styled-components'

import BtnVariant01 from './BTN_variant01'
import BtnVariant02 from './BTN_variant02'

import { Link01, Link02, Link03 } from '../env'
import { Link } from 'react-router-dom'

const StyledGet_BTN = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
    gap: 0;
  width: 100%;
  height: auto;
  margin-bottom: var(--margin--p);
  
  @media only screen and (max-width: 563px) {
    flex-direction: column;
  }
`

export default function Get_BTN(props) {
    return (
        <StyledGet_BTN>
            <div>
                <p style={{ paddingRight: '0px' }} className={"textcontent--paragraph"}>{ props.text }</p>
            </div>

            {/** ****** **/}
            {/** Routes **/}
            {/** ****** **/}

            <div style={{ display: props.btn === "routesToInfo"
                    ? 'inline-block'
                    : 'none' }}>
                <Link to={"/info"}>
                    <BtnVariant02 />
                </Link>
            </div>

            <div style={{ display: props.btn === "routesToContacts"
                    ? 'inline-block'
                    : 'none' }}>
                <Link to={"/contacts"}>
                    <BtnVariant02 />
                </Link>
            </div>

            {/** ****** **/}
            {/** A href **/}
            {/** ****** **/}

            <div style={{ display: props.btn === "hrefLink01"
                    ? 'inline-block'
                    : 'none' }}>
                <a href={ Link01 } target="_blank" rel="noopener noreferrer">
                    <BtnVariant01 />
                </a>
            </div>

            <div style={{ display: props.btn === "hrefLink02"
                    ? 'inline-block'
                    : 'none' }}>
                <a href={ Link02 } target="_blank" rel="noopener noreferrer">
                    <BtnVariant02 />
                </a>
            </div>

            <div style={{ display: props.btn === "hrefLink03"
                    ? 'inline-block'
                    : 'none' }}>
                <a href={ Link03 } target="_blank" rel="noopener noreferrer">
                    <BtnVariant02 />
                </a>
            </div>
        </StyledGet_BTN>
    )
}
