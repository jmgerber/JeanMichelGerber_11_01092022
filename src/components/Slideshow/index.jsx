import { useState } from 'react'
import styled from 'styled-components'
import slideArrow from '../../assets/slide-arrow.png'

const SlideshowWrapper = styled.div`
  height: 415px;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 25px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    height: 225px;
  }

  & .slide {
    opacity: 0;
    transition-duration: 0.8s ease;
  }

  & .slide.active {
    height: 100%;
    width: 100%;
    opacity: 1;
    transition-duration: 0.8s;
  }

  & .image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  & .nextArrow,
  .prevArrow {
    position: absolute;
    padding: 12px;
    z-index: 1;
    cursor: pointer;
    user-select: none;
    @media screen and (max-width: 768px) {
      height: 20%;
      padding: 6px;
    }
  }

  & .nextArrow {
    transform: rotate(180deg);
    right: 0px;
  }
`

function Slideshow({ pictures }) {
  const [current, setCurrent] = useState(0)
  const length = pictures.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <SlideshowWrapper>
      {pictures.length > 1 && (
        <img
          className="prevArrow"
          src={slideArrow}
          alt="previous arrow"
          onClick={prevSlide}
        />
      )}

      {pictures.length > 1 && (
        <img
          className="nextArrow"
          src={slideArrow}
          alt="next arrow"
          onClick={nextSlide}
        />
      )}

      {pictures.map((image, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={image} alt="carousel" className="image" />
            )}
          </div>
        )
      })}
    </SlideshowWrapper>
  )
}

export default Slideshow
