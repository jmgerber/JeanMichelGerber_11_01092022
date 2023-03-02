import { useEffect, useState } from 'react'
import styled from 'styled-components'
import locationsData from '../../data/data.json'
import Card from '../../components/Card'
import Banner from '../../components/Banner'
import homeBannerImg from '../../assets/home-banner.jpg'

const HomeContainer = styled.main`
  margin: 60px 100px;
`

const CardsContainer = styled.div`
  margin: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, max-content));
  gap: 50px 60px;
  justify-content: center;
`

function Home() {
  const [locationsList, setLocationsList] = useState([])

  useEffect(() => {
    setLocationsList(locationsData)
  }, [])

  const bannerText = 'Chez vous, partout et ailleurs'

  return (
    <HomeContainer>
      <Banner bannerImage={homeBannerImg} bannerText={bannerText} />
      <CardsContainer>
        {locationsList.map((location) => (
          <Card
            key={location.id}
            title={location.title}
            cover={location.cover}
          />
        ))}
      </CardsContainer>
    </HomeContainer>
  )
}

export default Home
