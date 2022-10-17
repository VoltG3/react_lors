import styled from 'styled-components'

const StyledTable = styled.div`
  
  width: 100%;
  
  & div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: var(--list--line--height);
  }
  
  .firstPart {
    max-width: 1080px;
  }
  
  .secondPart {
    max-width: 181px;
    
    & :nth-child(1) {
      justify-content: flex-end;
      max-width: 96px;
    }
    
    & :nth-child(2) {
      max-width: 74px;
    }
  }
  
  & div:nth-child(even) .line {
    background: var(--clr--default--ltst);
  }
  
  & div:nth-child(odd) .line {
    background: var(--crl--accent--ltr);
  }
`

const cyrrencySign = '€'

export const STDSD = (props) => {
    return (
        <StyledTable>
            { props.textcontent.map((data, key) => {
                return (
                    <div key={key}>
                        <div className={"line firstPart"}>
                            <p>{ data.stock }</p>
                        </div>

                        <div className={"line secondPart"}>
                            <div>
                                <p>{ data.price }</p>
                            </div>

                            <div>
                                <p>{ cyrrencySign }</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </StyledTable>
    )
}
