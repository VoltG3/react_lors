import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function BTN_header() {
    const [t] = useTranslation(["common"])

    return (
        <Button>
            <Link to={"contacts"}>
                <p className={"textcontent--paragraph_older"}>{ t("btn_variant04") }</p>
            </Link>
        </Button>
    )
}

const Button = styled.button`
  background: palevioletred;
  margin: 1em;
  padding: 0.35em 2em;
  border: 2px solid var(--color--palevioletred);
  border-radius: 3px;
  
  & p {
    color: white;
  }
  &:hover {
    border: 2px solid var(--color--yellow);
    background: var(--color--yellow);
    
    & p {
      color: var(--color--primary);
    }
  }
`

export default BTN_header