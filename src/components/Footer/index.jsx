import logoWhite from '../../assets/logo-white.png'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  height: 209px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & img {
    margin: 26px 0 30px;
  }
  & p {
    color: #fff;
  }
`

function Footer() {
  return (
    <FooterContainer>
      <img src={logoWhite} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </FooterContainer>
  )
}

export default Footer
