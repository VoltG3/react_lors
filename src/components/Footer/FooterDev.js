import styled from 'styled-components'

function FooterDev() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '46px' }}>

{/*            <p style={{
                fontSize: '12px',
                color: 'var(--color--paragraph--footer)'
            }}>Developed by VoltG3 © 2023</p>*/}
            <StyledC><code>Font made from <a href="http://www.onlinewebfonts.com">www.onlinewebfonts.com</a> is licensed by CC BY 3.0</code></StyledC>
        </div>
    )
}

const StyledC = styled.div`

    code {
      font-size: 9px;
      color: var(--color--paragraph--footer);
    }
  
  a {
    color: var(--color--paragraph--footer);
  }
`

export default FooterDev
