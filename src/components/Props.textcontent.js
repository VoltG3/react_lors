import styled from 'styled-components'

const StyledTable = styled.div`
  white-space: pre-wrap;
  width: 100%;
`

export const GetTextcontent = (props) => {

    const getPart = (targetStock) => {

        let partToReturn = ""
        targetStock.map((data, key) => {
            if(props.partId === data.id) {
                partToReturn = data.part
            }
        })

        return partToReturn
    }

    return (
        <StyledTable>
            { props.textcontent.map((data, key) => {
                return (
                    <div key={key}>
                        {
                            props.section === data.section ? getPart(data.stock) : ""
                        }
                    </div>
                )
            })}
        </StyledTable>
    )
}
