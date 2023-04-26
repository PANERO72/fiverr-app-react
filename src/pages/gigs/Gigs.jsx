import React, { useState } from 'react';
import './Gigs.scss';
import GigCard from '../../components/GigCard/GigCard';
import DownArrowImage from '../../assets//img/down.png';
import UpArrowImage from '../../assets//img/up.png';
import { Link } from 'react-router-dom';
import {gigsCA} from '../../data/dummyDataCA';
import {gigsDE} from '../../data/dummyDataDE';
import {gigsEN} from '../../data/dummyDataEN';
import {gigsES} from '../../data/dummyDataES';

import i18n from '../../i18n';

function Gigs() {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpenSubmenu(false);
  }

  let gigs;

  if (i18n.language === "ca") {
    gigs = gigsCA;
  } else if(i18n.language === "de") {
    gigs = gigsDE;
  } else if(i18n.language === "en") {
    gigs = gigsEN;
  }else if(i18n.language === "es") {
    gigs = gigsES;
  }
  return (
    <div className='gigsContainer'>
      <div className="gigsWrapper">
        <div className="gigsTopBar">
          <span className="breadcrumb">
            FIVERR &gt; GÁFICOS Y DISEÑO
          </span>
          <h1>Artista de IA</h1>
          <p>Explore los límites del arte y de la tecnología con los artitas de IA de Fiverr</p>
        </div>
        <div className="menu">
          <div className="left">
            <span>Presupuesto:</span>
            <input type="number" name="minPrice" id="" placeholder='Precio mínimo' />
            <input type="number" name="maxPrice" id="" placeholder='Precio máximo' />
            <button type='button'>Aplicar</button>
          </div>
          <div className="right">
            <span className="sortBy">Ordenar por:</span>
            <span className="sortType">{sort === "sales" ? "Más vendido" : "Lo más nuevo "}</span>
            <img src={openSubmenu ? UpArrowImage : DownArrowImage} alt="" onClick={() => {setOpenSubmenu(!openSubmenu)}} />
            {openSubmenu && <div className="dropdownMenu">
              {sort === "sales" ? (<Link className='link optionLink bordersTop' to="" onClick={()=> reSort("createdAt")}>Lo más nuevo</Link>) :
              (<Link className='link optionLink bordersBottom' to="" onClick={() => reSort("sales")}>Más vendido</Link>)}
            </div>}
          </div>
        </div>
        <div className="gigCardContainer">
          {gigs.map((gig) => (<GigCard key={gig.id} item={gig}></GigCard>))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;