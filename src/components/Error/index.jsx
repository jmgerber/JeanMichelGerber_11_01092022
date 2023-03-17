import colors from '../../utils/style/colors'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ErrorContainer = styled.main`
  color: ${colors.primary};
  text-align: center;
  flex: 1;
  font-weight: 500;
  margin-inline: 40px;
  & .error404 {
    font-size: 288px;
    font-weight: 700;
    margin-top: 160px;
    line-height: 288px;
  }
  & .errorMessage {
    font-size: 36px;
    margin-top: 40px;
    line-height: 51px;
  }
  & .redirectLink {
    display: inline-block;
    font-size: 18px;
    text-decoration: underline;
    margin-top: 168px;
    margin-bottom: 150px;
  }

  // Responsive
  @media screen and (max-width: 768px) {
    margin-inline: 20px;
    & .error404 {
      font-size: 96px;
      line-height: 96px;
      margin-top: 152px;
    }
    & .errorMessage {
      font-size: 18px;
      margin-top: 12px;
      line-height: 26px;
    }
    & .redirectLink {
      font-size: 14px;
      margin-top: 122px;
    }
  }
`

function Error() {
  return (
    <ErrorContainer>
      <h1 className="error404">404</h1>
      <p className="errorMessage">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="redirectLink" to="/">
        Retourner sur la page d'accueil
      </Link>
    </ErrorContainer>
  )
}

export default Error
