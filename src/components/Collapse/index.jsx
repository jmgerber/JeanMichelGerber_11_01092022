import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import collapseArrow from '../../assets/collapse-arrow.png'

const CollapseWrapper = styled.div`
  margin: 33px 0;
`

const CollapseTitle = styled.h2`
  background-color: ${colors.primary};
  color: white;
  font-size: 24px;
  font-weight: 500;
  border-radius: 5px;
  height: 47px;
  display: flex;
  align-items: center;
  padding: 0 18px;
  justify-content: space-between;
  cursor: pointer;
`

const CollapseText = styled.p`
  color: ${colors.primary};
  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
  margin: 32px 18px 0;
`

function Collapse({ title, text }) {
  const [isTextOpen, setIsTextOpen] = useState(false)

  const handleClick = () => {
    setIsTextOpen(!isTextOpen)
  }
  return (
    <CollapseWrapper>
      <CollapseTitle onClick={handleClick}>
        {title}
        {isTextOpen ? (
          <img src={collapseArrow} alt="collapse-arrow" />
        ) : (
          <img
            src={collapseArrow}
            style={{ transform: `rotate(180deg)` }}
            alt="collapse-arrow"
          />
        )}
      </CollapseTitle>
      {isTextOpen && <CollapseText>{text}</CollapseText>}
    </CollapseWrapper>
  )
}

export default Collapse
