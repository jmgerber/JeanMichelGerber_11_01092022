import styled from 'styled-components'

const BannerStyled = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.bannerImg});
  background-position: center;
  background-size: cover;
  height: 223px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 24px;
  & .bannerText {
    color: #fff;
    font-size: 48px;
    font-weight: 500;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    & .bannerText {
      font-size: 34px;
    }
  }

  @media screen and (max-width: 768px) {
    padding-inline: 16px;
    justify-content: flex-start;
    height: 111px;
    border-radius: 10px;
    & .bannerText {
      font-size: 24px;
    }
  }
`

function Banner({ bannerImage, bannerText }) {
  return (
    <BannerStyled bannerImg={bannerImage}>
      {bannerText && <h1 className="bannerText">{bannerText}</h1>}
    </BannerStyled>
  )
}

export default Banner
