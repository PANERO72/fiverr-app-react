import React from 'react';
import './CategoryCard.scss';
import { Link } from 'react-router-dom';

function CategoryCard({item}) {
  /* LOS DATOS SE MOSTRADOS AQUÍ SE OBTENIAN DE LOS ARCHIVOS cardsCA, cardsDE, cardsEN Y cardsES
  * Objeto cardsCA => id, title, desc, img
  */

  return (
    <Link to={`/gigs?cat=${item.cat}`}>
        <div className='categoryCardItem'>
            <img src={item.cover} alt="" />
            <span className="desc">{item.shortDesc}</span>
            <span className="title">{item.shortTitle}</span>
            {/* <div className="categoryCardWrapper"></div> */}
        </div>
    </Link>
  )
}

export default CategoryCard;