import PropTypes from 'prop-types'
import styled from 'styled-components'

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
`

const CardTitle = styled.h2`
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  margin: 20px;
`

function Card({ title, cover }) {
  return (
    <CardWrapper coverImage={cover}>
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}

export default Card
