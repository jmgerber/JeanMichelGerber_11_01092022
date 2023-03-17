import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const HomeLogo = styled.img`
  height: 68px;
  @media screen and (max-width: 768px) {
    height: 47px;
  }
`

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 100px 0;
  & .nav-link {
    margin-left: 60px;
    font-size: 24px;
    color: ${colors.primary};
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 20px;
    & .nav-link {
      margin-left: 10px;
      font-size: 12px;
      text-transform: uppercase;
    }
  }
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={logo} alt="logo Kasa" />
      </Link>
      <div>
        <Link className="nav-link" to="/">
          Accueil
        </Link>
        <Link className="nav-link" to="/about">
          A propos
        </Link>
      </div>
    </NavContainer>
  )
}

export default Header
