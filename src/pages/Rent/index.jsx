import { useParams, Navigate } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import rentData from '../../data/data.json'
import styled from 'styled-components'
import Collapse from '../../components/Collapse'
import colors from '../../utils/style/colors'
import Tag from '../../components/Tag'

const RentContainer = styled.main`
  margin: 20px 100px;
  flex: 1;
  color: ${colors.primary};
  @media screen and (max-width: 768px) {
    margin: 0 20px;
  }
`

const InfosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  font-weight: 500;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  & .rentTitle {
    margin-bottom: 6px;
    font-size: 36px;
    font-weight: 500;
    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }
  & .rentLocation {
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
  & .tagContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  & .rentHostInfos {
    display: flex;
    align-items: center;
    gap: 10px;
    & .rentHostPicture {
      width: 64px;
      height: 64px;
      object-fit: cover;
      border-radius: 50%;
    }
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }

  & .leftPartInfos {
    @media screen and (max-width: 768px) {
      margin-bottom: 16px;
    }
  }
  & .rightPartInfos {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    & .rentHostInfos {
      & .rentHostname {
        text-align: end;
        width: 80px;
        line-height: 26px;
        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }
      @media screen and (max-width: 768px) {
        order: 1;
      }
    }
    & .star {
      font-size: 30px;
      margin-right: 3px;
      &.on {
        color: ${colors.primary};
      }
      &.off {
        color: #e3e3e3;
      }
      @media screen and (max-width: 768px) {
        font-size: 15px;
      }
    }
    @media screen and (max-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`

const CollapseContainer = styled.div`
  display: flex;
  gap: 76px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
  }
`

function Rent() {
  const rentId = useParams().id
  const rent = rentData.find((element) => element.id === rentId)

  if (!rent) {
    return <Navigate to="/error" />
  }

  return (
    <RentContainer>
      {<Slideshow pictures={rent.pictures} />}
      <InfosContainer>
        <div className="leftPartInfos">
          <h1 className="rentTitle">{rent.title}</h1>
          <p className="rentLocation">{rent.location}</p>
          <div className="tagContainer">
            {rent.tags.map((tag, index) => (
              <Tag key={`${tag}-${index}`} tag={tag} />
            ))}
          </div>
        </div>
        <div className="rightPartInfos">
          <div className="rentHostInfos">
            <p className="rentHostname">{rent.host.name}</p>
            <img
              className="rentHostPicture"
              src={rent.host.picture}
              alt="Host profile"
            />
          </div>
          <div className="rentRating">
            {[...Array(5)].map((star, index) => {
              index += 1
              return (
                <span className={`star ${index <= rent.rating ? 'on' : 'off'}`}>
                  ★
                </span>
              )
            })}
          </div>
        </div>
      </InfosContainer>
      <CollapseContainer>
        <Collapse title="Description" text={rent.description} rentCollapse />
        <Collapse title="Equipements" text={rent.equipments} rentCollapse />
      </CollapseContainer>
    </RentContainer>
  )
}

export default Rent
