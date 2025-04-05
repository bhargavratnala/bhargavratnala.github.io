import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel(props){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    stopOnHover: true,
  };

  const images = props.images.map((image, index) => {
    return (
      <div className='w-full h-full' key={index}>
        <img loading='lazy' className='w-full object-contain slick-slide-img' src={image} alt={`Image ${index + 1}`} />
      </div>
    );
  });

  return (
    <Slider {...settings} className='h-3/6 md:h-2/4'>
      {images}
    </Slider>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;