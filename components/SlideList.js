import Slide from './Slide'
import bgImg from '../public/bg.jpg'

const SlideList = ({ slides }) => {
  return (
    <>
      {slides.map((slide, index) => (
        <Slide
          key={index}
          slide={slide}
          prevSlide={slides[index - 1]}
          nextSlide={slides[index + 1]}
          bg={index === 0 ? bgImg : null}
        />
      ))}
    </>
  )
}

export default SlideList
