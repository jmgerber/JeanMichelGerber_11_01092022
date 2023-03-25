import { useEffect, useState } from 'react'
import styled from 'styled-components'
import rentData from '../../data/data.json'
import Card from '../../components/Card'
import Banner from '../../components/Banner'
import homeBannerImg from '../../assets/home-banner.jpg'

const HomeContainer = styled.main`
  margin: 60px 100px;

  @media screen and (min-width: 769px) and (max-width: 958px) {
    margin: 40px;
  }

  @media screen and (max-width: 768px) {
    margin: 20px;
  }
`

const CardsContainer = styled.div`
  margin-block: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, max-content));
  gap: 50px 60px;
  justify-content: center;

  @media screen and (max-width: 958px) {
    margin-block: 20px;
    gap: 20px;
    grid-template-columns: 1fr;
  }
`

function Home() {
  const [rentList, setRentList] = useState([])

  useEffect(() => {
    setRentList(rentData)
  }, [])

  const bannerText = 'Chez vous, partout et ailleurs'

  return (
    <HomeContainer>
      <Banner bannerImage={homeBannerImg} bannerText={bannerText} />
      <CardsContainer>
        {rentList.map((accommodation) => (
          <Card
            key={accommodation.id}
            id={accommodation.id}
            title={accommodation.title}
            cover={accommodation.cover}
          />
        ))}
      </CardsContainer>
    </HomeContainer>
  )
}

export default Home
