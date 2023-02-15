import React, { useState } from 'react'
import { StyledCollective4 as StyledImgContainer } from './IMG.styles'
import { image01 } from '../../env'

const ImgCollective4 = () => {
    const [showHidden1, setShowHidden1] = useState(false);
    const [showHidden2, setShowHidden2] = useState(false);
    const [showHidden3, setShowHidden3] = useState(false);
    const [showHidden4, setShowHidden4] = useState(false);
    const paragraph = "textcontent--tabledata--item--names"

    return (
        <StyledImgContainer style={{
            gap: 'var(--size--padding30)',
            paddingTop: 'var(--size--padding60)',
            paddingBottom: 'var(--size--padding30)'
        }}>
            <div className={"hiddenContainer"}>
                {/*<img src={ process.env.PUBLIC_URL + '/assets/images/01.jpg' } width={"100%"} height={"auto"} alt={"img"} />*/}
                <img src={ image01 } width={"100%"} height={"auto"} alt={"img"} />
                <div className={"hiddenItem"}>
                    <div
                        onMouseEnter={() => setShowHidden1(true)}
                        onMouseLeave={() => setShowHidden1(false)} >
                        { showHidden1 && (
                            <div className="hiddenParagraph">
                                <div className={"hiddenParagraphContainer"}>
                                    <p className={ paragraph }>Dace Sidorova</p>
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
                                    <p className={ paragraph }>Elīna Mežzīle</p>
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
                                    <p className={ paragraph }>Jautrīte Liepiņa</p>
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
                                    <p className={ paragraph }>Elīna Eliasa-Vīgante</p>
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