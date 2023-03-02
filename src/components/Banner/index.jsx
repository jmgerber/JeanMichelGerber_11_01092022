import styled from 'styled-components'

const BannerStyled = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.bannerImg});
  background-position: center;
  background-size: cover;
  margin-bottom: 50px;
  height: 223px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  & h1 {
    color: #fff;
    font-size: 48px;
    font-weight: 500;
  }
`

function Banner({ bannerImage, bannerText }) {
  return (
    <BannerStyled bannerImg={bannerImage}>
      {bannerText && <h1>{bannerText}</h1>}
    </BannerStyled>
  )
}

export default Banner
