import React, { useState, useRef, useEffect} from 'react';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import './Gigs.scss';
import GigCard from '../../components/GigCard/GigCard';
import DownArrowImage from '../../assets/img/down.png';
import UpArrowImage from '../../assets/img/up.png';
import { Link, useLocation } from 'react-router-dom';

// DATOS CARGADOS SOLO PARA DESAROLLO
import {gigsCA} from '../../data/dummyDataCA';
import {gigsDE} from '../../data/dummyDataDE';
import {gigsEN} from '../../data/dummyDataEN';
import {gigsES} from '../../data/dummyDataES';

import i18n from '../../i18n';

function Gigs() {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [sort, setSort] = useState("sales");
  const minRef = useRef();
  const maxRef = useRef();

  const {search} = useLocation();

  const {isLoading, error, data, refetch } = useQuery({
    queryKey: ['gigs'], queryFn: () => 
      newRequest.get(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`).then((res) => {
        return res.data;
      }),
  });

  // const {isLoading, error, data, refetch } = useQuery({
  //   queryKey: ['gigs'], queryFn: () => newRequest.get(`/gigs${search}`).then((res) => {
  //     return res.data;
  //   })
  // });

  console.log(data);

  const reSort = (type) => {
    setSort(type);
    setOpenSubmenu(false);
  }

  useEffect(() => {
    refetch();
  },[sort]);

  const apply = () => {
    refetch();
  }

  // CAMBIAR La VARIABLE 'data' EN EL MÉTODO 'map()' EN EL COMPOMENTE RENDERIZADO 'GigCard'
  let gigs;

  if (i18n.language === "cat") {
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
            <input type="number" name="minPrice" id="" placeholder='Precio mínimo' ref={minRef} />
            <input type="number" name="maxPrice" id="" placeholder='Precio máximo' ref={maxRef} />
            <button type='button' onClick={apply}>Aplicar</button>
          </div>
          <div className="right">
            <span className="sortBy">Ordenar por:</span>
            <span className="sortType">{sort === "sales" ? "Más vendido" : "Lo más nuevo "}</span>
            <img src={openSubmenu ? UpArrowImage : DownArrowImage} alt="" onClick={() => {setOpenSubmenu(!openSubmenu)}} />
            {openSubmenu && <div className="dropdownMenu">
              {sort === "sales" ? (<Link className='link optionLink bordersTop' to="" onClick={()=> reSort("createdAt")}>Lo más nuevo</Link>) :
              (<Link className='link optionLink bordersBottom' to="" onClick={() => reSort("sales")}>Más vendido</Link>)}
              <Link className='link optionLink bordersBottom' to="" onClick={() => reSort("sales")}>Popular</Link>
            </div>}
          </div>
        </div>
        <div className="gigCardContainer">
          {isLoading ? "loading" : error ? "¡Algo salió mal!" : data.map((gig) => (<GigCard key={gig._id} item={gig}></GigCard>))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;