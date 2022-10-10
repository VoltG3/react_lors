import styled from 'styled-components'

const StyledTable = styled.div`
  
  width: 100%;
  
  & div {
    display: flex;
    width: 100%;
    min-height: var(--list--line--height);
  }
  
  & div:nth-child(even) {
    background: var(--clr--default--ltst);
  }
  
  & div:nth-child(odd) {
    background: var(--crl--accent--ltr);
  }
`

export const GetList = (props) => {

    // let res = ""
    // for(let i = 0; i < props.textcontent.length; i++) {
    //     res = props.textcontent[i]
    //     console.log(res)
    // }

    return (
        <StyledTable>
            { props.textcontent.map((data, key) => {
                return (
                    <div key={key}>
                        {
                            data.stock
                        }
                    </div>
                )
            })}
        </StyledTable>
    )
}
