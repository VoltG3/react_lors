import styled from "styled-components";
import { useState } from 'react';
import {image01} from "../env";
import P2 from '../assets/img/contours/person_2.svg'
import GetImg from "../components/GetImg";

const ImgHover = () => {
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const handleMouseEnter = (e) => {
        setMessage('This is a hover message');
        setShowMessage(true);
    };

    const handleMouseLeave = (e) => {
        setShowMessage(false);
    };

    return(
        <ImageContainer>
            <GetImg img={ image01 } width={"1017"} height={"auto"} verticalMargin={"--margin--img--vertical"} />
            <InnerImage1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{showMessage && <div>{message}</div>}</InnerImage1>
            <div className={"contours"}></div>
            <div className={"contours"}></div>
            <div className={"contours"}></div>
            <div className={"contours"}></div>
        </ImageContainer>
    )
}

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
    width: auto;
    height: auto;
  border: solid 1px red;
  
  .contours {
    width: 25%;
    height: 100%;
    border: solid 1px red;
  }
`

const InnerImage1 = styled.div`
  position: absolute;
  z-index: 2;
    width: auto;
    height: auto;
  opacity: 0.5;
  background-color: #373a47;
  
  &:hover {
    border: solid 1px red;
  }
`

export default ImgHover