import React, { useState } from 'react'
import config from '../../config'

import { StyledCollective4 as StyledImgContainer } from './image.styles'


const ImgCollective4 = (props) => {
    const [showHidden1, setShowHidden1] = useState(false);
    const [showHidden2, setShowHidden2] = useState(false);
    const [showHidden3, setShowHidden3] = useState(false);
    const [showHidden4, setShowHidden4] = useState(false)

    const paragraph = "textcontent--tabledata--item--names"
    const { name_01, name_02, name_03, name_04 } = config.names

    return (
        <StyledImgContainer style={{
            gap: 'var(--size--padding30)',
            paddingTop: 'var(--size--padding60)',
            paddingBottom: 'var(--size--padding30)'
        }}>
            <div className={"hiddenContainer"}>
                <img src={ props.variant } width={"100%"} height={"auto"} alt={"img"} loading="lazy" />
                <div className={"hiddenItem"}>
                    <div
                        onMouseEnter={() => setShowHidden1(true)}
                        onMouseLeave={() => setShowHidden1(false)} >
                        { showHidden1 && (
                            <div className="hiddenParagraph">
                                <div className={"hiddenParagraphContainer"}>
                                    <p className={ paragraph }>{ name_01 }</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div
                        onMouseEnter={() => setShowHidden2(true)}
                        onMouseLeave={() => setShowHidden2(false)} >
                        { showHidden2 && (
                            <div className="hiddenParagraph">
                                <div className={"hiddenParagraphContainer"}>
                                    <p className={ paragraph }>{ name_02 }</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div
                        onMouseEnter={() => setShowHidden3(true)}
                        onMouseLeave={() => setShowHidden3(false)} >
                        { showHidden3 && (
                            <div className="hiddenParagraph">
                                <div className={"hiddenParagraphContainer"}>
                                    <p className={ paragraph }>{ name_03 }</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div
                        onMouseEnter={() => setShowHidden4(true)}
                        onMouseLeave={() => setShowHidden4(false)} >
                        { showHidden4 && (
                            <div className="hiddenParagraph">
                                <div className={"hiddenParagraphContainer"}>
                                    <p className={ paragraph }>{ name_04 }</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </StyledImgContainer>
    )
}

export default ImgCollective4