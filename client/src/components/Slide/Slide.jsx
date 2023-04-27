import React from 'react';
import './Slide.scss';
import Slider from 'infinite-react-carousel';

function Slide({children, slidesToShow, arrowsScroll}) {
  return (
    <div className='sliderContainer resetPaddingTop resetPaddingBottom'>
        <div className="sliderWrapper">
            <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
                {children}
            </Slider>
        </div>
    </div>
  )
}

export default Slide;