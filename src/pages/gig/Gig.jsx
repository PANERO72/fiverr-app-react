import React, { useRef, useState } from 'react';
import './Gig.scss';
import Slide from '../../components/Slide/Slide';
// import './Gig.css';

import SliderImage01 from '../../assets/img/slide-01.png';
import SliderImage02 from '../../assets/img/slide-02.png';
import SliderImage03 from '../../assets/img/slide-03.png';
import SliderImage04 from '../../assets/img/slide-04.png';
import SliderImage05 from '../../assets/img/slide-05.png';
import SliderImage06 from '../../assets/img/slide-06.png';
import SliderImage07 from '../../assets/img/slide-07.png';
import SliderImage08 from '../../assets/img/slide-08.png';
import SliderImage09 from '../../assets/img/slide-09.png';
import SliderImage10 from '../../assets/img/slide-10.png';
import SliderImage11 from '../../assets/img/slide-11.png';
import SliderImage12 from '../../assets/img/slide-12.png';
import SliderImage13 from '../../assets/img/slide-13.png';
import SliderImage14 from '../../assets/img/slide-14.png';
import SliderImage15 from '../../assets/img/slide-15.png';
import SliderImage16 from '../../assets/img/slide-16.png';
import SliderImage17 from '../../assets/img/slide-17.png';
import SliderImage18 from '../../assets/img/slide-18.png';
import SliderImage19 from '../../assets/img/slide-19.webp';
import SliderImage20 from '../../assets/img/slide-20.jpg';
import SliderImage21 from '../../assets/img/slide-21.webp';
import SliderImage22 from '../../assets/img/slide-22.webp';
import SliderImage23 from '../../assets/img/slide-23.webp';
import SliderImage24 from '../../assets/img/slide-24.webp';
import SliderImage25 from '../../assets/img/slide-25.jpg';
import SliderImage26 from '../../assets/img/slide-26.webp';

import Carousel from "nuka-carousel";
import { Link } from 'react-scroll';

function Gig() {

    const paramsCarousel = {
        defaultControlsConfig:{
            prevButtonText: "🡸",
            nextButtonText: "🡺"
        }
    }

    const [isActiveRevision, setIsActiveRevision] = useState(false);

    const [activeIndex, setActiveIndex] = useState(1);
    // const handleClick = (index) => setActiveIndex(index);
    const handleClick = (index) => {
        setActiveIndex(index);
        if (index === 1) {
            setIsActiveRevision(false);
        } else {
            setIsActiveRevision(true);
        }
        
    } 
    const checkActive = (index, className) => activeIndex === index ? className : "";

    return (<>
        <div className="topMenuShareContainer">
            <div className="topMenuShareWrapper">
                <div className="topMenu">
                    <ul>
                        <li className='navlink overview-link link'><Link activeClass='active' smooth={true} spy={true} offset={-200} to='overview-section'>Resumen</Link></li>
                        <li className='navlink description-link link'><Link activeClass='active' smooth={true} spy={true} offset={-100} to='description-section'>Descripción</Link></li>
                        <li className='navlink about-link link'><Link activeClass='active' smooth={true} spy={true} offset={-100} to='seller-section'>Acerca del vendedor</Link></li>
                        <li className='navlink packages-link link'><Link activeClass='active' smooth={true} spy={true} offset={-100} to='buy-packages-section'>Comprar paquetes</Link></li>
                        <li className='navlink recommendations-link link'><Link activeClass='active' smooth={true} spy={true} offset={-100} to='recommendations-section'>Recomendaciones</Link></li>
                        <li className='navlink reviews-link link'><Link activeClass='active' smooth={true} spy={true} offset={-100} to='reviews-section'>Reseñas</Link></li>
                    </ul>
                </div>
                <aside className="topShare">
                    <div className="collect-wrapper">
                        <div className="collect-package nav-collect">
                            <div className="jEW3B9z Y_05slf">
                                <span className="HsyURQF">
                                    <button className="iyKO0_a" title='Guardar en Mi primera lista'>
                                        <span className="glAQDp5 WO3uerB" style={{width:"16px",height:"16px"}} aria-hidden="true">
                                            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path></svg>
                                        </span>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <span className="collect-count">178</span>
                    </div>
                    <div className="jEW3B9z Y_05slf sharing-link-tooltip">
                        <span className="HsyURQF">
                            <button className="sPdE5j4 zUvc8Si kOEHSF3 co-white btn-sharing-link sharing-icon bg-co-green-700" aria-label="Comparte este Servicio">
                                <span className="glAQDp5 share-icon" style={{width:"16px",height:"16px"}} aria-hidden="true">
                                    <svg width="14" height="16" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg"><path d="M11 10C10.2935 10 9.64416 10.2443 9.13156 10.653L5.92887 8.65128C6.02372 8.22226 6.02372 7.77771 5.92887 7.34869L9.13156 5.347C9.64416 5.75566 10.2935 6 11 6C12.6568 6 14 4.65684 14 3C14 1.34316 12.6568 0 11 0C9.34316 0 8 1.34316 8 3C8 3.22369 8.02469 3.44156 8.07113 3.65128L4.86844 5.65297C4.35584 5.24434 3.7065 5 3 5C1.34316 5 0 6.34316 0 8C0 9.65684 1.34316 11 3 11C3.7065 11 4.35584 10.7557 4.86844 10.347L8.07113 12.3487C8.02379 12.5626 7.99994 12.781 8 13C8 14.6568 9.34316 16 11 16C12.6568 16 14 14.6568 14 13C14 11.3432 12.6568 10 11 10Z"></path></svg>
                                </span>
                            </button>
                        </span>
                    </div>
                </aside>
            </div>
        </div>
        <div className='gigContainer'  id='overview-section'>
            <div className="gigWrapper">
                <div className="gigTopBar">
                    <span className="breadcrumb">
                        FIVERR &gt; GÁFICOS Y DISEÑO
                    </span> 
                </div>
                <div className="gigContent">
                    <div className="left">
                        <h1>Crearé arte de IA personalizado rápido usando Midjourney advanced</h1>
                        <div className="sellerOverviewContainer">
                            <div className="sellerOverviewWrapper">
                                <div className="sellerImageProfile">                                    
                                    <img className="_YszT7W" src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c5323d1e3c30bbac2c31a905b5bd8cb2-1675191168940/22bca898-8c41-4832-be06-ac78f7d044a4.PNG" alt="ai_lani" loading="lazy" data-uw-rm-ima-original="ai_lani" />
                                </div>
                                <div className="sellerInfoContainer">
                                    <div className="flex flex-items-baseline">
                                        <div tabIndex="0" role="button" aria-label="Desplázate para conocer al vendedor" className="LBuVtkY tbody-4 text-bold">Ai Lani</div>
                                        <div tabIndex="0" role="button" aria-label="Desplázate para conocer al vendedor" className="LBuVtkY a2vZSDs">@ai_lani</div>
                                    </div>
                                    <div className="Waqjn3u">
                                        <div className="user-profile-level P9drdQ1 n2BDwY8">Vendedor Nivel 1</div>
                                    </div>
                                    <div className="orca-rating SwtJyda color-yellow tbody-6">
                                        <div className="stars">
                                            <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true">
                                                <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                            </span>
                                            <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true">
                                                <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                            </span>
                                            <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true">
                                                <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                            </span>
                                            <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true">
                                                <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                            </span>
                                            <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true">
                                                <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                            </span>
                                        </div>
                                        <b className="rating-score">5</b>
                                        <span className="ratings-count">(68)</span>
                                    </div>
                                    <div className="sfNimsX">5 pedidos esperando</div>
                                </div>
                            </div>
                            <div className="sellerFiverrChoice jEW3B9z Y_05slf">
                                <span className="HsyURQF">
                                    <span className="S4xqSKa" delay="120" content="[object Object]" position="bottom" boxclassname="n8k5Ydl" boxcontentclassname="xZqc_Ec kOqjstB" containerclassname="zioD2ji"></span>
                                </span>
                            </div>
                        </div>
                        <div className="loyalty-and-notable-clients m-t-16 p-t-20 m-b-16">
                            <div className="seller-loyalty-banner">
                                <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/56ff3db8ae625ba1d6493c3c250c5919-1625663632464/3-Trophy-70_alpha.gif" alt="trofeo animado" data-impression-collected="true" data-uw-rm-ima-original="trofeo animado" />
                                <strong>¡La gente continúa regresando!</strong> ai_lani tiene una cantidad excepcional de compradores recurrentes.
                            </div>
                        </div>
                        {/* ESTE BOTON LO HE OCULTADO */}
                        <div className="ugc-translation-button-wrapper">
                            <div className="default-translation-button">
                                <button className="translation-button">
                                    <div className="icons-container">
                                        <span className="glAQDp5 translation-icon" style={{width:"28px",height:"28px"}} aria-hidden="true">
                                            <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.2002 5.2002H15.0002C14.1002 5.2002 13.4002 5.5002 12.7002 6.0002H5.00025C3.80025 6.0002 2.60025 7.0002 2.30025 8.2002L1.00025 14.9002C0.800246 16.1002 1.60025 17.1002 2.90025 17.1002H7.70025C8.70024 17.1002 9.70024 16.7002 10.4002 15.9002H17.1002C18.3002 15.9002 19.5002 14.9002 19.7002 13.7002L21.0002 7.3002C21.2002 6.1002 20.4002 5.2002 19.2002 5.2002ZM10.3002 14.2002C10.1002 15.4002 9.00024 16.3002 7.70025 16.3002H2.90025C2.60025 16.3002 2.30025 16.2002 2.10025 16.0002C1.90025 15.8002 1.90025 15.5002 1.90025 15.2002L3.20025 8.5002C3.40025 7.7002 4.20025 7.0002 5.00025 7.0002H11.7002L10.3002 14.2002ZM17.5002 13.4002L16.6002 11.4002H14.3002L13.4002 13.4002H12.4002L15.0002 7.4002H15.9002L18.5002 13.4002H17.5002Z"></path><path d="M14.7002 10.5002H16.2002L15.4002 8.7002L14.7002 10.5002Z"></path><path d="M3.90039 10.2H8.20039C8.00039 10.7 7.50039 11.7 6.80039 12.5C6.10039 11.6 5.80039 10.6 5.80039 10.6L5.00039 10.8C5.00039 10.8 5.30039 12 6.10039 13.1C5.60039 13.5 5.00039 13.8 4.30039 13.8V14.6C5.20039 14.6 5.90039 14.2 6.60039 13.7C7.00039 14.1 7.50039 14.5 8.20039 14.7L8.60039 14C8.10039 13.8 7.70039 13.5 7.30039 13.2C8.40039 11.9 9.00039 10.3 9.00039 10.2H10.0004V9.4H7.30039V8.5H6.50039V9.4H3.90039V10.2Z"></path><path d="M12.7 18.8002C11.6 19.7002 10.5 20.3002 8.5 19.3002C10.1 22.5002 12.9 20.8002 13.8 20.1002L15.1 22.0002L16.2 17.3002L11.3 17.2002L12.7 18.8002Z"></path><path d="M10.3998 3.2C11.4998 2.3 12.5998 1.7 14.5998 2.7C12.9998 -0.5 10.1998 1.2 9.2998 1.9L7.8998 0L6.7998 4.7L11.6998 4.8L10.3998 3.2Z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <p className="text-body-2">Mostrar en el idioma original</p>
                                </button>
                                <p className="text-body-3 translation-disclaimer">Algunos elementos de esta página se han traducido de manera automática.<i className="vendor-disclaimer"></i></p>
                            </div>
                        </div>
                        <div className="gigCardContainer">
                            <Slide slidesToShow={1} arrowsScroll={1}>
                                <img src="https://picsum.photos/id/1/200/300" alt="" />
                                <img src="https://picsum.photos/id/10/200/300" alt="" />
                                <img src="https://picsum.photos/id/23/200/300" alt="" />
                                <img src="https://picsum.photos/id/5/200/300" alt="" />
                                <img src="https://picsum.photos/id/25/200/300" alt="" />
                                <img src="https://picsum.photos/id/28/200/300" alt="" />
                                <img src="https://picsum.photos/id/59/200/300" alt="" />
                                <img src="https://picsum.photos/id/64/200/300" alt="" />
                                <img src="https://picsum.photos/id/88/200/300" alt="" />
                                <img src="https://picsum.photos/id/116/200/300" alt="" />
                                <img src="https://picsum.photos/id/155/200/300" alt="" />
                                <img src="https://picsum.photos/id/169/200/300" alt="" />
                            </Slide>
                        </div>
                        <div className="gig-reviews-snippet">
                            <header className='reviews-snippet'>
                                <h2 className="section-title">Lo que a la gente le encantó de este vendedor</h2>
                                <button className="sPdE5j4 zUvc8Si co-white text-button reviews-button bg-co-green-700">Ver todas las reseñas</button>
                            </header>
                            <Slide slidesToShow={1} arrowsScroll={1}>  
                                <div className="reviews-package carousel-review-item" style={{width: "478px"}}>
                                    <div className="user-profile-image">
                                        <label className="profile-pict" htmlFor="profile_image_9108926286148" style={{width: "32px", height: "32px", fontSize: "1em"}}>
                                            <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/217716d11c605ccbb1ea858ff600078e-1462045551678450864.813797/37577F31-360B-4292-9A50-8E2B281367F7" className="profile-pict-img" alt="nikki_ryan5" loading="lazy" data-uw-rm-ima-original="nikki_ryan5" />
                                        </label>
                                    </div>
                                    <div className="details">
                                        <div className="reviewer">
                                            <h6 className="text-display-7">nikki_ryan5</h6>
                                            <div className="country">
                                                <img className="country-flag" src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="US" loading="lazy" data-uw-rm-ima-original="us" />
                                                <div className="country-name tbody-6">Estados Unidos</div>
                                            </div>
                                            <span className="inline-divider"></span>
                                            <div className="orca-rating p-l-0 ratings-header rating-desktop color-yellow tbody-6">
                                                <div className="stars">
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="orca-rating p-l-0 ratings-header rating-mobile color-yellow tbody-6">
                                                <div className="stars">
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                </div>
                                                <strong className="rating-score">5</strong>
                                            </div>
                                        </div>
                                        <p className="review-item-comment" style={{height: "48px; -webkit-line-clamp: 2"}}>5 stars here its not enough to tell how professional, smart , fast , intelligent, responsible, and thoughtful you are This world literally needs more than you to be a better world 🌎 I appreciate your time, and professional work alot 🌹😍❤️🥰 </p>
                                        <span className="summarize">
                                            <time className="text-body-2">hace 1 mes</time>
                                            <span className="separator"> | </span>
                                            <div className="translate-btn-wrapper">
                                                <div className="flex-center info-wrapper">
                                                    <span className="glAQDp5 translation-icon" aria-hidden="true" style={{width: "22px", height: "22px"}}><svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M19.2002 5.2002H15.0002C14.1002 5.2002 13.4002 5.5002 12.7002 6.0002H5.00025C3.80025 6.0002 2.60025 7.0002 2.30025 8.2002L1.00025 14.9002C0.800246 16.1002 1.60025 17.1002 2.90025 17.1002H7.70025C8.70024 17.1002 9.70024 16.7002 10.4002 15.9002H17.1002C18.3002 15.9002 19.5002 14.9002 19.7002 13.7002L21.0002 7.3002C21.2002 6.1002 20.4002 5.2002 19.2002 5.2002ZM10.3002 14.2002C10.1002 15.4002 9.00024 16.3002 7.70025 16.3002H2.90025C2.60025 16.3002 2.30025 16.2002 2.10025 16.0002C1.90025 15.8002 1.90025 15.5002 1.90025 15.2002L3.20025 8.5002C3.40025 7.7002 4.20025 7.0002 5.00025 7.0002H11.7002L10.3002 14.2002ZM17.5002 13.4002L16.6002 11.4002H14.3002L13.4002 13.4002H12.4002L15.0002 7.4002H15.9002L18.5002 13.4002H17.5002Z"></path><path d="M14.7002 10.5002H16.2002L15.4002 8.7002L14.7002 10.5002Z"></path><path d="M3.90039 10.2H8.20039C8.00039 10.7 7.50039 11.7 6.80039 12.5C6.10039 11.6 5.80039 10.6 5.80039 10.6L5.00039 10.8C5.00039 10.8 5.30039 12 6.10039 13.1C5.60039 13.5 5.00039 13.8 4.30039 13.8V14.6C5.20039 14.6 5.90039 14.2 6.60039 13.7C7.00039 14.1 7.50039 14.5 8.20039 14.7L8.60039 14C8.10039 13.8 7.70039 13.5 7.30039 13.2C8.40039 11.9 9.00039 10.3 9.00039 10.2H10.0004V9.4H7.30039V8.5H6.50039V9.4H3.90039V10.2Z"></path><path d="M12.7 18.8002C11.6 19.7002 10.5 20.3002 8.5 19.3002C10.1 22.5002 12.9 20.8002 13.8 20.1002L15.1 22.0002L16.2 17.3002L11.3 17.2002L12.7 18.8002Z"></path><path d="M10.3998 3.2C11.4998 2.3 12.5998 1.7 14.5998 2.7C12.9998 -0.5 10.1998 1.2 9.2998 1.9L7.8998 0L6.7998 4.7L11.6998 4.8L10.3998 3.2Z"></path></svg></span>
                                                </div>
                                                <button>
                                                    <p className="text-body-2">Traducir a Español</p>
                                                </button>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="reviews-package carousel-review-item">
                                    <div className="user-profile-image">
                                        <label className="profile-pict" htmlFor="profile_image_1911270754103" style={{width: "32px", height: "32px", fontSize: "1em"}}>
                                            <span className="missing-profile-image flex-center">d</span>
                                        </label>
                                    </div>
                                    <div className="details">
                                        <div className="reviewer">
                                            <h6 className="text-display-7">drpramw</h6>
                                            <div className="country">
                                                <img className="country-flag" src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="US" loading="lazy" data-uw-rm-ima-original="us" />
                                                <div className="country-name tbody-6">Estados Unidos</div>
                                            </div>
                                            <span className="inline-divider "></span>
                                            <div className="orca-rating p-l-0 ratings-header rating-desktop color-yellow tbody-6">
                                                <div className="stars">
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                                    </span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                                    </span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                                    </span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                                    </span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                                    </span>
                                                </div>
                                                <strong className="rating-score">5</strong>
                                            </div>
                                            <div className="orca-rating p-l-0 ratings-header rating-mobile color-yellow tbody-6">
                                                <div className="stars">
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                                    </span>
                                                </div>
                                                <strong className="rating-score">5</strong>
                                            </div>
                                        </div>
                                        <p className="review-item-comment" style={{height: "48px; -webkit-line-clamp: 2"}}>ai_lani was a pure delight to work with. The project was complicated, and it quickly became clear that her ability to capture the essence allowed us to streamline significantly, and produce a piece of art that clearly and more simply captured what I was trying to convey. She communicated clearly, and adapted splendidly when miscommunications occurred. I'll likely be working with her again.</p>
                                        <span className="summarize">
                                            <time className="text-body-2">hace 1 mes</time>
                                            <span className="separator"> | </span>
                                            <div className="translate-btn-wrapper">
                                                <div className="flex-center info-wrapper">
                                                    <span className="glAQDp5 translation-icon" aria-hidden="true" style={{width: "22px", height: "22px"}}><svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M19.2002 5.2002H15.0002C14.1002 5.2002 13.4002 5.5002 12.7002 6.0002H5.00025C3.80025 6.0002 2.60025 7.0002 2.30025 8.2002L1.00025 14.9002C0.800246 16.1002 1.60025 17.1002 2.90025 17.1002H7.70025C8.70024 17.1002 9.70024 16.7002 10.4002 15.9002H17.1002C18.3002 15.9002 19.5002 14.9002 19.7002 13.7002L21.0002 7.3002C21.2002 6.1002 20.4002 5.2002 19.2002 5.2002ZM10.3002 14.2002C10.1002 15.4002 9.00024 16.3002 7.70025 16.3002H2.90025C2.60025 16.3002 2.30025 16.2002 2.10025 16.0002C1.90025 15.8002 1.90025 15.5002 1.90025 15.2002L3.20025 8.5002C3.40025 7.7002 4.20025 7.0002 5.00025 7.0002H11.7002L10.3002 14.2002ZM17.5002 13.4002L16.6002 11.4002H14.3002L13.4002 13.4002H12.4002L15.0002 7.4002H15.9002L18.5002 13.4002H17.5002Z"></path><path d="M14.7002 10.5002H16.2002L15.4002 8.7002L14.7002 10.5002Z"></path><path d="M3.90039 10.2H8.20039C8.00039 10.7 7.50039 11.7 6.80039 12.5C6.10039 11.6 5.80039 10.6 5.80039 10.6L5.00039 10.8C5.00039 10.8 5.30039 12 6.10039 13.1C5.60039 13.5 5.00039 13.8 4.30039 13.8V14.6C5.20039 14.6 5.90039 14.2 6.60039 13.7C7.00039 14.1 7.50039 14.5 8.20039 14.7L8.60039 14C8.10039 13.8 7.70039 13.5 7.30039 13.2C8.40039 11.9 9.00039 10.3 9.00039 10.2H10.0004V9.4H7.30039V8.5H6.50039V9.4H3.90039V10.2Z"></path><path d="M12.7 18.8002C11.6 19.7002 10.5 20.3002 8.5 19.3002C10.1 22.5002 12.9 20.8002 13.8 20.1002L15.1 22.0002L16.2 17.3002L11.3 17.2002L12.7 18.8002Z"></path><path d="M10.3998 3.2C11.4998 2.3 12.5998 1.7 14.5998 2.7C12.9998 -0.5 10.1998 1.2 9.2998 1.9L7.8998 0L6.7998 4.7L11.6998 4.8L10.3998 3.2Z"></path></svg>
                                                    </span>
                                                </div>
                                                <button><p className="text-body-2">Traducir a Español</p></button>
                                            </div>
                                        </span>
                                    </div>

                                </div>
                                <div className="reviews-package carousel-review-item">
                                    <div className="user-profile-image">
                                        <label className="profile-pict" htmlFor="profile_image_4391877845692" style={{width: "32px", height: "32px", fontSize: "1em"}}>
                                            <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/19666a7a1f119e120347242291e6cd2d-1680019798148/7b05d72b-098c-4beb-90a5-7ad15beeae62.JPG" className="profile-pict-img" alt="shamirgenomal" loading="lazy" data-uw-rm-ima-original="shamirgenomal" />
                                        </label>
                                    </div>
                                    <div className="details">
                                        <div className="reviewer">
                                            <h6 className="text-display-7">shamirgenomal</h6>
                                            <div className="country">
                                                <img className="country-flag" src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f3.png" alt="IN" loading="lazy" data-uw-rm-ima-original="in" />
                                                <div className="country-name tbody-6">India</div>
                                            </div>
                                            <span className="inline-divider "></span>
                                            <div className="orca-rating p-l-0 ratings-header rating-desktop color-yellow tbody-6">
                                                <div className="stars">
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                                    </span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                                    </span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                                    </span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                                    </span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                </div>
                                                <strong className="rating-score">5</strong>
                                            </div>
                                            <div className="orca-rating p-l-0 ratings-header rating-mobile color-yellow tbody-6">
                                                <div className="stars">
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                                    </span>
                                                </div>
                                                <strong className="rating-score">5</strong>
                                            </div>
                                        </div>
                                        <p className="review-item-comment" style={{height: "48px; -webkit-line-clamp: 2"}}>Amazing work! Able to create wonderful and epic art from just my words and thoughts. &nbsp; My album cover has come out amazing! She is truly a league apart. She is so kind and wants to make even the smallest details come out perfect. &nbsp;5/5 on everything - output, professionalism, turnaround time and communication! </p>
                                        <span className="summarize">
                                            <time className="text-body-2">hace 1 mes</time>
                                            <span className="separator"> | </span>
                                            <div className="translate-btn-wrapper">
                                                <div className="flex-center info-wrapper">
                                                    <span className="glAQDp5 translation-icon" aria-hidden="true" style={{width: "22px", height: "22px"}}><svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M19.2002 5.2002H15.0002C14.1002 5.2002 13.4002 5.5002 12.7002 6.0002H5.00025C3.80025 6.0002 2.60025 7.0002 2.30025 8.2002L1.00025 14.9002C0.800246 16.1002 1.60025 17.1002 2.90025 17.1002H7.70025C8.70024 17.1002 9.70024 16.7002 10.4002 15.9002H17.1002C18.3002 15.9002 19.5002 14.9002 19.7002 13.7002L21.0002 7.3002C21.2002 6.1002 20.4002 5.2002 19.2002 5.2002ZM10.3002 14.2002C10.1002 15.4002 9.00024 16.3002 7.70025 16.3002H2.90025C2.60025 16.3002 2.30025 16.2002 2.10025 16.0002C1.90025 15.8002 1.90025 15.5002 1.90025 15.2002L3.20025 8.5002C3.40025 7.7002 4.20025 7.0002 5.00025 7.0002H11.7002L10.3002 14.2002ZM17.5002 13.4002L16.6002 11.4002H14.3002L13.4002 13.4002H12.4002L15.0002 7.4002H15.9002L18.5002 13.4002H17.5002Z"></path><path d="M14.7002 10.5002H16.2002L15.4002 8.7002L14.7002 10.5002Z"></path><path d="M3.90039 10.2H8.20039C8.00039 10.7 7.50039 11.7 6.80039 12.5C6.10039 11.6 5.80039 10.6 5.80039 10.6L5.00039 10.8C5.00039 10.8 5.30039 12 6.10039 13.1C5.60039 13.5 5.00039 13.8 4.30039 13.8V14.6C5.20039 14.6 5.90039 14.2 6.60039 13.7C7.00039 14.1 7.50039 14.5 8.20039 14.7L8.60039 14C8.10039 13.8 7.70039 13.5 7.30039 13.2C8.40039 11.9 9.00039 10.3 9.00039 10.2H10.0004V9.4H7.30039V8.5H6.50039V9.4H3.90039V10.2Z"></path><path d="M12.7 18.8002C11.6 19.7002 10.5 20.3002 8.5 19.3002C10.1 22.5002 12.9 20.8002 13.8 20.1002L15.1 22.0002L16.2 17.3002L11.3 17.2002L12.7 18.8002Z"></path><path d="M10.3998 3.2C11.4998 2.3 12.5998 1.7 14.5998 2.7C12.9998 -0.5 10.1998 1.2 9.2998 1.9L7.8998 0L6.7998 4.7L11.6998 4.8L10.3998 3.2Z"></path></svg></span>
                                                </div>
                                                <button><p className="text-body-2">Traducir a Español</p></button>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="reviews-package carousel-review-item">
                                    <div className="user-profile-image">
                                        <label className="profile-pict" htmlFor="profile_image_7335463345707" style={{width: "32px", height: "32px", fontSize: "1em"}}>
                                            <span className="missing-profile-image flex-center">s</span>
                                        </label>
                                    </div>
                                    <div className="details">
                                        <div className="reviewer">
                                            <h6 className="text-display-7">superiorroad</h6>
                                            <div className="country">
                                                <img className="country-flag" src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png" alt="CA" loading="lazy" data-uw-rm-ima-original="ca" />
                                                <div className="country-name tbody-6">Canadá</div>
                                            </div>
                                            <span className="inline-divider "></span>
                                            <div className="orca-rating p-l-0 ratings-header rating-desktop color-yellow tbody-6">
                                                <div className="stars">
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                                    </span>
                                                </div>
                                                <strong className="rating-score">5</strong>
                                            </div>
                                            <div className="orca-rating p-l-0 ratings-header rating-mobile color-yellow tbody-6">
                                                <div className="stars">
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                </div>
                                                <strong className="rating-score">5</strong>
                                            </div>
                                        </div>
                                        <p className="review-item-comment" style={{height: "48px; -webkit-line-clamp: 2"}}>ai_lani was very professional in their approach to the project.&nbsp; I was impressed with their understanding of my concept, and the results were great.&nbsp; I'll be putting this image into our marketing pitches and will be using ai_lani again for some personal projects as gifts to my family!  What a great gift! I finally have something unique to give for birthday presents.&nbsp; Overall experience was excellent!</p>
                                        <span className="summarize">
                                            <time className="text-body-2">Hace 2 meses</time>
                                            <span className="separator"> | </span>
                                            <div className="translate-btn-wrapper">
                                                <div className="flex-center info-wrapper">
                                                    <span className="glAQDp5 translation-icon" aria-hidden="true" style={{width: "22px", height: "22px"}}><svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M19.2002 5.2002H15.0002C14.1002 5.2002 13.4002 5.5002 12.7002 6.0002H5.00025C3.80025 6.0002 2.60025 7.0002 2.30025 8.2002L1.00025 14.9002C0.800246 16.1002 1.60025 17.1002 2.90025 17.1002H7.70025C8.70024 17.1002 9.70024 16.7002 10.4002 15.9002H17.1002C18.3002 15.9002 19.5002 14.9002 19.7002 13.7002L21.0002 7.3002C21.2002 6.1002 20.4002 5.2002 19.2002 5.2002ZM10.3002 14.2002C10.1002 15.4002 9.00024 16.3002 7.70025 16.3002H2.90025C2.60025 16.3002 2.30025 16.2002 2.10025 16.0002C1.90025 15.8002 1.90025 15.5002 1.90025 15.2002L3.20025 8.5002C3.40025 7.7002 4.20025 7.0002 5.00025 7.0002H11.7002L10.3002 14.2002ZM17.5002 13.4002L16.6002 11.4002H14.3002L13.4002 13.4002H12.4002L15.0002 7.4002H15.9002L18.5002 13.4002H17.5002Z"></path><path d="M14.7002 10.5002H16.2002L15.4002 8.7002L14.7002 10.5002Z"></path><path d="M3.90039 10.2H8.20039C8.00039 10.7 7.50039 11.7 6.80039 12.5C6.10039 11.6 5.80039 10.6 5.80039 10.6L5.00039 10.8C5.00039 10.8 5.30039 12 6.10039 13.1C5.60039 13.5 5.00039 13.8 4.30039 13.8V14.6C5.20039 14.6 5.90039 14.2 6.60039 13.7C7.00039 14.1 7.50039 14.5 8.20039 14.7L8.60039 14C8.10039 13.8 7.70039 13.5 7.30039 13.2C8.40039 11.9 9.00039 10.3 9.00039 10.2H10.0004V9.4H7.30039V8.5H6.50039V9.4H3.90039V10.2Z"></path><path d="M12.7 18.8002C11.6 19.7002 10.5 20.3002 8.5 19.3002C10.1 22.5002 12.9 20.8002 13.8 20.1002L15.1 22.0002L16.2 17.3002L11.3 17.2002L12.7 18.8002Z"></path><path d="M10.3998 3.2C11.4998 2.3 12.5998 1.7 14.5998 2.7C12.9998 -0.5 10.1998 1.2 9.2998 1.9L7.8998 0L6.7998 4.7L11.6998 4.8L10.3998 3.2Z"></path></svg></span>
                                                </div>
                                                <button><p className="text-body-2">Traducir a Español</p></button>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="reviews-package carousel-review-item ">
                                    <div className="user-profile-image">
                                        <label className="profile-pict" htmlFor="profile_image_8560097896958" style={{width: "32px", height: "32px", fontSize: "1em"}}>
                                            <span className="missing-profile-image flex-center">r</span>
                                        </label>
                                    </div>
                                    <div className="details">
                                        <div className="reviewer">
                                            <h6 className="text-display-7">rebeccameucci</h6>
                                            <div className="country">
                                                <img className="country-flag" src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1ed.png" alt="CH" loading="lazy" data-uw-rm-ima-original="ch" />
                                                <div className="country-name tbody-6">Suiza</div>
                                            </div>
                                            <span className="inline-divider"></span>
                                            <div className="orca-rating p-l-0 ratings-header rating-desktop color-yellow tbody-6">
                                                <div className="stars">
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                </div>
                                                <strong className="rating-score">5</strong>
                                            </div>
                                            <div className="orca-rating p-l-0 ratings-header rating-mobile color-yellow tbody-6">
                                                <div className="stars">
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                </div>
                                                <strong className="rating-score">5</strong>
                                            </div>
                                        </div>
                                        <p className="review-item-comment" style={{height: "48px; -webkit-line-clamp: 2"}}>Ai was so easy to work with, she answered to all my questions quickly and asked for every important detail etc.&nbsp; If you have a doubt, this is your sign to go for it ☺️ she delivered a great work of my baby, cute and all- will print it and put it in his room😍 thank you AI LANI will definitely order more, thank you for your patience and your great work</p>
                                        <span className="summarize">
                                            <time className="text-body-2">hace 1 mes</time>
                                            <span className="separator"> | </span>
                                            <div className="translate-btn-wrapper">
                                                <div className="flex-center info-wrapper">
                                                    <span className="glAQDp5 translation-icon" aria-hidden="true" style={{width: "22px", height: "22px"}}><svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M19.2002 5.2002H15.0002C14.1002 5.2002 13.4002 5.5002 12.7002 6.0002H5.00025C3.80025 6.0002 2.60025 7.0002 2.30025 8.2002L1.00025 14.9002C0.800246 16.1002 1.60025 17.1002 2.90025 17.1002H7.70025C8.70024 17.1002 9.70024 16.7002 10.4002 15.9002H17.1002C18.3002 15.9002 19.5002 14.9002 19.7002 13.7002L21.0002 7.3002C21.2002 6.1002 20.4002 5.2002 19.2002 5.2002ZM10.3002 14.2002C10.1002 15.4002 9.00024 16.3002 7.70025 16.3002H2.90025C2.60025 16.3002 2.30025 16.2002 2.10025 16.0002C1.90025 15.8002 1.90025 15.5002 1.90025 15.2002L3.20025 8.5002C3.40025 7.7002 4.20025 7.0002 5.00025 7.0002H11.7002L10.3002 14.2002ZM17.5002 13.4002L16.6002 11.4002H14.3002L13.4002 13.4002H12.4002L15.0002 7.4002H15.9002L18.5002 13.4002H17.5002Z"></path><path d="M14.7002 10.5002H16.2002L15.4002 8.7002L14.7002 10.5002Z"></path><path d="M3.90039 10.2H8.20039C8.00039 10.7 7.50039 11.7 6.80039 12.5C6.10039 11.6 5.80039 10.6 5.80039 10.6L5.00039 10.8C5.00039 10.8 5.30039 12 6.10039 13.1C5.60039 13.5 5.00039 13.8 4.30039 13.8V14.6C5.20039 14.6 5.90039 14.2 6.60039 13.7C7.00039 14.1 7.50039 14.5 8.20039 14.7L8.60039 14C8.10039 13.8 7.70039 13.5 7.30039 13.2C8.40039 11.9 9.00039 10.3 9.00039 10.2H10.0004V9.4H7.30039V8.5H6.50039V9.4H3.90039V10.2Z"></path><path d="M12.7 18.8002C11.6 19.7002 10.5 20.3002 8.5 19.3002C10.1 22.5002 12.9 20.8002 13.8 20.1002L15.1 22.0002L16.2 17.3002L11.3 17.2002L12.7 18.8002Z"></path><path d="M10.3998 3.2C11.4998 2.3 12.5998 1.7 14.5998 2.7C12.9998 -0.5 10.1998 1.2 9.2998 1.9L7.8998 0L6.7998 4.7L11.6998 4.8L10.3998 3.2Z"></path></svg></span>
                                                </div>
                                                <button><p className="text-body-2">Traducir a Español</p></button>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="reviews-package carousel-review-item ">
                                    <div className="user-profile-image">
                                        <label className="profile-pict" htmlFor="profile_image_0668119266722" style={{width: "32px", height: "32px", fontSize: "1em"}}>
                                            <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/217716d11c605ccbb1ea858ff600078e-1462045551678450864.813797/37577F31-360B-4292-9A50-8E2B281367F7" className="profile-pict-img" alt="nikki_ryan5" loading="lazy" data-uw-rm-ima-original="nikki_ryan5" />
                                        </label>
                                    </div>
                                    <div className="details">
                                        <div className="reviewer">
                                            <h6 className="text-display-7">nikki_ryan5</h6>
                                            <div className="country">
                                                <img className="country-flag" src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="US" loading="lazy" data-uw-rm-ima-original="us" />
                                                <div className="country-name tbody-6">Estados Unidos</div>
                                            </div>
                                            <span className="inline-divider "></span>
                                            <div className="orca-rating p-l-0 ratings-header rating-desktop color-yellow tbody-6">
                                                <div className="stars">
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                </div>
                                                <strong className="rating-score">5</strong>
                                            </div>
                                            <div className="orca-rating p-l-0 ratings-header rating-mobile color-yellow tbody-6">
                                                <div className="stars">
                                                    <span className="glAQDp5 orca-star" aria-hidden="true" style={{width: "15px", height: "15px"}}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                </div>
                                                <strong className="rating-score">5</strong>
                                            </div>
                                        </div>
                                        <p className="review-item-comment" style={{height: "48px; -webkit-line-clamp: 2"}}>5 stars here its not enough to tell how professional, smart, fast, intelligent, responsible, and thoughtful you are.&nbsp; This world literally needs more than you to be a better world 🌎&nbsp; I appreciate your time, and professional work alot 🌹😍❤️🥰 </p>
                                        <span className="summarize">
                                            <time className="text-body-2">hace 1 mes</time>
                                            <span className="separator"> | </span>
                                            <div className="translate-btn-wrapper">
                                                <div className="flex-center info-wrapper">
                                                    <span className="glAQDp5 translation-icon" aria-hidden="true" style={{width: "22px", height: "22px"}}><svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M19.2002 5.2002H15.0002C14.1002 5.2002 13.4002 5.5002 12.7002 6.0002H5.00025C3.80025 6.0002 2.60025 7.0002 2.30025 8.2002L1.00025 14.9002C0.800246 16.1002 1.60025 17.1002 2.90025 17.1002H7.70025C8.70024 17.1002 9.70024 16.7002 10.4002 15.9002H17.1002C18.3002 15.9002 19.5002 14.9002 19.7002 13.7002L21.0002 7.3002C21.2002 6.1002 20.4002 5.2002 19.2002 5.2002ZM10.3002 14.2002C10.1002 15.4002 9.00024 16.3002 7.70025 16.3002H2.90025C2.60025 16.3002 2.30025 16.2002 2.10025 16.0002C1.90025 15.8002 1.90025 15.5002 1.90025 15.2002L3.20025 8.5002C3.40025 7.7002 4.20025 7.0002 5.00025 7.0002H11.7002L10.3002 14.2002ZM17.5002 13.4002L16.6002 11.4002H14.3002L13.4002 13.4002H12.4002L15.0002 7.4002H15.9002L18.5002 13.4002H17.5002Z"></path><path d="M14.7002 10.5002H16.2002L15.4002 8.7002L14.7002 10.5002Z"></path><path d="M3.90039 10.2H8.20039C8.00039 10.7 7.50039 11.7 6.80039 12.5C6.10039 11.6 5.80039 10.6 5.80039 10.6L5.00039 10.8C5.00039 10.8 5.30039 12 6.10039 13.1C5.60039 13.5 5.00039 13.8 4.30039 13.8V14.6C5.20039 14.6 5.90039 14.2 6.60039 13.7C7.00039 14.1 7.50039 14.5 8.20039 14.7L8.60039 14C8.10039 13.8 7.70039 13.5 7.30039 13.2C8.40039 11.9 9.00039 10.3 9.00039 10.2H10.0004V9.4H7.30039V8.5H6.50039V9.4H3.90039V10.2Z"></path><path d="M12.7 18.8002C11.6 19.7002 10.5 20.3002 8.5 19.3002C10.1 22.5002 12.9 20.8002 13.8 20.1002L15.1 22.0002L16.2 17.3002L11.3 17.2002L12.7 18.8002Z"></path><path d="M10.3998 3.2C11.4998 2.3 12.5998 1.7 14.5998 2.7C12.9998 -0.5 10.1998 1.2 9.2998 1.9L7.8998 0L6.7998 4.7L11.6998 4.8L10.3998 3.2Z"></path></svg></span>
                                                </div>
                                                <button><p className="text-body-2">Traducir a Español</p></button>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                        <div className="gig-description with-translated-badge" id='description-section'>
                            <header className='gig-description-header'>
                                <h2 className="section-title">Acerca de este Servicio</h2>
                                <p className="translated-badge">Traducción automática</p>
                            </header>
                            <div className="description-wrapper">
                                <span style={{fontSize:"0px"}}></span>
                                <div className="description-content" data-impression-collected="true">
                                    <p><strong>Crearé 1, 3 o 7 imágenes totalmente personalizadas (según sus descripciones) usando una poderosa herramienta de IA llamada Midjourney</strong></p>
                                    <p>Puede enviarme una <strong>foto</strong>, una <strong>descripción detallada</strong> o simplemente <strong>enviarme un mensaje</strong> y podemos discutir su idea.&nbsp; Todo depende de tu imaginación + mis habilidades y con eso, las posibilidades son infinitas.&nbsp; Soy flexible y me comprometo a crear un resultado óptimo para tu proyecto.</p>
                                    <p><strong>No hay temas relacionados con la desnudez, la violencia o las drogas.</strong></p>
                                    <p><strong><u>Por favor, póngase en contacto conmigo antes de realizar un pedido*</u></strong></p>
                                
                                    <p> Creo imágenes de IA únicas con Midjourney.&nbsp; He invertido incontables horas para dominar efectivamente este software, y es por eso que soy el diseñador ideal para su proyecto.&nbsp; Ya no necesita pasar horas buscando la imagen correcta o intentar hacer un diseño desde cero.&nbsp; Con sus palabras, puedo generar una amplia variedad de estilos, temas y paletas de colores que reflejan su idea de una obra maestra perfecta. Puedes ser el artista, ¡no se necesita experiencia! Ya sea para una presentación comercial, contenido de redes sociales o un proyecto personal, mi plataforma ofrece una solución rápida y fácil para todas sus necesidades artísticas.&nbsp; Mejora tu creatividad con mis servicios.&nbsp; <em>¡Envíame un mensaje en cualquier momento!</em><strong><em></em></strong>Estoy aquí.</p>
                                </div>
                                <div className="cover"></div>
                                <button className="collapse-button">Ver más</button>
                            </div>
                            <ul className="metadata">
                                <li className="metadata-attribute"><p>Motor de IA</p>
                                    <ul>
                                        <li>Midjourney</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="aboutSellerContainer" id='seller-section'>
                            <h2 className="section-title about-the-seller"><span>Acerca del vendedor</span></h2>
                            <div className="profileSellerCard">
                                <div className="profile-info">
                                    <div className="user-profile-image">
                                        <label className="profile-pict" htmlFor="profile_image_2035966769090">
                                            <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c5323d1e3c30bbac2c31a905b5bd8cb2-1675191168940/22bca898-8c41-4832-be06-ac78f7d044a4.PNG" className="profile-pict-img" alt="ai_lani" data-uw-rm-ima-original="ai_lani" />
                                            <a href="/levels" rel="nofollow" className="user-badge-round md locale-es level-one-seller" data-uw-rm-brl="false" aria-label="es.fiverr.com" data-uw-rm-empty-ctrl=""></a>
                                        </label>
                                    </div>
                                    <div className="user-profile-label">
                                        <div className="username-line">
                                            <div className="flex flex-items-baseline">
                                                <div tabIndex="0" role="button" aria-label="Desplázate para conocer al vendedor" className="LBuVtkY tbody-4 text-bold">Ai Lani</div>
                                                <div tabIndex="0" role="button" aria-label="Desplázate para conocer al vendedor" className="LBuVtkY a2vZSDs">@ai_lani</div>
                                            </div>
                                        </div>
                                        <div className="one-liner-rating-wrapper">
                                            <p className="one-liner">I put the AI in ImAge</p>
                                            <div className="orca-rating seller-rating color-yellow tbody-6">
                                                <div className="stars">
                                                    <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                    <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                    <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                    <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                    <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                </div>
                                                <strong className="rating-score">5</strong>
                                                <span className="ratings-count">(<span className="rating-count-number">80</span>)</span>
                                            </div>
                                        </div>
                                        <button className="sPdE5j4 EFWC9E5 a7588_a co-grey-1000 btn-contact-me">Contáctame</button>
                                    </div>
                                </div>
                                <div className="stats-desc">
                                    <ul className="user-stats">
                                        <li><span>De</span> <strong>Alemania</strong></li>
                                        <li><span>Miembro desde</span> <strong>ene 2023</strong></li>
                                        <li><span>Responde aprox. en:</span> <strong>1 hora</strong></li>
                                        <li><span>Última entrega</span> <strong>aproximadamente 4 horas</strong></li>
                                        <li>
                                            <span>Idiomas</span>
                                            <div className="jEW3B9z Y_05slf languages-tooltip" title='El vendedor habla:

    Inglés  (Nativo/Bilingüe)
    Alemán  (Nativo/Bilingüe)
    Español  (Básico)'>
                                                <span className="HsyURQF">
                                                    <strong data-testid="languages-to-show" className="Y_05slf languages-tooltip" delay="120" content="[object Object]" position="top" boxclassnamename="n8k5Ydl" boxcontentclassnamename="xZqc_Ec">Inglés, Alemán, Español</strong>
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                    <article className="seller-desc">
                                        <div className="inner"><p>Hi there &amp; welcome to my shop.&nbsp; I'm ai_lani - a digital artist who creates fully customizable images based on your specific needs and vision.&nbsp; You send me the photo or description, and I will present to you a one of a kind - AI generated piece of art.&nbsp; If you have any questions, send me a message anytime :)</p></div>
                                        <button className="read-more">+ Ver más</button>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <section className="portfolio-external-wrapper">
                            <section className="portfolio-presence" data-impression-collected="true">
                                <div className="presence-header flex m-b-16">
                                    <a href="/users/ai_lani/portfolio?gig=create-custom-ai-art-using-midjourney-advanced-ai-tool&amp;origin=gig_page" className="tbody-5 m-r-8" data-uw-rm-brl="false">Mi porfolio</a>
                                    <div className="Waqjn3u" title='Estos son algunos de los 
    proyectos que hizo ai_lani para 
    que puedas comprender mejor su 
    experiencia'>
                                        <span className="flex">
                                            <span className="glAQDp5" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path fillRule="evenodd" clipRule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM6.667 6.222c0-.228.075-.59.277-.87C7.112 5.12 7.4 4.89 8 4.89c.734 0 1.116.388 1.245.777.136.41.02.867-.405 1.15-.701.468-1.218.92-1.49 1.556-.24.56-.24 1.175-.239 1.752v.098H8.89c0-.728.015-.964.095-1.15.06-.142.21-.356.842-.777a2.751 2.751 0 0 0 1.106-3.19C10.558 3.978 9.488 3.111 8 3.111c-1.179 0-2.001.511-2.5 1.203a3.37 3.37 0 0 0-.611 1.908h1.778Zm2.222 6.667V11.11H7.11v1.778H8.89Z"></path></svg></span>
                                        </span>
                                    </div>
                                    <span className="portafolio-badge">NUEVO</span>
                                </div>
                                <ul className="project-grid grid-1 m-b-24 wide-grid">
                                    <li className="project-photo photo-0">
                                        <div className="project-img hide-on-error responsive-wrapper">
                                            <img src="https://fiverr-res.cloudinary.com/t_portfolio_project_grid,q_auto,f_auto,q_auto,f_auto/attachments/project_item/attachment/f37774fccc84102dcef37b12cf2191b0-1679255124064/robotflowers-transformed.jpeg" role="presentation" data-uw-rm-ima="un" /></div>
                                        <div className="project-title-wrapper responsive-wrapper"><span className="project-title">Organic Intelligence</span></div>
                                    </li>
                                </ul>
                                <a className="portfolio-link" href="/users/ai_lani/portfolio?gig=create-custom-ai-art-using-midjourney-advanced-ai-tool&amp;origin=gig_page" data-uw-rm-brl="false">
                                    <span className="text-part m-r-8">Mira los proyectos &nbsp;(1)</span>
                                    <span className="arrow-link" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path></svg></span>
                                </a>
                            </section>
                        </section>
                        <div className="buyPackagesContainer" id='buy-packages-section'>
                            <form action="/payments" method="post">
                                <input type="hidden" name="authenticity_token" value="1683105468.bNaLdsHetWeGUqFCsY31OEzbtKNCjVxEw7RMoLrihAo=" />
                                <input type="hidden" name="quantity" value="1" />
                                <input type="hidden" name="package_id" value="1" />
                                <input type="hidden" name="gig_id" value="298676084" />
                                <input type="hidden" name="total_delivery" value="3" />
                                <input type="hidden" name="milestones_purchase" value="false" />
                                <input type="hidden" name="fiverr_choice" value="true" />
                                <input type="hidden" name="rising_talent" value="false" />
                                <input type="hidden" name="payment_funnel_source" value="gig_page" />
                                <input type="hidden" name="guest_checkout_token" value="df8f29862ec3" />
                                <div className="gig-page-packages-table">
                                    <h2 className="section-title">Comprar paquetes</h2>
                                    <table>
                                        <colgroup>
                                        <col />
                                        <col /><col /><col />
                                        </colgroup>
                                        <tbody>
                                            <tr className="package-type">
                                                <th className="package-row-label">Paquete</th>
                                                <th className="package-type-price">
                                                    <div className="price-wrapper">
                                                        <p className="price">28,71&nbsp;€</p>
                                                    </div>
                                                    <strong className="type">Básico</strong>
                                                    <strong className="title">Basic</strong>
                                                </th>
                                                <th className="package-type-price">
                                                    <div className="price-wrapper">
                                                        <p className="price">66,99&nbsp;€</p>
                                                    </div>
                                                    <strong className="type">Estándar</strong>
                                                    <strong className="title">Standard</strong>
                                                </th>
                                                <th className="package-type-price">
                                                    <div className="price-wrapper">
                                                        <p className="price">143,55&nbsp;€</p>
                                                    </div>
                                                    <strong className="type">Premium</strong>
                                                    <strong className="title">Premium</strong>
                                                </th>
                                            </tr>
                                            <tr className="description">
                                                <td className="package-row-label"></td>
                                                <td className='description-row'>One custom digital design **Please contact me before placing an order :)**</td>
                                                <td className='description-row'>Three custom digital designs **Please contact me before placing an order :)**</td>
                                                <td className='description-row'>Seven custom digital designs **Please contact me before placing an order :)**</td>
                                            </tr>
                                            <tr>
                                                <td className="package-row-label">
                                                    <div className="jEW3B9z Y_05slf">
                                                        <span className="HsyURQF">Redacción de textos</span>
                                                    </div>
                                                </td>
                                                <td className="boolean-pricing-factor">
                                                    <span className="glAQDp5 pricing-factor-check-icon included" aria-hidden="true" style={{width: "16px", height: "16px"}}><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg"><path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path></svg></span>
                                                </td>
                                                <td className="boolean-pricing-factor">
                                                    <span className="glAQDp5 pricing-factor-check-icon included" aria-hidden="true" style={{width: "16px", height: "16px"}}><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg"><path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path></svg></span>
                                                </td>
                                                <td className="boolean-pricing-factor">
                                                    <span className="glAQDp5 pricing-factor-check-icon included" aria-hidden="true" style={{width: "16px", height: "16px"}}><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg"><path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path></svg></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="package-row-label">
                                                    <div className="jEW3B9z Y_05slf">
                                                        <span className="HsyURQF">Entrega de obras de arte</span>
                                                    </div>
                                                </td>
                                                <td className="boolean-pricing-factor">
                                                    <span className="glAQDp5 pricing-factor-check-icon included" aria-hidden="true" style={{width: "16px", height: "16px"}}><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg"><path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path></svg></span>
                                                </td>
                                                <td className="boolean-pricing-factor">
                                                    <span className="glAQDp5 pricing-factor-check-icon included" aria-hidden="true" style={{width: "16px", height: "16px"}}><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg"><path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path></svg></span>
                                                </td>
                                                <td className="boolean-pricing-factor">
                                                    <span className="glAQDp5 pricing-factor-check-icon included" aria-hidden="true" style={{width: "16px", height: "16px"}}><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg"><path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path></svg></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="package-row-label">
                                                    <div className="jEW3B9z Y_05slf">
                                                        <span className="HsyURQF">Imagen mejorada</span>
                                                    </div>
                                                </td>
                                                <td className="boolean-pricing-factor">
                                                    <span className="glAQDp5 pricing-factor-check-icon" aria-hidden="true" style={{width: "16px", height: "16px"}}><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg"><path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path></svg></span>
                                                </td>
                                                <td className="boolean-pricing-factor">
                                                    <span className="glAQDp5 pricing-factor-check-icon included" aria-hidden="true" style={{width: "16px", height: "16px"}}><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg"><path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path></svg></span>
                                                </td>
                                                <td className="boolean-pricing-factor">
                                                    <span className="glAQDp5 pricing-factor-check-icon included" aria-hidden="true" style={{width: "16px", height: "16px"}}><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg"><path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path></svg></span>
                                                </td>
                                            </tr>
                                            <tr className='revisions'>
                                                <td className="package-row-label">
                                                    <div className="jEW3B9z Y_05slf">
                                                        <span className="HsyURQF">Revisiones</span>
                                                    </div>
                                                </td>
                                                <td>0</td>
                                                <td>1</td>
                                                <td>1</td>
                                            </tr>
                                            <tr className="delivery-time">
                                                <td className="package-row-label">Tiempo de entrega</td>
                                                <td>3 días</td>
                                                <td>3 días</td>
                                                <td>3 días</td>
                                            </tr>
                                            <tr className="select-package">
                                                <td className="package-row-label">Total</td>
                                                <td>
                                                    <div className="price-wrapper">
                                                        <p className="tbody-5">28,71&nbsp;€</p>
                                                    </div>
                                                    <button className="sPdE5j4 zUvc8Si co-white btn-select-package bg-co-green-700" type="button">Seleccionar</button>
                                                </td>
                                                <td>
                                                    <div className="price-wrapper">
                                                        <p className="tbody-5">66,99&nbsp;€</p>
                                                    </div>
                                                    <button className="sPdE5j4 zUvc8Si co-white btn-select-package bg-co-green-700" type="button">Seleccionar</button>
                                                </td>
                                                <td>
                                                    <div className="price-wrapper">
                                                        <p className="tbody-5">143,55&nbsp;€</p>
                                                    </div>
                                                    <button className="sPdE5j4 zUvc8Si co-white btn-select-package bg-co-green-700" type="button">Seleccionar</button>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                        <section className="personalized-content personalized-content-compare" id='recommendations-section'>
                            <header className="carousel-header">
                                <div className="titles">
                                    <div className="title">
                                        <h4><span>Recomendado para ti</span>&nbsp;</h4>
                                    </div>
                                </div>
                            </header>
                            <Slide slidesToShow={2} arrowsScroll={2}>
                                {/* *********************************************** */} 
                                <div className="gig-wrapper-impressions gig-wrapper card" data-gig-id="299303050" data-impression-collected="true">
                                    <a href="/koalafication/create-an-amazing-art-from-your-imagination-using-midjourney-ai?context_referrer=gig_page&amp;source=similar_gigs&amp;ref_ctx_id=0cd46aebc0ede21d4322b08db4a8967d&amp;context=recommendation&amp;pckg_id=1&amp;pos=3&amp;context_alg=t2g_dfm&amp;imp_id=706b1e5b-917d-4083-8755-3bcac84e7296" target="_self" className="media" title="" rel="" data-uw-rm-brl="false">
                                        <div className="slider first-slide">
                                            <div className="slides preview" style={{width: ""}}>
                                                <Carousel {...paramsCarousel}>
                                                    <div className="slide-item" style={{}}>
                                                        <img src={SliderImage01} alt="create an amazing concept art using midjourney ai" loading="lazy" data-uw-rm-ima-original="create an amazing concept art using midjourney ai" />
                                                    </div>
                                                    <div className="slide-item" style={{}}>
                                                        <img src={SliderImage02} alt="create an amazing concept art using midjourney ai" loading="lazy" data-uw-rm-ima-original="create an amazing concept art using midjourney ai" />
                                                    </div>
                                                    <div className="slide-item" style={{}}>
                                                        <img src={SliderImage03} alt="create an amazing concept art using midjourney ai" loading="lazy" data-uw-rm-ima-original="create an amazing concept art using midjourney ai" />
                                                    </div>
                                                    <div className="slide-item" style={{}}>
                                                        <img src={SliderImage04} alt="create an amazing concept art using midjourney ai" loading="lazy" data-uw-rm-ima-original="create an amazing concept art using midjourney ai" />
                                                    </div>
                                                    <div className="slide-item" style={{}}>
                                                        <img src={SliderImage05} alt="create an amazing concept art using midjourney ai" loading="lazy" data-uw-rm-ima-original="create an amazing concept art using midjourney ai" />
                                                    </div>
                                                    <div className="slide-item" style={{}}>
                                                        <img src={SliderImage06} alt="create an amazing concept art using midjourney ai" loading="lazy" data-uw-rm-ima-original="create an amazing concept art using midjourney ai" />
                                                    </div>
                                                    </Carousel>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="seller-info text-body-2">
                                        <div className="inner-wrapper">
                                            <span className="seller-image">
                                                <div className="UCQ0bV4" style={{borderRadius: "50%"}}>
                                                    <figure className="Febe2dk seller-avatar" title="koalafication" style={{fontSize: "24px", backgroundColor: "rgb(27, 137, 150)"}}>
                                                        <figcaption className="KFSQ0ji">k</figcaption>
                                                        <img className="_YszT7W" src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/9011893847add9cba5ee7f0ae7724325-1524074777315/ffd3f7db-d7c8-4184-a444-7cbdafcfbcc5.png" alt="koalafication" loading="lazy" data-uw-rm-ima-original="koalafication" />
                                                    </figure>
                                                </div>
                                            </span>
                                            <div className="seller-identifiers">
                                                <div className="seller-name-and-country">
                                                    <div className="seller-name">
                                                        <a href="/koalafication?source=gig_cards&amp;referrer_gig_slug=create-an-amazing-art-from-your-imagination-using-midjourney-ai&amp;ref_ctx_id=0cd46aebc0ede21d4322b08db4a8967d&amp;imp_id=706b1e5b-917d-4083-8755-3bcac84e7296" target="_self" className="text-semi-bold" title="" rel="nofollow noopener noreferrer" data-uw-rm-brl="false">koalafication</a>
                                                    </div>
                                                </div>
                                                <span className="level level-two-seller">
                                                    <div className="jEW3B9z Y_05slf seller-name-tooltip">
                                                        <span className="HsyURQF">Vendedor Nivel 2</span>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>
                                        <a href="/koalafication/create-an-amazing-art-from-your-imagination-using-midjourney-ai?context_referrer=gig_page&amp;source=similar_gigs&amp;ref_ctx_id=0cd46aebc0ede21d4322b08db4a8967d&amp;context=recommendation&amp;pckg_id=1&amp;pos=3&amp;context_alg=t2g_dfm&amp;imp_id=706b1e5b-917d-4083-8755-3bcac84e7296" target="_self" title="Crearé un arte conceptual asombroso usando Midjourney ai" rel="" data-uw-rm-brl="false">Crearé un arte conceptual asombroso usando Midjourney ai</a>
                                    </h3>
                                    <div className="content-info">
                                        <div className="rating-wrapper">
                                            <span className="gig-rating text-body-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>4,9<span>(56)</span></span>
                                        </div>
                                    </div>
                                    <footer>
                                        <div className="collect-package">
                                            <div className="jEW3B9z Y_05slf">
                                                <span className="HsyURQF">
                                                    <button className="iyKO0_a" delay="120" content="[object Object]" position="top" boxclassnamename="n8k5Ydl" boxcontentclassnamename="xZqc_Ec tooltip-box-content" containerclassnamename="collect-package-tooltip" aria-label="button" data-uw-rm-empty-ctrl="">
                                                        <span className="glAQDp5 WO3uerB" aria-hidden="true" style={{width: "16px", height: "16px"}}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path></svg></span>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <a href="/koalafication/create-an-amazing-art-from-your-imagination-using-midjourney-ai?context_referrer=gig_page&amp;source=similar_gigs&amp;ref_ctx_id=0cd46aebc0ede21d4322b08db4a8967d&amp;context=recommendation&amp;pckg_id=1&amp;pos=3&amp;context_alg=t2g_dfm&amp;imp_id=706b1e5b-917d-4083-8755-3bcac84e7296" target="_self" className="price line-break" title="" rel="" data-uw-rm-brl="false"><small className="text-body-3">A partir de</small><span>23<sup>95</sup>&nbsp;€</span></a>
                                    </footer>
                                </div>
                                {/* *********************************************************** */}
                                <div className="gig-wrapper-impressions gig-wrapper card" data-gig-id="98873698" data-impression-collected="true">
                                    <a href="/amhaxdesigner/design-a-feminine-cosmetic-logo-for-you?context_referrer=gig_page&amp;source=similar_gigs&amp;ref_ctx_id=0cd46aebc0ede21d4322b08db4a8967d&amp;context=recommendation&amp;pckg_id=1&amp;pos=1&amp;context_alg=t2g_dfm&amp;imp_id=fe6e251e-4f8f-47cf-bd0d-fc65c7fb1d93" target="_self" className="media" title="" rel="" data-uw-rm-brl="false">
                                        <div className="slider first-slide">
                                            <div className="slides preview" style={{}}>
                                                <Carousel {...paramsCarousel}>
                                                    <div className="slide-item" style={{}}>
                                                        <img src={SliderImage07} alt="create stunning concept art and character with midjourney ai" loading="lazy" data-uw-rm-ima-original="create stunning concept art and character with midjourney ai" />
                                                    </div>
                                                    <div className="slide-item" style={{}}>
                                                        <img src={SliderImage08} alt="create stunning concept art and character with midjourney ai" loading="lazy" data-uw-rm-ima-original="create stunning concept art and character with midjourney ai" />
                                                    </div>
                                                    <div className="slide-item" style={{}}>
                                                        <img src={SliderImage09} alt="create stunning concept art and character with midjourney ai" loading="lazy" data-uw-rm-ima-original="create stunning concept art and character with midjourney ai" />
                                                    </div>
                                                    <div className="slide-item" style={{}}>
                                                        <img src={SliderImage10} alt="create stunning concept art and character with midjourney ai" loading="lazy" data-uw-rm-ima-original="create stunning concept art and character with midjourney ai" />
                                                    </div>
                                                    <div className="slide-item" style={{}}>
                                                        <img src={SliderImage11} alt="create stunning concept art and character with midjourney ai" loading="lazy" data-uw-rm-ima-original="create stunning concept art and character with midjourney ai" />
                                                    </div>
                                                    <div className="slide-item" style={{}}>
                                                        <img src={SliderImage12} alt="create stunning concept art and character with midjourney ai" loading="lazy" data-uw-rm-ima-original="create stunning concept art and character with midjourney ai" />
                                                    </div>
                                               </Carousel>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="seller-info text-body-2">
                                        <div className="inner-wrapper">
                                            <span className="seller-image">
                                                <div className="UCQ0bV4" style={{borderRadius: "50%"}}>
                                                    <figure className="Febe2dk seller-avatar" title="amhaxdesigner" style={{fontSize: "24px", backgroundColor: "rgb(227, 118, 39)"}}>
                                                        <figcaption className="KFSQ0ji">a</figcaption>
                                                        <img className="_YszT7W" src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/2844bf9c9c31d4c6e29e8c13e694c361-1679218568039/4991a593-c630-4b59-9ccc-3beb8181ae8a.jpg" alt="amhaxdesigner" loading="lazy" data-uw-rm-ima-original="amhaxdesigner" />
                                                    </figure>
                                                </div>
                                            </span>
                                            <div className="seller-identifiers">
                                                <div className="seller-name-and-country">
                                                    <div className="seller-name">
                                                        <a href="/amhaxdesigner?source=gig_cards&amp;referrer_gig_slug=design-a-feminine-cosmetic-logo-for-you&amp;ref_ctx_id=0cd46aebc0ede21d4322b08db4a8967d&amp;imp_id=fe6e251e-4f8f-47cf-bd0d-fc65c7fb1d93" target="_self" className="text-semi-bold" title="" rel="nofollow noopener noreferrer" data-uw-rm-brl="false">amhaxdesigner</a>
                                                    </div>
                                                </div>
                                                <span className="level level-two-seller">
                                                    <div className="jEW3B9z Y_05slf seller-name-tooltip">
                                                        <span className="HsyURQF">Vendedor Nivel 2</span>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h3><a href="/amhaxdesigner/design-a-feminine-cosmetic-logo-for-you?context_referrer=gig_page&amp;source=similar_gigs&amp;ref_ctx_id=0cd46aebc0ede21d4322b08db4a8967d&amp;context=recommendation&amp;pckg_id=1&amp;pos=1&amp;context_alg=t2g_dfm&amp;imp_id=fe6e251e-4f8f-47cf-bd0d-fc65c7fb1d93" target="_self" title="Crearé arte conceptual y personajes asombrosos con Midjourney ai" rel="" data-uw-rm-brl="false">Crearé arte conceptual y personajes asombrosos con Midjourney ai</a>
                                    </h3>
                                    <div className="content-info">
                                        <div className="rating-wrapper">
                                            <span className="gig-rating text-body-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>4,9<span>(233)</span></span>
                                        </div>
                                    </div>
                                    <footer>
                                        <div className="collect-package">
                                            <div className="jEW3B9z Y_05slf">
                                                <span className="HsyURQF">
                                                    <button className="iyKO0_a" delay="120" content="[object Object]" position="top" boxclassnamename="n8k5Ydl" boxcontentclassnamename="xZqc_Ec tooltip-box-content" containerclassnamename="collect-package-tooltip" aria-label="button" data-uw-rm-empty-ctrl="">
                                                        <span className="glAQDp5 WO3uerB" aria-hidden="true" style={{width: "16ppx", height: "16px"}}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path></svg></span>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <a href="/amhaxdesigner/design-a-feminine-cosmetic-logo-for-you?context_referrer=gig_page&amp;source=similar_gigs&amp;ref_ctx_id=0cd46aebc0ede21d4322b08db4a8967d&amp;context=recommendation&amp;pckg_id=1&amp;pos=1&amp;context_alg=t2g_dfm&amp;imp_id=fe6e251e-4f8f-47cf-bd0d-fc65c7fb1d93" target="_self" className="price line-break" title="" rel="" data-uw-rm-brl="false"><small className="text-body-3">A partir de</small><span>14<sup>37</sup>&nbsp;€</span></a>
                                    </footer>
                                </div>
                                {/* **************************************************** */}
                                <div className="gig-wrapper-impressions gig-wrapper card" data-gig-id="289758028" data-impression-collected="true">
                                    <a href="/goldone2012/create-art-characters-and-illustrations-using-ai-generated-images?context_referrer=gig_page&amp;source=similar_gigs&amp;ref_ctx_id=0cd46aebc0ede21d4322b08db4a8967d&amp;context=recommendation&amp;pckg_id=1&amp;pos=2&amp;context_alg=t2g_dfm&amp;seller_online=true&amp;imp_id=8187652e-c5d6-4ea9-b9be-20781c63d06c" target="_self" className="media" title="" rel="" data-uw-rm-brl="false">
                                        <div className="slider first-slide">
                                            <div className="slides preview" style={{}}>
                                                <Carousel {...paramsCarousel}>
                                                    <div className="slide-item">
                                                        <img src={SliderImage13} alt="create fast awesome characters and art using midjourney ai" loading="lazy" data-uw-rm-ima-original="create fast awesome characters and art using midjourney ai" />
                                                    </div>
                                                    <div className="slide-item">
                                                        <img src={SliderImage14} alt="create fast awesome characters and art using midjourney ai" loading="lazy" data-uw-rm-ima-original="create fast awesome characters and art using midjourney ai" />
                                                    </div>
                                                    <div className="slide-item">
                                                        <img src={SliderImage15} alt="create fast awesome characters and art using midjourney ai" loading="lazy" data-uw-rm-ima-original="create fast awesome characters and art using midjourney ai" />
                                                    </div>
                                                    <div className="slide-item">
                                                        <img src={SliderImage16} alt="create fast awesome characters and art using midjourney ai" loading="lazy" data-uw-rm-ima-original="create fast awesome characters and art using midjourney ai" />
                                                    </div>
                                                    <div className="slide-item">
                                                        <img src={SliderImage17} alt="create fast awesome characters and art using midjourney ai" loading="lazy" data-uw-rm-ima-original="create fast awesome characters and art using midjourney ai" />
                                                    </div>
                                                    <div className="slide-item">
                                                        <img src={SliderImage18} alt="create fast awesome characters and art using midjourney ai" loading="lazy" data-uw-rm-ima-original="create fast awesome characters and art using midjourney ai" />
                                                    </div>
                                                </Carousel>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="seller-info text-body-2">
                                        <div className="inner-wrapper">
                                            <span className="seller-image">
                                                <span className="is-online"></span>
                                                <div className="UCQ0bV4" style={{borderRadius: "50%"}}>
                                                    <figure className="Febe2dk seller-avatar" title="goldone2012" style={{fontSize: "24px", backgroundColor: "rgb(196, 51, 51)"}}>
                                                        <figcaption className="KFSQ0ji">g</figcaption>
                                                        <img className="_YszT7W" src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c1609c155888364a14ca768ccf0a8725-1381927981674205884.782265/0CDF2C4C-1BEF-4A38-AF76-FDAB716FE418" alt="goldone2012" loading="lazy" data-uw-rm-ima-original="goldone2012" />
                                                    </figure>
                                                </div>
                                            </span>
                                            <div className="seller-identifiers">
                                                <div className="seller-name-and-country">
                                                    <div className="seller-name">
                                                        <a href="/goldone2012?source=gig_cards&amp;referrer_gig_slug=create-art-characters-and-illustrations-using-ai-generated-images&amp;ref_ctx_id=0cd46aebc0ede21d4322b08db4a8967d&amp;imp_id=8187652e-c5d6-4ea9-b9be-20781c63d06c" target="_self" className="text-semi-bold" title="" rel="nofollow noopener noreferrer" data-uw-rm-brl="false">goldone2012</a>
                                                    </div>
                                                </div>
                                                <span className="level level-two-seller">
                                                    <div className="jEW3B9z Y_05slf seller-name-tooltip">
                                                        <span className="HsyURQF">Vendedor Nivel 2</span>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>
                                        <a href="/goldone2012/create-art-characters-and-illustrations-using-ai-generated-images?context_referrer=gig_page&amp;source=similar_gigs&amp;ref_ctx_id=0cd46aebc0ede21d4322b08db4a8967d&amp;context=recommendation&amp;pckg_id=1&amp;pos=2&amp;context_alg=t2g_dfm&amp;seller_online=true&amp;imp_id=8187652e-c5d6-4ea9-b9be-20781c63d06c" target="_self" title="Crearé personajes y arte increíbles y rápidos usando Midjourney ai" rel="" data-uw-rm-brl="false">Crearé personajes y arte increíbles y rápidos usando Midjourney ai</a>
                                    </h3>
                                    <div className="content-info">
                                        <div className="rating-wrapper">
                                            <span className="gig-rating text-body-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>5,0<span>(101)</span></span>
                                        </div>
                                    </div>
                                    <footer>
                                        <div className="collect-package">
                                            <div className="jEW3B9z Y_05slf">
                                                <span className="HsyURQF">
                                                    <button className="iyKO0_a" delay="120" content="[object Object]" position="top" boxclassnamename="n8k5Ydl" boxcontentclassnamename="xZqc_Ec tooltip-box-content" containerclassnamename="collect-package-tooltip" aria-label="button" data-uw-rm-empty-ctrl=""><span className="glAQDp5 WO3uerB" aria-hidden="true" style={{width: "16px", height: "16px"}}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path></svg></span>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <a href="/goldone2012/create-art-characters-and-illustrations-using-ai-generated-images?context_referrer=gig_page&amp;source=similar_gigs&amp;ref_ctx_id=0cd46aebc0ede21d4322b08db4a8967d&amp;context=recommendation&amp;pckg_id=1&amp;pos=2&amp;context_alg=t2g_dfm&amp;seller_online=true&amp;imp_id=8187652e-c5d6-4ea9-b9be-20781c63d06c" target="_self" className="price line-break" title="" rel="" data-uw-rm-brl="false"><small className="text-body-3">A partir de</small><span>28<sup>73</sup>&nbsp;€</span></a>
                                    </footer>
                                </div>
                                {/* **************************************************** */}
                                <div className="gig-wrapper-impressions gig-wrapper card" data-gig-id="285202554" data-impression-collected="true">
                                    <a href="/hatchan/create-a-steampunk-character-design-for-you-using-midjourney-ai?context_referrer=gig_page&amp;source=similar_gigs&amp;ref_ctx_id=257da80ea966bd13b31285c57f0d3ee5&amp;context=recommendation&amp;pckg_id=1&amp;pos=10&amp;context_alg=t2g_dfm&amp;imp_id=2f6c1c19-6661-4c0a-ade0-a201ed5c6a00" target="_self" className="media" title="" rel="" data-uw-rm-brl="false">
                                        <div className="slider">
                                            <div className="slides" style={{}}>
                                                <Carousel {...paramsCarousel}>

                                                    <div className="slide-item" style={{}}>
                                                        <img src={SliderImage19} alt="create ai art with midjourney for you" loading="lazy" data-uw-rm-ima-original="create ai art with midjourney for you" />
                                                    </div>
                                                    <div className="slide-item" style={{}}>
                                                        <img src={SliderImage20} alt="create ai art with midjourney for you" loading="lazy" data-uw-rm-ima-original="create ai art with midjourney for you" />
                                                    </div>
                                                    <div className="slide-item" style={{}}>
                                                        <img src={SliderImage21} alt="create ai art with midjourney for you"  loading="lazy" data-uw-rm-ima-original="create ai art with midjourney for you" />
                                                    </div>
                                                    <div className="slide-item" style={{}}>
                                                        <img src={SliderImage22} alt="create ai art with midjourney for you" loading="lazy" data-uw-rm-ima-original="create ai art with midjourney for you" />
                                                    </div>
                                                    <div className="slide-item" style={{}}>
                                                        <img src={SliderImage23} alt="create ai art with midjourney for you" loading="lazy" data-uw-rm-ima-original="create ai art with midjourney for you" />
                                                    </div>
                                                    <div className="slide-item" style={{}}>
                                                        <img src={SliderImage24} alt="create ai art with midjourney for you" loading="lazy" data-uw-rm-ima-original="create ai art with midjourney for you" />
                                                    </div>
                                                    <div className="slide-item" style={{}}>
                                                        <img src={SliderImage25} alt="create ai art with midjourney for you" loading="lazy" data-uw-rm-ima-original="create ai art with midjourney for you" />
                                                    </div>
                                                    <div className="slide-item" style={{}}>
                                                        <img src={SliderImage26} alt="create ai art with midjourney for you" loading="lazy" data-uw-rm-ima-original="create ai art with midjourney for you" />
                                                    </div>
                                                </Carousel>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="seller-info text-body-2">
                                        <div className="inner-wrapper">
                                            <span className="seller-image">
                                                <div className="UCQ0bV4" style={{borderRadius: "50%"}}>
                                                    <figure className="Febe2dk seller-avatar" title="hatchan" style={{fontSize: "24px", backgroundColor: "rgb(155, 105, 40)"}}>
                                                        <figcaption className="KFSQ0ji">h</figcaption>
                                                        <img className="_YszT7W" src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/1597754/original/36721_1327895957682_51544_n.jpg" alt="hatchan" loading="lazy" data-uw-rm-ima-original="hatchan" />
                                                    </figure>
                                                </div>
                                            </span>
                                            <div className="seller-identifiers">
                                                <div className="seller-name-and-country">
                                                    <div className="seller-name">
                                                        <a href="/hatchan?source=gig_cards&amp;referrer_gig_slug=create-a-steampunk-character-design-for-you-using-midjourney-ai&amp;ref_ctx_id=257da80ea966bd13b31285c57f0d3ee5&amp;imp_id=2f6c1c19-6661-4c0a-ade0-a201ed5c6a00" target="_self" className="text-semi-bold" title="" rel="nofollow noopener noreferrer" data-uw-rm-brl="false">hatchan</a>
                                                    </div>
                                                </div>
                                                <span className="level level-two-seller">
                                                    <div className="jEW3B9z Y_05slf seller-name-tooltip">
                                                        <span className="HsyURQF">Vendedor Nivel 2</span>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h3><a href="/hatchan/create-a-steampunk-character-design-for-you-using-midjourney-ai?context_referrer=gig_page&amp;source=similar_gigs&amp;ref_ctx_id=257da80ea966bd13b31285c57f0d3ee5&amp;context=recommendation&amp;pckg_id=1&amp;pos=10&amp;context_alg=t2g_dfm&amp;imp_id=2f6c1c19-6661-4c0a-ade0-a201ed5c6a00" target="_self" title="Crearé ai art con Midjourney para ti." rel="" data-uw-rm-brl="false">Crearé ai art con Midjourney para ti.</a>
                                    </h3>
                                    <div className="content-info">
                                        <div className="rating-wrapper">
                                            <span className="gig-rating text-body-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>5,0<span>(96)</span>
                                            </span>
                                        </div>
                                    </div>
                                    <footer>
                                        <div className="collect-package">
                                            <div className="jEW3B9z Y_05slf">
                                                <span className="HsyURQF">
                                                    <button className="iyKO0_a" delay="120" content="[object Object]" position="top" boxclassnamename="n8k5Ydl" boxcontentclassnamename="xZqc_Ec tooltip-box-content" containerclassnamename="collect-package-tooltip" aria-label="button" data-uw-rm-empty-ctrl="">
                                                        <span className="glAQDp5 WO3uerB" aria-hidden="true" style={{width: "16px", height: "16px"}}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path></svg></span>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <a href="/hatchan/create-a-steampunk-character-design-for-you-using-midjourney-ai?context_referrer=gig_page&amp;source=similar_gigs&amp;ref_ctx_id=257da80ea966bd13b31285c57f0d3ee5&amp;context=recommendation&amp;pckg_id=1&amp;pos=10&amp;context_alg=t2g_dfm&amp;imp_id=2f6c1c19-6661-4c0a-ade0-a201ed5c6a00" target="_self" className="price line-break" title="" rel="" data-uw-rm-brl="false"><small className="text-body-3">A partir de</small><span>28<sup>73</sup>&nbsp;€</span></a>
                                    </footer>
                                </div>
                            </Slide>
                        </section>
                        <div className="gig-page-reviews desktop-view" id='reviews-section'>
                            <div className="gig-page-reviews-title">Reseñas</div>
                            <div className="reviews-package">
                                <div className="reviews-header breakdown-header">
                                    <div className="details">
                                        <h2 className="text-display-7">
                                            <span className="vUmzpwS">
                                                <span><span>76 </span>comentarios sobre este Servicio</span>
                                                <div className="orca-rating color-yellow tbody-6">
                                                    <div className="stars">
                                                        <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span><span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span><span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span><span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span><span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                                        </span>
                                                    </div>
                                                    <strong className="rating-score">5</strong>
                                                </div>
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                                <div className="breakdown-wrapper grid-12">
                                    <div className="col-12-xs col-6-sm">
                                        <table className="stars-counters">
                                            <tbody>
                                                <tr className="">
                                                    <td><span className="stars-filter-wrapper"><button className="sPdE5j4 XofzkZ_ co-white stars-filter bg-co-blue-700" data-impression-collected="true">5 estrellas</button></span></td>
                                                    <td className="progress-bar-container"><div className="OpyESwE star-progress-bar"><div className="dGYpMTQ"><span className="qLG_wJ7 star-progress-shape" style={{width:"100%"}}></span></div></div></td>
                                                    <td className="star-num">(76)</td>
                                                </tr>
                                                <tr className="no-rating">
                                                    <td><span className="stars-filter-wrapper"><button className="sPdE5j4 EFWC9E5 a7588_a co-grey-500 stars-filter bLW6XzH" disabled="" data-impression-collected="true">4 estrellas</button></span></td>
                                                    <td className="progress-bar-container"><div className="OpyESwE star-progress-bar"><div className="dGYpMTQ"><span className="qLG_wJ7 star-progress-shape" style={{width:"0%"}}></span></div></div></td>
                                                    <td className="star-num">(0)</td>
                                                </tr>
                                                <tr className="no-rating">
                                                    <td><span className="stars-filter-wrapper"><button className="sPdE5j4 EFWC9E5 a7588_a co-grey-500 stars-filter bLW6XzH" disabled="" data-impression-collected="true">3 estrellas</button></span></td>
                                                    <td className="progress-bar-container"><div className="OpyESwE star-progress-bar"><div className="dGYpMTQ"><span className="qLG_wJ7 star-progress-shape" style={{width:"0%"}}></span></div></div></td>
                                                    <td className="star-num">(0)</td>
                                                </tr>
                                                <tr className="no-rating">
                                                    <td><span className="stars-filter-wrapper"><button className="sPdE5j4 EFWC9E5 a7588_a co-grey-500 stars-filter bLW6XzH" disabled="" data-impression-collected="true">2 estrellas</button></span></td>
                                                    <td className="progress-bar-container"><div className="OpyESwE star-progress-bar"><div className="dGYpMTQ"><span className="qLG_wJ7 star-progress-shape" style={{width:"0%"}}></span></div></div></td>
                                                    <td className="star-num">(0)</td>
                                                </tr>
                                                <tr className="no-rating">
                                                    <td><span className="stars-filter-wrapper"><button className="sPdE5j4 EFWC9E5 a7588_a co-grey-500 stars-filter bLW6XzH" disabled="" data-impression-collected="true">1 estrella</button></span></td>
                                                    <td className="progress-bar-container"><div className="OpyESwE star-progress-bar"><div className="dGYpMTQ"><span className="qLG_wJ7 star-progress-shape" style={{width:"0%"}}></span></div></div></td>
                                                    <td className="star-num">(0)</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-12-xs col-6-sm">
                                        <div className="ranking">
                                            <h6 className="text-display-7">Desglose de calificaciones</h6>
                                            <ul>
                                                <li>Nivel de comunicación del Vendedor<span><div className="orca-rating color-yellow tbody-6"><div className="stars"><span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span></div><b className="rating-score">5</b></div></span></li>
                                                <li>Recomendar a un amigo<span><div className="orca-rating color-yellow tbody-6"><div className="stars"><span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span></div><b className="rating-score">5</b></div></span></li>
                                                <li>Servicio según lo descrito<span><div className="orca-rating color-yellow tbody-6"><div className="stars"><span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span></div><b className="rating-score">5</b></div></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* ************************************************** */}
                                <div className="reviews-wrap">
                                    <ul className="review-list">
                                        <span className="review-item-component-wrapper">
                                            <li className="review-item-component review-item" data-impression-collected="true">
                                                <div className="review-header-container">
                                                    <div className="flex flex-items-center">
                                                        <div className="user-profile-image m-r-16 profile-img desktop-only">
                                                            <label className="profile-pict" style={{width:"48px",height:"48px",fontSize:"1em"}} htmlFor="profile_image_4396144511271">
                                                                <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/217716d11c605ccbb1ea858ff600078e-1462045551678450864.813797/37577F31-360B-4292-9A50-8E2B281367F7" className="profile-pict-img tbody-6 custom-profile-image" alt="nikki_ryan5" loading="lazy" data-uw-rm-ima-original="nikki_ryan5" />
                                                            </label>
                                                        </div>
                                                        <div className="user-profile-flag">
                                                            <div className="user-info-flag">
                                                                <div className="user-profile-image m-r-16 profile-img mobile-web-only">
                                                                    <label className="profile-pict" style={{width:"48px",height:"48px",fontSize:"1em"}} htmlFor="profile_image_0736388611271">
                                                                        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/217716d11c605ccbb1ea858ff600078e-1462045551678450864.813797/37577F31-360B-4292-9A50-8E2B281367F7" className="profile-pict-img tbody-6 custom-profile-image" alt="nikki_ryan5" loading="lazy" data-uw-rm-ima-original="nikki_ryan5" />
                                                                    </label>
                                                                </div>
                                                                <div className="reviewer-details">
                                                                    <span className="tbody-5 co-grey-1100 username"><b>nikki_ryan5</b></span>
                                                                    
                                                                </div>
                                                                <div className="reviewer-sub-details flex">
                                                                    <div className="country">
                                                                        <img className="country-flag" src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="US" loading="lazy" data-uw-rm-ima-original="us" />
                                                                        <div className="country-name tbody-6">Estados Unidos</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-details">
                                                    <div className="flex m-t-20">
                                                        <div className="orca-rating color-yellow tbody-6">
                                                            <div className="stars">
                                                                <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd"d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                                                </span>
                                                                <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                                                </span><span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                                                </span><span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                                                </span><span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                                                </span>
                                                            </div>
                                                            <b className="rating-score">5</b>
                                                        </div>
                                                        <span className="inline-divider "></span>
                                                        <time className="text-body-2">hace 1 mes</time>
                                                    </div>
                                                    <div className="review-description m-b-0">
                                                        <p>5 stars here its not enough to tell how professional, smart , fast , intelligent, responsible, and thoughtful you are This world literally needs more than you to be a better world 🌎 I appreciate your time, and professional work alot 🌹😍❤️🥰 </p>
                                                    </div>
                                                    <div className="review-footer">
                                                        <div className="translate-btn-footer">
                                                            <div className="translate-btn-wrapper">
                                                                <div className="machine-translation-package machine_translation-package machine-translation-button">
                                                                    <div className="lean-toggled-translation-button">
                                                                        <div className="flex-center info-wrapper">
                                                                            <span className="glAQDp5 translation-icon" style={{width:"22px",height:"22px"}} aria-hidden="true"><svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M19.2002 5.2002H15.0002C14.1002 5.2002 13.4002 5.5002 12.7002 6.0002H5.00025C3.80025 6.0002 2.60025 7.0002 2.30025 8.2002L1.00025 14.9002C0.800246 16.1002 1.60025 17.1002 2.90025 17.1002H7.70025C8.70024 17.1002 9.70024 16.7002 10.4002 15.9002H17.1002C18.3002 15.9002 19.5002 14.9002 19.7002 13.7002L21.0002 7.3002C21.2002 6.1002 20.4002 5.2002 19.2002 5.2002ZM10.3002 14.2002C10.1002 15.4002 9.00024 16.3002 7.70025 16.3002H2.90025C2.60025 16.3002 2.30025 16.2002 2.10025 16.0002C1.90025 15.8002 1.90025 15.5002 1.90025 15.2002L3.20025 8.5002C3.40025 7.7002 4.20025 7.0002 5.00025 7.0002H11.7002L10.3002 14.2002ZM17.5002 13.4002L16.6002 11.4002H14.3002L13.4002 13.4002H12.4002L15.0002 7.4002H15.9002L18.5002 13.4002H17.5002Z"></path><path d="M14.7002 10.5002H16.2002L15.4002 8.7002L14.7002 10.5002Z"></path><path d="M3.90039 10.2H8.20039C8.00039 10.7 7.50039 11.7 6.80039 12.5C6.10039 11.6 5.80039 10.6 5.80039 10.6L5.00039 10.8C5.00039 10.8 5.30039 12 6.10039 13.1C5.60039 13.5 5.00039 13.8 4.30039 13.8V14.6C5.20039 14.6 5.90039 14.2 6.60039 13.7C7.00039 14.1 7.50039 14.5 8.20039 14.7L8.60039 14C8.10039 13.8 7.70039 13.5 7.30039 13.2C8.40039 11.9 9.00039 10.3 9.00039 10.2H10.0004V9.4H7.30039V8.5H6.50039V9.4H3.90039V10.2Z"></path><path d="M12.7 18.8002C11.6 19.7002 10.5 20.3002 8.5 19.3002C10.1 22.5002 12.9 20.8002 13.8 20.1002L15.1 22.0002L16.2 17.3002L11.3 17.2002L12.7 18.8002Z"></path><path d="M10.3998 3.2C11.4998 2.3 12.5998 1.7 14.5998 2.7C12.9998 -0.5 10.1998 1.2 9.2998 1.9L7.8998 0L6.7998 4.7L11.6998 4.8L10.3998 3.2Z"></path></svg>
                                                                            </span>
                                                                        </div>
                                                                        <button>
                                                                            <p className="text-body-2">Traducir a Español</p>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="worksample-footer">
                                                            <div className="preview-img-desktop">
                                                                <img alt="Imagen de muestra de trabajo" data-src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_smartwm/t_delivery_small/v1/attachments/delivery/asset/bfa79cfee0afad32f1e57775abd45571-1678442022/happybirthday.png" className="lazy-image img-thumbnail lazyloaded" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_smartwm/t_delivery_small/v1/attachments/delivery/asset/bfa79cfee0afad32f1e57775abd45571-1678442022/happybirthday.png" data-uw-rm-ima-original="imagen de muestra de trabajo" />
                                                                <div className="big-img">
                                                                    <img alt="Imagen grande de muestra de trabajo" data-src="https://fiverr-res.cloudinary.com/image/upload/c_limit,f_auto,q_auto,t_smartwm,w_500/v1/attachments/delivery/asset/bfa79cfee0afad32f1e57775abd45571-1678442022/happybirthday.png" className="lazy-image lazyloaded" src="https://fiverr-res.cloudinary.com/image/upload/c_limit,f_auto,q_auto,t_smartwm,w_500/v1/attachments/delivery/asset/bfa79cfee0afad32f1e57775abd45571-1678442022/happybirthday.png" data-uw-rm-ima-original="imagen grande de muestra de trabajo" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="helpful-footer">
                                                            <div className="helpful-thumbs">
                                                                <div className="tbody-6 helpful-text m-r-12">¿Útil?</div>
                                                                <span className="flex thumb-icons-wrapper">
                                                                    <span className="m-r-12">
                                                                        <div className="helpful-thumb text-body-2">
                                                                            <span className="glAQDp5 thumbs-icon ok-hand" style={{width:"14px",height:"14px"}} aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11.89 14.75H1C0.59 14.75 0.25 14.41 0.25 14V8C0.25 7.59 0.59 7.25 1 7.25H3.46L6.05 0.72C6.16 0.43 6.44 0.25 6.75 0.25H7.67C8.59 0.25 9.34 0.98 9.34 1.87V5.45H13.17C14 5.45 14.78 5.84 15.27 6.48C15.73 7.1 15.87 7.87 15.66 8.6L14.39 12.93C14.08 13.99 13.06 14.74 11.9 14.74L11.89 14.75ZM4.75 13.25H11.89C12.38 13.25 12.81 12.95 12.94 12.52L14.21 8.19C14.32 7.81 14.16 7.52 14.06 7.39C13.85 7.12 13.53 6.96 13.16 6.96H8.58C8.17 6.96 7.83 6.62 7.83 6.21V1.87C7.83 1.81 7.76 1.75 7.66 1.75H7.25L4.74 8.08V13.25H4.75ZM1.75 13.25H3.25V8.75H1.75V13.25V13.25Z"></path></svg>
                                                                            </span>
                                                                            <span className="thumb-title ok-title">Sí</span>
                                                                        </div>
                                                                    </span>
                                                                    <div className="helpful-thumb text-body-2">
                                                                        <span className="glAQDp5 thumbs-icon ko-hand" style={{width:"14px",height:"14px"}} aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.25533 14.75H8.33533C7.41533 14.75 6.66533 14.03 6.66533 13.13L6.66533 9.55H2.83533C2.00533 9.55 1.22533 9.16 0.735326 8.52C0.275326 7.9 0.135326 7.13 0.345326 6.4L1.62533 2.06C1.93533 1 2.95533 0.25 4.11533 0.25L15.0053 0.25C15.4153 0.25 15.7553 0.59 15.7553 1V7C15.7553 7.41 15.4153 7.75 15.0053 7.75H12.5453L9.95533 14.28C9.84533 14.57 9.56533 14.75 9.25533 14.75ZM4.11533 1.75C3.62533 1.75 3.19533 2.05 3.06533 2.48L1.79533 6.81C1.68533 7.19 1.84533 7.48 1.94533 7.61C2.15533 7.88 2.47533 8.04 2.84533 8.04H7.42533C7.83533 8.04 8.17533 8.38 8.17533 8.79L8.17533 13.12C8.17533 13.17 8.24533 13.24 8.34533 13.24H8.75533L11.2653 6.91V1.75L4.11533 1.75ZM12.7553 6.25H14.2553V1.75L12.7553 1.75V6.25Z"></path></svg>
                                                                        </span>
                                                                        <span className="thumb-title ko-title">No</span>
                                                                    </div>
                                                                </span>
                                                                <span className="flex m-l-12"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </span>
                                        {/* ************************************************ */}
                                        <span className="review-item-component-wrapper">
                                            <li className="review-item-component review-item" data-impression-collected="true">
                                                <div className="review-header-container">
                                                    <div className="flex flex-items-center">
                                                        <div className="user-profile-image m-r-16 profile-img desktop-only">
                                                            <label className="profile-pict" style={{width:"48px",height:"48px",fontSize:"1em"}} htmlFor="profile_image_0286463311272">
                                                                <span className="missing-profile-image flex-center tbody-6 custom-profile-image">d</span>
                                                            </label>
                                                        </div>
                                                        <div className="user-profile-flag">
                                                            <div className="user-info-flag">
                                                                <div className="user-profile-image m-r-16 profile-img mobile-web-only">
                                                                    <label className="profile-pict" style={{width:"48px",height:"48px",fontSize:"1em"}} htmlFor="profile_image_5513277111272">
                                                                        <span className="missing-profile-image flex-center tbody-6 custom-profile-image">d</span>
                                                                    </label>
                                                                </div>
                                                                <div className="reviewer-details"><span className="tbody-5 co-grey-1100 username"><b>drpramw</b></span>
                                                                    <section><span></span></section>
                                                                </div>
                                                                <div className="reviewer-sub-details flex">
                                                                    <div className="country">
                                                                        <img className="country-flag" src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="US" loading="lazy" data-uw-rm-ima-original="us" />
                                                                        <div className="country-name tbody-6">Estados Unidos</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-details">
                                                    <div className="flex m-t-20">
                                                        <div className="orca-rating color-yellow tbody-6">
                                                            <div className="stars">
                                                                <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                                <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                                <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                                <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                                <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                                                </span>
                                                            </div>
                                                            <b className="rating-score">5</b>
                                                        </div>
                                                        <span className="inline-divider "></span>
                                                        <time className="text-body-2">Hace 2 meses</time>
                                                    </div>
                                                    <div className="review-description m-b-0">
                                                        <p>ai_lani was a pure delight to work with. The project was complicated, and it quickly became clear that her ability to capture the essence allowed us to streamline significantly, and produce a piece of art that clearly and more simply captured what I was trying to convey. She communicated clearly, and adapted splendidly when miscommunications occurred. I'll likely be working with her again.
                                                            <span className="expand-description-wrapper" style={{display: "none"}}>
                                                                <span className="expand-button">
                                                                    <button className="sPdE5j4 zUvc8Si co-white expand-description text-button bg-co-green-700" data-impression-collected="true">
                                                                        <span className="text-normal"><u>Ver más</u></span>
                                                                    </button>
                                                                </span>
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="review-footer">
                                                        <div className="translate-btn-footer">
                                                            <div className="translate-btn-wrapper">
                                                                <div className="machine-translation-package machine_translation-package machine-translation-button">
                                                                    <div className="lean-toggled-translation-button">
                                                                        <div className="flex-center info-wrapper">
                                                                            <span className="glAQDp5 translation-icon" style={{width:"22px",height:"22px"}} aria-hidden="true"><svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M19.2002 5.2002H15.0002C14.1002 5.2002 13.4002 5.5002 12.7002 6.0002H5.00025C3.80025 6.0002 2.60025 7.0002 2.30025 8.2002L1.00025 14.9002C0.800246 16.1002 1.60025 17.1002 2.90025 17.1002H7.70025C8.70024 17.1002 9.70024 16.7002 10.4002 15.9002H17.1002C18.3002 15.9002 19.5002 14.9002 19.7002 13.7002L21.0002 7.3002C21.2002 6.1002 20.4002 5.2002 19.2002 5.2002ZM10.3002 14.2002C10.1002 15.4002 9.00024 16.3002 7.70025 16.3002H2.90025C2.60025 16.3002 2.30025 16.2002 2.10025 16.0002C1.90025 15.8002 1.90025 15.5002 1.90025 15.2002L3.20025 8.5002C3.40025 7.7002 4.20025 7.0002 5.00025 7.0002H11.7002L10.3002 14.2002ZM17.5002 13.4002L16.6002 11.4002H14.3002L13.4002 13.4002H12.4002L15.0002 7.4002H15.9002L18.5002 13.4002H17.5002Z"></path><path d="M14.7002 10.5002H16.2002L15.4002 8.7002L14.7002 10.5002Z"></path><path d="M3.90039 10.2H8.20039C8.00039 10.7 7.50039 11.7 6.80039 12.5C6.10039 11.6 5.80039 10.6 5.80039 10.6L5.00039 10.8C5.00039 10.8 5.30039 12 6.10039 13.1C5.60039 13.5 5.00039 13.8 4.30039 13.8V14.6C5.20039 14.6 5.90039 14.2 6.60039 13.7C7.00039 14.1 7.50039 14.5 8.20039 14.7L8.60039 14C8.10039 13.8 7.70039 13.5 7.30039 13.2C8.40039 11.9 9.00039 10.3 9.00039 10.2H10.0004V9.4H7.30039V8.5H6.50039V9.4H3.90039V10.2Z"></path><path d="M12.7 18.8002C11.6 19.7002 10.5 20.3002 8.5 19.3002C10.1 22.5002 12.9 20.8002 13.8 20.1002L15.1 22.0002L16.2 17.3002L11.3 17.2002L12.7 18.8002Z"></path><path d="M10.3998 3.2C11.4998 2.3 12.5998 1.7 14.5998 2.7C12.9998 -0.5 10.1998 1.2 9.2998 1.9L7.8998 0L6.7998 4.7L11.6998 4.8L10.3998 3.2Z"></path></svg></span>
                                                                        </div>
                                                                        <button>
                                                                            <p className="text-body-2">Traducir a Español</p>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="helpful-footer">
                                                            <div className="helpful-thumbs">
                                                                <div className="tbody-6 helpful-text m-r-12">¿Útil?</div>
                                                                <span className="flex thumb-icons-wrapper">
                                                                    <span className="m-r-12">
                                                                        <div className="helpful-thumb text-body-2">
                                                                            <span className="glAQDp5 thumbs-icon ok-hand" style={{width:"14px",height:"14px"}} aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11.89 14.75H1C0.59 14.75 0.25 14.41 0.25 14V8C0.25 7.59 0.59 7.25 1 7.25H3.46L6.05 0.72C6.16 0.43 6.44 0.25 6.75 0.25H7.67C8.59 0.25 9.34 0.98 9.34 1.87V5.45H13.17C14 5.45 14.78 5.84 15.27 6.48C15.73 7.1 15.87 7.87 15.66 8.6L14.39 12.93C14.08 13.99 13.06 14.74 11.9 14.74L11.89 14.75ZM4.75 13.25H11.89C12.38 13.25 12.81 12.95 12.94 12.52L14.21 8.19C14.32 7.81 14.16 7.52 14.06 7.39C13.85 7.12 13.53 6.96 13.16 6.96H8.58C8.17 6.96 7.83 6.62 7.83 6.21V1.87C7.83 1.81 7.76 1.75 7.66 1.75H7.25L4.74 8.08V13.25H4.75ZM1.75 13.25H3.25V8.75H1.75V13.25V13.25Z"></path></svg>
                                                                            </span>
                                                                            <span className="thumb-title ok-tilte">Sí</span>
                                                                        </div>
                                                                    </span>
                                                                    <div className="helpful-thumb text-body-2">
                                                                        <span className="glAQDp5 thumbs-icon ko-hand" style={{width:"14px",height:"14px"}} aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.25533 14.75H8.33533C7.41533 14.75 6.66533 14.03 6.66533 13.13L6.66533 9.55H2.83533C2.00533 9.55 1.22533 9.16 0.735326 8.52C0.275326 7.9 0.135326 7.13 0.345326 6.4L1.62533 2.06C1.93533 1 2.95533 0.25 4.11533 0.25L15.0053 0.25C15.4153 0.25 15.7553 0.59 15.7553 1V7C15.7553 7.41 15.4153 7.75 15.0053 7.75H12.5453L9.95533 14.28C9.84533 14.57 9.56533 14.75 9.25533 14.75ZM4.11533 1.75C3.62533 1.75 3.19533 2.05 3.06533 2.48L1.79533 6.81C1.68533 7.19 1.84533 7.48 1.94533 7.61C2.15533 7.88 2.47533 8.04 2.84533 8.04H7.42533C7.83533 8.04 8.17533 8.38 8.17533 8.79L8.17533 13.12C8.17533 13.17 8.24533 13.24 8.34533 13.24H8.75533L11.2653 6.91V1.75L4.11533 1.75ZM12.7553 6.25H14.2553V1.75L12.7553 1.75V6.25Z"></path></svg></span>
                                                                        <span className="thumb-title ko-title">No</span>
                                                                    </div>
                                                                </span>
                                                                <span className="flex m-l-12"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </span>
                                        {/* ************************************************ */}
                                        <span className="review-item-component-wrapper">
                                            <li className="review-item-component review-item" data-impression-collected="true">
                                                <div className="review-header-container">
                                                    <div className="flex flex-items-center">
                                                        <div className="user-profile-image m-r-16 profile-img desktop-only">
                                                            <label className="profile-pict" style={{width:"48px",height:"48px",fontSize:"1em"}} htmlFor="profile_image_9851169311274">
                                                                <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/19666a7a1f119e120347242291e6cd2d-1680019798148/7b05d72b-098c-4beb-90a5-7ad15beeae62.JPG" className="profile-pict-img tbody-6 custom-profile-image" alt="shamirgenomal" loading="lazy" data-uw-rm-ima-original="shamirgenomal" />
                                                            </label>
                                                        </div>
                                                        <div className="user-profile-flag">
                                                            <div className="user-info-flag">
                                                                <div className="user-profile-image m-r-16 profile-img mobile-web-only">
                                                                    <label className="profile-pict" style={{width:"48px",height:"48px",fontSize:"1em"}} htmlFor="profile_image_9659445711274">
                                                                        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/19666a7a1f119e120347242291e6cd2d-1680019798148/7b05d72b-098c-4beb-90a5-7ad15beeae62.JPG" className="profile-pict-img tbody-6 custom-profile-image" alt="shamirgenomal" loading="lazy" data-uw-rm-ima-original="shamirgenomal" />
                                                                    </label>
                                                                </div>
                                                                <div className="reviewer-details">
                                                                    <span className="tbody-5 co-grey-1100 username"><b>shamirgenomal</b></span>
                                                                    <section><span></span></section>
                                                                </div>
                                                                <div className="reviewer-sub-details flex">
                                                                    <div className="country">
                                                                        <img className="country-flag" src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f3.png" alt="IN" loading="lazy" data-uw-rm-ima-original="in" />
                                                                        <div className="country-name tbody-6">India</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-details">
                                                    <div className="flex m-t-20">
                                                        <div className="orca-rating color-yellow tbody-6">
                                                            <div className="stars">
                                                                <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                                <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                                <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                                <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                                <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                                                </span>
                                                            </div>
                                                            <b className="rating-score">5</b>
                                                        </div>
                                                        <span className="inline-divider "></span>
                                                        <time className="text-body-2">hace 1 mes</time>
                                                    </div>
                                                    <div className="review-description m-b-0">
                                                        <p>Amazing work! Able to create wonderful and epic art from just my words and thoughts. My album cover has come out amazing! She is truly a league apart. She is so kind and wants to make even the smallest details come out perfect. 5/5 on everything - output, professionalism, turnaround time and communication!
                                                            <span className="expand-description-wrapper" style={{display:'none'}}>
                                                                <span className="expand-button">
                                                                    <button className="sPdE5j4 zUvc8Si co-white expand-description text-button bg-co-green-700" data-impression-collected="true">
                                                                        <span className="text-normal"><u>Ver más</u></span>
                                                                    </button>
                                                                </span>
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="review-footer">
                                                        <div className="translate-btn-footer">
                                                            <div className="translate-btn-wrapper">
                                                                <div className="machine-translation-package machine_translation-package machine-translation-button">
                                                                    <div className="lean-toggled-translation-button">
                                                                        <div className="flex-center info-wrapper">
                                                                            <span className="glAQDp5 translation-icon" style={{width:"22px",height:"22px"}} aria-hidden="true"><svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M19.2002 5.2002H15.0002C14.1002 5.2002 13.4002 5.5002 12.7002 6.0002H5.00025C3.80025 6.0002 2.60025 7.0002 2.30025 8.2002L1.00025 14.9002C0.800246 16.1002 1.60025 17.1002 2.90025 17.1002H7.70025C8.70024 17.1002 9.70024 16.7002 10.4002 15.9002H17.1002C18.3002 15.9002 19.5002 14.9002 19.7002 13.7002L21.0002 7.3002C21.2002 6.1002 20.4002 5.2002 19.2002 5.2002ZM10.3002 14.2002C10.1002 15.4002 9.00024 16.3002 7.70025 16.3002H2.90025C2.60025 16.3002 2.30025 16.2002 2.10025 16.0002C1.90025 15.8002 1.90025 15.5002 1.90025 15.2002L3.20025 8.5002C3.40025 7.7002 4.20025 7.0002 5.00025 7.0002H11.7002L10.3002 14.2002ZM17.5002 13.4002L16.6002 11.4002H14.3002L13.4002 13.4002H12.4002L15.0002 7.4002H15.9002L18.5002 13.4002H17.5002Z"></path><path d="M14.7002 10.5002H16.2002L15.4002 8.7002L14.7002 10.5002Z"></path><path d="M3.90039 10.2H8.20039C8.00039 10.7 7.50039 11.7 6.80039 12.5C6.10039 11.6 5.80039 10.6 5.80039 10.6L5.00039 10.8C5.00039 10.8 5.30039 12 6.10039 13.1C5.60039 13.5 5.00039 13.8 4.30039 13.8V14.6C5.20039 14.6 5.90039 14.2 6.60039 13.7C7.00039 14.1 7.50039 14.5 8.20039 14.7L8.60039 14C8.10039 13.8 7.70039 13.5 7.30039 13.2C8.40039 11.9 9.00039 10.3 9.00039 10.2H10.0004V9.4H7.30039V8.5H6.50039V9.4H3.90039V10.2Z"></path><path d="M12.7 18.8002C11.6 19.7002 10.5 20.3002 8.5 19.3002C10.1 22.5002 12.9 20.8002 13.8 20.1002L15.1 22.0002L16.2 17.3002L11.3 17.2002L12.7 18.8002Z"></path><path d="M10.3998 3.2C11.4998 2.3 12.5998 1.7 14.5998 2.7C12.9998 -0.5 10.1998 1.2 9.2998 1.9L7.8998 0L6.7998 4.7L11.6998 4.8L10.3998 3.2Z"></path></svg>
                                                                            </span>
                                                                        </div>
                                                                        <button>
                                                                            <p className="text-body-2">Traducir a Español</p>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="helpful-footer">
                                                            <div className="helpful-thumbs">
                                                                <div className="tbody-6 helpful-text m-r-12">¿Útil?</div>
                                                                <span className="flex thumb-icons-wrapper">
                                                                    <span className="m-r-12">
                                                                        <div className="helpful-thumb text-body-2">
                                                                            <span className="glAQDp5 thumbs-icon ok-hand" style={{width:"14px",height:"14px"}} aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11.89 14.75H1C0.59 14.75 0.25 14.41 0.25 14V8C0.25 7.59 0.59 7.25 1 7.25H3.46L6.05 0.72C6.16 0.43 6.44 0.25 6.75 0.25H7.67C8.59 0.25 9.34 0.98 9.34 1.87V5.45H13.17C14 5.45 14.78 5.84 15.27 6.48C15.73 7.1 15.87 7.87 15.66 8.6L14.39 12.93C14.08 13.99 13.06 14.74 11.9 14.74L11.89 14.75ZM4.75 13.25H11.89C12.38 13.25 12.81 12.95 12.94 12.52L14.21 8.19C14.32 7.81 14.16 7.52 14.06 7.39C13.85 7.12 13.53 6.96 13.16 6.96H8.58C8.17 6.96 7.83 6.62 7.83 6.21V1.87C7.83 1.81 7.76 1.75 7.66 1.75H7.25L4.74 8.08V13.25H4.75ZM1.75 13.25H3.25V8.75H1.75V13.25V13.25Z"></path></svg>
                                                                            </span>
                                                                            <span className="thumb-title ok-title">Sí</span>
                                                                        </div>
                                                                    </span>
                                                                    <div className="helpful-thumb text-body-2">
                                                                        <span className="glAQDp5 thumbs-icon ko-hand" style={{width:"14px",height:"14px"}} aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.25533 14.75H8.33533C7.41533 14.75 6.66533 14.03 6.66533 13.13L6.66533 9.55H2.83533C2.00533 9.55 1.22533 9.16 0.735326 8.52C0.275326 7.9 0.135326 7.13 0.345326 6.4L1.62533 2.06C1.93533 1 2.95533 0.25 4.11533 0.25L15.0053 0.25C15.4153 0.25 15.7553 0.59 15.7553 1V7C15.7553 7.41 15.4153 7.75 15.0053 7.75H12.5453L9.95533 14.28C9.84533 14.57 9.56533 14.75 9.25533 14.75ZM4.11533 1.75C3.62533 1.75 3.19533 2.05 3.06533 2.48L1.79533 6.81C1.68533 7.19 1.84533 7.48 1.94533 7.61C2.15533 7.88 2.47533 8.04 2.84533 8.04H7.42533C7.83533 8.04 8.17533 8.38 8.17533 8.79L8.17533 13.12C8.17533 13.17 8.24533 13.24 8.34533 13.24H8.75533L11.2653 6.91V1.75L4.11533 1.75ZM12.7553 6.25H14.2553V1.75L12.7553 1.75V6.25Z"></path></svg></span>
                                                                        <span className="thumb-title ko-title">No</span>
                                                                    </div>
                                                                </span>
                                                                <span className="flex m-l-12"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </span>
                                        {/* ************************************************ */}
                                        <span className="review-item-component-wrapper">
                                            <li className="review-item-component review-item" data-impression-collected="true">
                                                <div className="review-header-container">
                                                    <div className="flex flex-items-center">
                                                        <div className="user-profile-image m-r-16 profile-img desktop-only">
                                                            <label className="profile-pict" style={{width:"48px",height:"48px",fontSize:"1em"}} htmlFor="profile_image_7892118611275">
                                                                <span className="missing-profile-image flex-center tbody-6 custom-profile-image">s</span>
                                                            </label>
                                                        </div>
                                                        <div className="user-profile-flag">
                                                            <div className="user-info-flag">
                                                                <div className="user-profile-image m-r-16 profile-img mobile-web-only">
                                                                    <label className="profile-pict" style={{width:"48px",height:"48px",fontSize:"1em"}} htmlFor="profile_image_3468018711275">
                                                                        <span className="missing-profile-image flex-center tbody-6 custom-profile-image">s</span>
                                                                    </label>
                                                                </div>
                                                                <div className="reviewer-details">
                                                                    <span className="tbody-5 co-grey-1100 username"><b>superiorroad</b></span>
                                                                    <section><span></span></section>
                                                                </div>
                                                                <div className="reviewer-sub-details flex">
                                                                    <div className="country">
                                                                        <img className="country-flag" src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png" alt="CA" loading="lazy" data-uw-rm-ima-original="ca" />
                                                                        <div className="country-name tbody-6">Canadá</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-details">
                                                    <div className="flex m-t-20">
                                                        <div className="orca-rating color-yellow tbody-6">
                                                            <div className="stars">
                                                                <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                                <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                                <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                                <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                                <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                            </div>
                                                            <b className="rating-score">5</b>
                                                        </div>
                                                        <span className="inline-divider "></span>
                                                        <time className="text-body-2">Hace 2 meses</time>
                                                    </div>
                                                    <div className="review-description m-b-0">
                                                        <p>ai_lani was very professional in their approach to the project. I was impressed with their understanding of my concept, and the results were great. I'll be putting this image into our marketing pitches and will be using ai_lani again for some personal projects as gifts to my family! What a great gift! I finally have something unique to give for birthday presents. Overall experience was excellent!
                                                            <span className="expand-description-wrapper" style={{display:'none'}}>
                                                                <span className="expand-button">
                                                                    <button className="sPdE5j4 zUvc8Si co-white expand-description text-button bg-co-green-700" data-impression-collected="true">
                                                                        <span className="text-normal"><u>Ver más</u></span>
                                                                    </button>
                                                                </span>
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="review-footer">
                                                        <div className="translate-btn-footer">
                                                            <div className="translate-btn-wrapper">
                                                                <div className="machine-translation-package machine_translation-package machine-translation-button">
                                                                    <div className="lean-toggled-translation-button">
                                                                        <div className="flex-center info-wrapper">
                                                                            <span className="glAQDp5 translation-icon" style={{width:"22px",height:"22px"}} aria-hidden="true"><svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M19.2002 5.2002H15.0002C14.1002 5.2002 13.4002 5.5002 12.7002 6.0002H5.00025C3.80025 6.0002 2.60025 7.0002 2.30025 8.2002L1.00025 14.9002C0.800246 16.1002 1.60025 17.1002 2.90025 17.1002H7.70025C8.70024 17.1002 9.70024 16.7002 10.4002 15.9002H17.1002C18.3002 15.9002 19.5002 14.9002 19.7002 13.7002L21.0002 7.3002C21.2002 6.1002 20.4002 5.2002 19.2002 5.2002ZM10.3002 14.2002C10.1002 15.4002 9.00024 16.3002 7.70025 16.3002H2.90025C2.60025 16.3002 2.30025 16.2002 2.10025 16.0002C1.90025 15.8002 1.90025 15.5002 1.90025 15.2002L3.20025 8.5002C3.40025 7.7002 4.20025 7.0002 5.00025 7.0002H11.7002L10.3002 14.2002ZM17.5002 13.4002L16.6002 11.4002H14.3002L13.4002 13.4002H12.4002L15.0002 7.4002H15.9002L18.5002 13.4002H17.5002Z"></path><path d="M14.7002 10.5002H16.2002L15.4002 8.7002L14.7002 10.5002Z"></path><path d="M3.90039 10.2H8.20039C8.00039 10.7 7.50039 11.7 6.80039 12.5C6.10039 11.6 5.80039 10.6 5.80039 10.6L5.00039 10.8C5.00039 10.8 5.30039 12 6.10039 13.1C5.60039 13.5 5.00039 13.8 4.30039 13.8V14.6C5.20039 14.6 5.90039 14.2 6.60039 13.7C7.00039 14.1 7.50039 14.5 8.20039 14.7L8.60039 14C8.10039 13.8 7.70039 13.5 7.30039 13.2C8.40039 11.9 9.00039 10.3 9.00039 10.2H10.0004V9.4H7.30039V8.5H6.50039V9.4H3.90039V10.2Z"></path><path d="M12.7 18.8002C11.6 19.7002 10.5 20.3002 8.5 19.3002C10.1 22.5002 12.9 20.8002 13.8 20.1002L15.1 22.0002L16.2 17.3002L11.3 17.2002L12.7 18.8002Z"></path><path d="M10.3998 3.2C11.4998 2.3 12.5998 1.7 14.5998 2.7C12.9998 -0.5 10.1998 1.2 9.2998 1.9L7.8998 0L6.7998 4.7L11.6998 4.8L10.3998 3.2Z"></path></svg></span>
                                                                        </div>
                                                                        <button>
                                                                            <p className="text-body-2">Traducir a Español</p>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="worksample-footer">
                                                            <div className="preview-img-desktop">
                                                                <img alt="Imagen de muestra de trabajo" data-src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_smartwm/t_delivery_small/v1/attachments/delivery/asset/48d303cb05b0507354facbb95eb60e04-1675376088/superiorroadfinal.png" className="lazy-image img-thumbnail ls-is-cached lazyloaded" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_smartwm/t_delivery_small/v1/attachments/delivery/asset/48d303cb05b0507354facbb95eb60e04-1675376088/superiorroadfinal.png" data-uw-rm-ima-original="imagen de muestra de trabajo" />
                                                                <div className="big-img">
                                                                    <img alt="Imagen grande de muestra de trabajo" data-src="https://fiverr-res.cloudinary.com/image/upload/c_limit,f_auto,q_auto,t_smartwm,w_500/v1/attachments/delivery/asset/48d303cb05b0507354facbb95eb60e04-1675376088/superiorroadfinal.png" className="lazy-image ls-is-cached lazyloaded" src="https://fiverr-res.cloudinary.com/image/upload/c_limit,f_auto,q_auto,t_smartwm,w_500/v1/attachments/delivery/asset/48d303cb05b0507354facbb95eb60e04-1675376088/superiorroadfinal.png" data-uw-rm-ima-original="imagen grande de muestra de trabajo" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="helpful-footer">
                                                            <div className="helpful-thumbs">
                                                                <div className="tbody-6 helpful-text m-r-12">¿Útil?</div>
                                                                <span className="flex thumb-icons-wrapper">
                                                                    <span className="m-r-12">
                                                                        <div className="helpful-thumb text-body-2">
                                                                            <span className="glAQDp5 thumbs-icon ok-hand" style={{width:"14px",height:"14px"}} aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11.89 14.75H1C0.59 14.75 0.25 14.41 0.25 14V8C0.25 7.59 0.59 7.25 1 7.25H3.46L6.05 0.72C6.16 0.43 6.44 0.25 6.75 0.25H7.67C8.59 0.25 9.34 0.98 9.34 1.87V5.45H13.17C14 5.45 14.78 5.84 15.27 6.48C15.73 7.1 15.87 7.87 15.66 8.6L14.39 12.93C14.08 13.99 13.06 14.74 11.9 14.74L11.89 14.75ZM4.75 13.25H11.89C12.38 13.25 12.81 12.95 12.94 12.52L14.21 8.19C14.32 7.81 14.16 7.52 14.06 7.39C13.85 7.12 13.53 6.96 13.16 6.96H8.58C8.17 6.96 7.83 6.62 7.83 6.21V1.87C7.83 1.81 7.76 1.75 7.66 1.75H7.25L4.74 8.08V13.25H4.75ZM1.75 13.25H3.25V8.75H1.75V13.25V13.25Z"></path></svg></span>
                                                                            <span className="thumb-title ok-title">Sí</span>
                                                                        </div>
                                                                    </span>
                                                                    <div className="helpful-thumb text-body-2">
                                                                        <span className="glAQDp5 thumbs-icon ko-hand" style={{width:"14px",height:"14px"}} aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.25533 14.75H8.33533C7.41533 14.75 6.66533 14.03 6.66533 13.13L6.66533 9.55H2.83533C2.00533 9.55 1.22533 9.16 0.735326 8.52C0.275326 7.9 0.135326 7.13 0.345326 6.4L1.62533 2.06C1.93533 1 2.95533 0.25 4.11533 0.25L15.0053 0.25C15.4153 0.25 15.7553 0.59 15.7553 1V7C15.7553 7.41 15.4153 7.75 15.0053 7.75H12.5453L9.95533 14.28C9.84533 14.57 9.56533 14.75 9.25533 14.75ZM4.11533 1.75C3.62533 1.75 3.19533 2.05 3.06533 2.48L1.79533 6.81C1.68533 7.19 1.84533 7.48 1.94533 7.61C2.15533 7.88 2.47533 8.04 2.84533 8.04H7.42533C7.83533 8.04 8.17533 8.38 8.17533 8.79L8.17533 13.12C8.17533 13.17 8.24533 13.24 8.34533 13.24H8.75533L11.2653 6.91V1.75L4.11533 1.75ZM12.7553 6.25H14.2553V1.75L12.7553 1.75V6.25Z"></path></svg></span>
                                                                        <span className="thumb-title ko-title">No</span>
                                                                    </div>
                                                                </span>
                                                                <span className="flex m-l-12"></span>
                                                            </div>
                                                        </div>
                                                        <div className="review_seller_container">
                                                            <span className="review_seller_comment_is_shown-wrapper">
                                                                <div className="review_seller_comment_is_shown seller-response-container" data-impression-collected="true"> 
                                                                <div className="flex flex-items-center">
                                                                    <div className="user-profile-image">
                                                                        <label className="profile-pict" style={{width:"32px",height:"32px",fontSize:"1em"}} htmlFor="profile_image_1881156411276">
                                                                            <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/c5323d1e3c30bbac2c31a905b5bd8cb2-1675191168940/22bca898-8c41-4832-be06-ac78f7d044a4.PNG" className="profile-pict-img custom-profile-image" alt="ai_lani" loading="lazy" data-uw-rm-ima-original="ai_lani" />
                                                                        </label>
                                                                    </div>
                                                                    <span className="tbody-5 m-l-12 co-text-darker text-bold">Respuesta del Vendedor</span>
                                                                </div>
                                                                    <div className="seller-response-info">
                                                                        <div className="review-description m-b-0">
                                                                            <p>Thank you very much! </p>
                                                                        </div>
                                                                        <div className="translation-button">
                                                                            <div className="translate-btn-wrapper">
                                                                                <div className="machine-translation-package machine_translation-package machine-translation-button">
                                                                                    <div className="lean-toggled-translation-button">
                                                                                        <div className="flex-center info-wrapper">
                                                                                            <span className="glAQDp5 translation-icon" style={{width:"22px",height:"22px"}} aria-hidden="true"><svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M19.2002 5.2002H15.0002C14.1002 5.2002 13.4002 5.5002 12.7002 6.0002H5.00025C3.80025 6.0002 2.60025 7.0002 2.30025 8.2002L1.00025 14.9002C0.800246 16.1002 1.60025 17.1002 2.90025 17.1002H7.70025C8.70024 17.1002 9.70024 16.7002 10.4002 15.9002H17.1002C18.3002 15.9002 19.5002 14.9002 19.7002 13.7002L21.0002 7.3002C21.2002 6.1002 20.4002 5.2002 19.2002 5.2002ZM10.3002 14.2002C10.1002 15.4002 9.00024 16.3002 7.70025 16.3002H2.90025C2.60025 16.3002 2.30025 16.2002 2.10025 16.0002C1.90025 15.8002 1.90025 15.5002 1.90025 15.2002L3.20025 8.5002C3.40025 7.7002 4.20025 7.0002 5.00025 7.0002H11.7002L10.3002 14.2002ZM17.5002 13.4002L16.6002 11.4002H14.3002L13.4002 13.4002H12.4002L15.0002 7.4002H15.9002L18.5002 13.4002H17.5002Z"></path><path d="M14.7002 10.5002H16.2002L15.4002 8.7002L14.7002 10.5002Z"></path><path d="M3.90039 10.2H8.20039C8.00039 10.7 7.50039 11.7 6.80039 12.5C6.10039 11.6 5.80039 10.6 5.80039 10.6L5.00039 10.8C5.00039 10.8 5.30039 12 6.10039 13.1C5.60039 13.5 5.00039 13.8 4.30039 13.8V14.6C5.20039 14.6 5.90039 14.2 6.60039 13.7C7.00039 14.1 7.50039 14.5 8.20039 14.7L8.60039 14C8.10039 13.8 7.70039 13.5 7.30039 13.2C8.40039 11.9 9.00039 10.3 9.00039 10.2H10.0004V9.4H7.30039V8.5H6.50039V9.4H3.90039V10.2Z"></path><path d="M12.7 18.8002C11.6 19.7002 10.5 20.3002 8.5 19.3002C10.1 22.5002 12.9 20.8002 13.8 20.1002L15.1 22.0002L16.2 17.3002L11.3 17.2002L12.7 18.8002Z"></path><path d="M10.3998 3.2C11.4998 2.3 12.5998 1.7 14.5998 2.7C12.9998 -0.5 10.1998 1.2 9.2998 1.9L7.8998 0L6.7998 4.7L11.6998 4.8L10.3998 3.2Z"></path></svg></span>
                                                                                        </div>
                                                                                        <button>
                                                                                            <p className="text-body-2">Traducir a Español</p>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </span>
                                        {/* ************************************************ */}
                                        <span className="review-item-component-wrapper">
                                            <li className="review-item-component review-item" data-impression-collected="true">
                                                <div className="review-header-container">
                                                    <div className="flex flex-items-center">
                                                        <div className="user-profile-image m-r-16 profile-img desktop-only">
                                                            <label className="profile-pict" style={{width:"48px",height:"48px",fontSize:"1em"}} htmlFor="profile_image_3980669611277">
                                                                <span className="missing-profile-image flex-center tbody-6 custom-profile-image">r</span>
                                                            </label>
                                                        </div>
                                                        <div className="user-profile-flag">
                                                            <div className="user-info-flag">
                                                                <div className="user-profile-image m-r-16 profile-img mobile-web-only">
                                                                    <label className="profile-pict" style={{width:"48px",height:"48px",fontSize:"1em"}} htmlFor="profile_image_1354465911277">
                                                                        <span className="missing-profile-image flex-center tbody-6 custom-profile-image">r</span>
                                                                    </label>
                                                                </div>
                                                                <div className="reviewer-details">
                                                                    <span className="tbody-5 co-grey-1100 username"><b>rebeccameucci</b></span>
                                                                    <section><span></span></section>
                                                                </div>
                                                                <div className="reviewer-sub-details flex">
                                                                    <div className="country">
                                                                        <img className="country-flag" src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1ed.png" alt="CH" loading="lazy" data-uw-rm-ima-original="ch" /> 
                                                                        <div className="country-name tbody-6">Suiza</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-details">
                                                    <div className="flex m-t-20">
                                                        <div className="orca-rating color-yellow tbody-6">
                                                            <div className="stars">
                                                                <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                                <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                                <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                                <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                                <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                            </div>
                                                            <b className="rating-score">5</b>
                                                        </div>
                                                        <span className="inline-divider "></span>
                                                        <time className="text-body-2">hace 1 mes</time>
                                                    </div>
                                                    <div className="review-description m-b-0">
                                                        <p>Ai was so easy to work with, she answered to all my questions quickly and asked for every important detail etc. If you have a doubt, this is your sign to go for it ☺️ she delivered a great work of my baby, cute and all- will print it and put it in his room😍 thank you AI LANI will definitely order more, thank you for your patience and your great work.
                                                            <span className="expand-description-wrapper" style={{display:'none'}}>
                                                                <span className="expand-button">
                                                                    <button className="sPdE5j4 zUvc8Si co-white expand-description text-button bg-co-green-700" data-impression-collected="true">
                                                                        <span className="text-normal"><u>Ver más</u>
                                                                        </span>
                                                                    </button>
                                                                </span>
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="review-footer">
                                                        <div className="translate-btn-footer">
                                                            <div className="translate-btn-wrapper">
                                                                <div className="machine-translation-package machine_translation-package machine-translation-button">
                                                                    <div className="lean-toggled-translation-button">
                                                                        <div className="flex-center info-wrapper">
                                                                            <span className="glAQDp5 translation-icon" style={{width:"22px",height:"22px"}} aria-hidden="true"><svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M19.2002 5.2002H15.0002C14.1002 5.2002 13.4002 5.5002 12.7002 6.0002H5.00025C3.80025 6.0002 2.60025 7.0002 2.30025 8.2002L1.00025 14.9002C0.800246 16.1002 1.60025 17.1002 2.90025 17.1002H7.70025C8.70024 17.1002 9.70024 16.7002 10.4002 15.9002H17.1002C18.3002 15.9002 19.5002 14.9002 19.7002 13.7002L21.0002 7.3002C21.2002 6.1002 20.4002 5.2002 19.2002 5.2002ZM10.3002 14.2002C10.1002 15.4002 9.00024 16.3002 7.70025 16.3002H2.90025C2.60025 16.3002 2.30025 16.2002 2.10025 16.0002C1.90025 15.8002 1.90025 15.5002 1.90025 15.2002L3.20025 8.5002C3.40025 7.7002 4.20025 7.0002 5.00025 7.0002H11.7002L10.3002 14.2002ZM17.5002 13.4002L16.6002 11.4002H14.3002L13.4002 13.4002H12.4002L15.0002 7.4002H15.9002L18.5002 13.4002H17.5002Z"></path><path d="M14.7002 10.5002H16.2002L15.4002 8.7002L14.7002 10.5002Z"></path><path d="M3.90039 10.2H8.20039C8.00039 10.7 7.50039 11.7 6.80039 12.5C6.10039 11.6 5.80039 10.6 5.80039 10.6L5.00039 10.8C5.00039 10.8 5.30039 12 6.10039 13.1C5.60039 13.5 5.00039 13.8 4.30039 13.8V14.6C5.20039 14.6 5.90039 14.2 6.60039 13.7C7.00039 14.1 7.50039 14.5 8.20039 14.7L8.60039 14C8.10039 13.8 7.70039 13.5 7.30039 13.2C8.40039 11.9 9.00039 10.3 9.00039 10.2H10.0004V9.4H7.30039V8.5H6.50039V9.4H3.90039V10.2Z"></path><path d="M12.7 18.8002C11.6 19.7002 10.5 20.3002 8.5 19.3002C10.1 22.5002 12.9 20.8002 13.8 20.1002L15.1 22.0002L16.2 17.3002L11.3 17.2002L12.7 18.8002Z"></path><path d="M10.3998 3.2C11.4998 2.3 12.5998 1.7 14.5998 2.7C12.9998 -0.5 10.1998 1.2 9.2998 1.9L7.8998 0L6.7998 4.7L11.6998 4.8L10.3998 3.2Z"></path></svg></span>
                                                                        </div>
                                                                        <button>
                                                                            <p className="text-body-2">Traducir a Español</p>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="worksample-footer">
                                                            <div className="preview-img-desktop">
                                                                <img alt="Imagen de muestra de trabajo" data-src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_smartwm/t_delivery_small/v1/attachments/delivery/asset/87534c2525213e768799809a5ce1a8b6-1677339647/teddy.png" className="lazy-image img-thumbnail ls-is-cached lazyloaded" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_smartwm/t_delivery_small/v1/attachments/delivery/asset/87534c2525213e768799809a5ce1a8b6-1677339647/teddy.png" data-uw-rm-ima-original="imagen de muestra de trabajo" />
                                                                <div className="big-img">
                                                                    <img alt="Imagen grande de muestra de trabajo" data-src="https://fiverr-res.cloudinary.com/image/upload/c_limit,f_auto,q_auto,t_smartwm,w_500/v1/attachments/delivery/asset/87534c2525213e768799809a5ce1a8b6-1677339647/teddy.png" className="lazy-image ls-is-cached lazyloaded" src="https://fiverr-res.cloudinary.com/image/upload/c_limit,f_auto,q_auto,t_smartwm,w_500/v1/attachments/delivery/asset/87534c2525213e768799809a5ce1a8b6-1677339647/teddy.png" data-uw-rm-ima-original="imagen grande de muestra de trabajo" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="helpful-footer">
                                                            <div className="helpful-thumbs">
                                                                <div className="tbody-6 helpful-text m-r-12">¿Útil?</div>
                                                                <span className="flex thumb-icons-wrapper">
                                                                    <span className="m-r-12">
                                                                        <div className="helpful-thumb text-body-2">
                                                                            <span className="glAQDp5 thumbs-icon ok-hand" style={{width:"14px",height:"14px"}} aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11.89 14.75H1C0.59 14.75 0.25 14.41 0.25 14V8C0.25 7.59 0.59 7.25 1 7.25H3.46L6.05 0.72C6.16 0.43 6.44 0.25 6.75 0.25H7.67C8.59 0.25 9.34 0.98 9.34 1.87V5.45H13.17C14 5.45 14.78 5.84 15.27 6.48C15.73 7.1 15.87 7.87 15.66 8.6L14.39 12.93C14.08 13.99 13.06 14.74 11.9 14.74L11.89 14.75ZM4.75 13.25H11.89C12.38 13.25 12.81 12.95 12.94 12.52L14.21 8.19C14.32 7.81 14.16 7.52 14.06 7.39C13.85 7.12 13.53 6.96 13.16 6.96H8.58C8.17 6.96 7.83 6.62 7.83 6.21V1.87C7.83 1.81 7.76 1.75 7.66 1.75H7.25L4.74 8.08V13.25H4.75ZM1.75 13.25H3.25V8.75H1.75V13.25V13.25Z"></path></svg></span>
                                                                            <span className="thumb-title ok-title">Sí</span>
                                                                        </div>
                                                                    </span>
                                                                    <div className="helpful-thumb text-body-2">
                                                                        <span className="glAQDp5 thumbs-icon ko-hand" style={{width:"14px",height:"14px"}} aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.25533 14.75H8.33533C7.41533 14.75 6.66533 14.03 6.66533 13.13L6.66533 9.55H2.83533C2.00533 9.55 1.22533 9.16 0.735326 8.52C0.275326 7.9 0.135326 7.13 0.345326 6.4L1.62533 2.06C1.93533 1 2.95533 0.25 4.11533 0.25L15.0053 0.25C15.4153 0.25 15.7553 0.59 15.7553 1V7C15.7553 7.41 15.4153 7.75 15.0053 7.75H12.5453L9.95533 14.28C9.84533 14.57 9.56533 14.75 9.25533 14.75ZM4.11533 1.75C3.62533 1.75 3.19533 2.05 3.06533 2.48L1.79533 6.81C1.68533 7.19 1.84533 7.48 1.94533 7.61C2.15533 7.88 2.47533 8.04 2.84533 8.04H7.42533C7.83533 8.04 8.17533 8.38 8.17533 8.79L8.17533 13.12C8.17533 13.17 8.24533 13.24 8.34533 13.24H8.75533L11.2653 6.91V1.75L4.11533 1.75ZM12.7553 6.25H14.2553V1.75L12.7553 1.75V6.25Z"></path></svg>
                                                                        </span>
                                                                        <span className="thumb-title ko-title">No</span>
                                                                    </div>
                                                                </span>
                                                                <span className="flex m-l-12"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </span>
                                        {/* ************************************************ */}
                                    </ul>
                                </div>
                                {/* **************************************************** */}
                                <div className="gig-tags-container">
                                    <h2 className="section-title">Etiquetas relacionadas</h2>
                                    <ul>
                                        <li><a href="/categories/graphics-design/ai-art-prompt" data-uw-rm-brl="false">arte ia</a></li>
                                        <li><a href="/gigs/digitalart" data-uw-rm-brl="false">arte digital</a></li>
                                        <li><a href="/categories/graphics-design" data-uw-rm-brl="false">Diseño gráfico</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="right-sticky-sidebar">
                        <aside className="sidebar-content">
                            <div className="packages-tabs triple">
                                {/* <input id="package-tab-1" name="package-tab-group" type="radio" />
                                <input id="package-tab-2" name="package-tab-group" type="radio" />
                                <input id="package-tab-3" name="package-tab-group" type="radio" /> */}
                                <div className="nav-container">
                                    <label htmlFor="package-tab-1" tabIndex="0" role="tab" aria-selected="true" className={`tab ${checkActive(1, "active")}`}
          onClick={() => handleClick(1)}>Básico</label>
                                    <label htmlFor="package-tab-2" tabIndex="0" role="tab" aria-selected="false" className={`tab ${checkActive(2, "active")}`}
          onClick={() => handleClick(2)}>Estándar</label>
                                    <label htmlFor="package-tab-3" tabIndex="0" role="tab" aria-selected="false" className={`tab ${checkActive(3, "active")}`}
          onClick={() => handleClick(3)}>Premium</label>
                                </div>
                                <div className="TEpHpiF">
                                    <div className="package-content zxTHQ6r">
                                        <header className="header-default">
                                            <div className={`content-tab ${checkActive(1, "active")}`}>
                                                <h3>
                                                    <b className="title">Básico</b>
                                                    <div className="price-wrapper">
                                                        <span className="price">28,50&nbsp;€</span>
                                                    </div>
                                                </h3>
                                                <p>Un diseño digital personalizado **Por favor, póngase en contacto conmigo antes de
                                                    realizar un pedido :)**</p>
                                            </div>
                                            <div className={`content-tab ${checkActive(2, "active")}`}>
                                                <h3>
                                                    <b className="title">Estándar</b>
                                                    <div className="price-wrapper">
                                                        <span className="price">66,49&nbsp;€</span>
                                                    </div>
                                                </h3>
                                                <p>Tres diseños digitales personalizados **Por favor, póngase en contacto conmigo antes de realizar un pedido :)**</p>
                                            </div>
                                            <div className={`content-tab ${checkActive(3, "active")}`}>
                                                <h3>
                                                    <b className="title">Premium</b>
                                                    <div className="price-wrapper">
                                                        <span className="price">142,48&nbsp;€</span>
                                                    </div>
                                                </h3>
                                                <p>Siete diseños digitales personalizados **Por favor, póngase en contacto conmigo antes de realizar un pedido :)**</p>
                                            </div>
                                        </header>
                                        <article>
                                            <div className="additional-info">
                                                <div className="delivery-wrapper">
                                                    <span className="glAQDp5 delivery-icon" aria-hidden="true" style={{width: "16px", height: "16px"}}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg>
                                                    </span>
                                                    <b className="delivery">Entrega en 3 días</b>
                                                </div>
                                                {isActiveRevision && <div className="revisions-wrapper">
                                                    <span className="glAQDp5 revisions-icon" aria-hidden="true" style={{width: "16px", height: "16px"}}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path><path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path></svg></span>
                                                    <b className="revisions">1 revisión</b>
                                                </div>}
                                            </div>
                                            <ul className="features">
                                                <li className="qSePHwK flex flex-items-center">
                                                    <span className="glAQDp5 bvg2_O1 ZbQv8bb" aria-hidden="true" style={{width: "16px", height: "16px"}}><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>
                                                    </span>
                                                    <span>Redacción de textos</span>
                                                </li>
                                                <li className="qSePHwK flex flex-items-center">
                                                    <span className="glAQDp5 bvg2_O1 ZbQv8bb" aria-hidden="true" style={{width: "16px", height: "16px"}}><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg></span>
                                                    <span>Entrega de obras de arte</span>
                                                </li>
                                                <li className="qSePHwK flex flex-items-center">
                                                    <span className={isActiveRevision ? "glAQDp5 bvg2_O1 ZbQv8bb" : "glAQDp5 bvg2_O1"} aria-hidden="true" style={{width: "16px", height: "16px"}}><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>
                                                    </span>
                                                    <span>Imagen mejorada</span>
                                                </li>
                                            </ul>
                                        </article>
                                    </div>
                                    <footer className="tab-footer drawer-payment-footer">
                                        <button className="sPdE5j4 zUvc8Si co-white bg-co-green-700" type="button" tabIndex="0">
                                            <span>Continuar</span>
                                            <span className="glAQDp5 rf" aria-hidden="true" style={{width: "16px", height: "16px", fill: "white"}}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path></svg>
                                            </span>
                                        </button>
                                        <Link className="btn-compare-packages tbody-6" smooth={true} offset={-100} tabIndex="0" to="buy-packages-section">Comparar paquetes</Link>
                                    </footer>
                                </div>
                            </div>
                            <div className="contact-seller">
                                <div className="contact-seller-wrapper"><button
                                        className="sPdE5j4 EFWC9E5 a7588_a co-grey-1000 btn-contact-seller" tabIndex="0">Contáctame</button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
    </div></>
    );
    }

export default Gig;