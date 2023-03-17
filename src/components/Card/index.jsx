import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardWrapper = styled.div`
  height: 340px;
  width: 340px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.coverImage});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
  @media screen and (max-width: 768px) {
    height: 255px;
    width: 100%;
  }
`

const CardTitle = styled.h2`
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  margin: 20px;
`

function Card({ id, title, cover }) {
  return (
    <Link to={`/rent/${id}`}>
      <CardWrapper coverImage={cover}>
        <CardTitle>{title}</CardTitle>
      </CardWrapper>
    </Link>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}

export default Card
