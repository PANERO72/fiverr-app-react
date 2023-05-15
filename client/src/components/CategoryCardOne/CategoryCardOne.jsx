import React from 'react';
import './CategoryCardOne.scss';
import { Link } from 'react-router-dom';

function CategoryCardOne({item}) {
  /* LOS DATOS SE MOSTRADOS AQUÍ SE OBTENIAN DE LOS ARCHIVOS cardsCA, cardsDE, cardsEN Y cardsES
  * Objeto cardsCA => id, title, desc, img
  */
  console.log(item);
  return (
    <Link to={`/gigs?cat=${item.id}`}>
        <div className='categoryCardItemOne'>
            <img src={item.img} alt="" />
            <span className="desc">{item.desc}</span>
            <span className="title">{item.title}</span>
            {/* <div className="categoryCardWrapper"></div> */}
        </div>
    </Link>
  )
}

export default CategoryCardOne;