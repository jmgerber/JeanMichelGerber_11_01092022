import styled from 'styled-components'
import colors from '../../utils/style/colors'

const TagBlock = styled.span`
  background-color: ${colors.primary};
  color: #fff;
  padding: 3px 22px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 10px;
  gap: 10px;
  @media screen and (max-width: 768px) {
    padding: 3px 22px;
    font-size: 10px;
  }
`

function Tag({ tag }) {
  return <TagBlock>{tag}</TagBlock>
}

export default Tag
