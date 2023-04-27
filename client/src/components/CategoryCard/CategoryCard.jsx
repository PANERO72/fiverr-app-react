import React from 'react';
import './CategoryCard.scss';
import { Link } from 'react-router-dom';

function CategoryCard({item}) {
  return (
    <Link to="/gigs?cat=design">
        <div className='categoryCardContainer'>
            <img src={item.img} alt="" />
            <span className="desc">{item.desc}</span>
            <span className="title">{item.title}</span>
            {/* <div className="categoryCardWrapper"></div> */}
        </div>
    </Link>
  )
}

export default CategoryCard;