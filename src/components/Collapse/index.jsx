import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import collapseArrow from '../../assets/collapse-arrow.png'

const CollapseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-block: 30px;
  font-size: 24px;
  @media screen and (max-width: 768px) {
    margin-block: 20px;
  }
`

const CollapseTitle = styled.h2`
  font-size: inherit;
  background-color: ${colors.primary};
  color: white;
  font-weight: 500;
  height: 47px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 18px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 13px;
    height: 30px;
  }
`

const CollapseText = styled.p`
  display: flex;
  flex-direction: column;
  color: ${colors.primary};
  background-color: #f6f6f6;
  font-weight: 400;
  line-height: 34px;
  padding: 30px 18px 6px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 17px;
    padding: 20px 12px 50px;
  }
`

const RentCollapseWrapper = styled(CollapseWrapper)`
  font-size: 18px;
`

function Collapse({ title, text, rentCollapse }) {
  const [isTextOpen, setIsTextOpen] = useState(false)

  const handleClick = () => {
    setIsTextOpen(!isTextOpen)
  }
  if (!rentCollapse) {
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
        {isTextOpen && (
          <CollapseText>
            {typeof text === 'object'
              ? text.map((equipment, index) => (
                  <span key={`${equipment}-${index}`}>{equipment}</span>
                ))
              : text}
          </CollapseText>
        )}
      </CollapseWrapper>
    )
  } else {
    return (
      <RentCollapseWrapper>
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
        {isTextOpen && (
          <CollapseText>
            {typeof text === 'object'
              ? text.map((equipment, index) => (
                  <span key={`${equipment}-${index}`}>{equipment}</span>
                ))
              : text}
          </CollapseText>
        )}
      </RentCollapseWrapper>
    )
  }
}

export default Collapse
