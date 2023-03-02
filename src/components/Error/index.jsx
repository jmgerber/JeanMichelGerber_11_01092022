import colors from '../../utils/style/colors'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ErrorContainer = styled.main`
  color: ${colors.primary};
  text-align: center;
  margin: 150px 0;
  & .error404 {
    font-size: 288px;
    font-weight: 700;
    margin-bottom: 60px;
  }
  & p {
    font-size: 36px;
    font-weight: 500;
    margin-bottom: 160px;
  }
  & a {
    font-size: 18px;
    font-weight: 500;
    text-decoration: underline;
  }
`

function Error() {
  return (
    <ErrorContainer>
      <h1 className="error404">404</h1>
      <p className="">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </ErrorContainer>
  )
}

export default Error
