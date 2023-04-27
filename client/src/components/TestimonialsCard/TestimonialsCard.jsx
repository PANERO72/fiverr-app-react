import React from 'react';
import './TestimonialsCard.scss';

function TestimonialsCard({item}) {
  return (
      <div className='testimonialsCardContainer'>
          <div className="testimonialsCardWrapper">
            <div className="testimonialsOneLeft">
              <video src={item.video} controls></video>
            </div>
            <div className="testimonialsOneRight">
              <h5 className="title">{item.title}
                <span className="testimonialsLogo">
                    <img src={item.logo} alt="" />
                </span>
              </h5>
              <blockquote><i className="desc">{item.desc}</i></blockquote>
            </div>
          </div>
      </div>
  )
}

export default TestimonialsCard;