import React, {useState } from 'react';
import {useParams} from 'react-router-dom';
import { Link as Link1 } from 'react-scroll';
import {Link as Link2} from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import './Gig.scss';
import NoavatarImage from '../../assets/img/noavatar.jpg';
import Slide from '../../components/Slide/Slide';
// import './Gig.css';
import Carousel from "nuka-carousel";
import Reviews from '../../components/Reviews/Reviews';

function Gig() {

    const {id} = useParams();

    const [isActiveRevision, setIsActiveRevision] = useState(false);

    const {isLoading, error, data } = useQuery({
        queryKey: ['gig'], queryFn: () => newRequest.get(`/gigs/single/${id}`).then((res) => {
          return res.data;
        }),
    });

    const userId = data?.userId;

    const {isLoading: isLoadingUser, error: errorUser, data: dataUser } = useQuery({
        queryKey: ['user'], queryFn: () => newRequest.get(`/users/${userId}`).then((res) => {
          return res.data;
        }), enabled: !!userId,
    });

    return (<>
        {isLoading ? "loading" : error ? "¡Algo salió mal!" : <><div className="topMenuShareContainer">
            <div className="topMenuShareWrapper">
                <div className="topMenu">
                    <ul>
                        <li className='navlink overview-link link'><Link1 activeClass='active' smooth={true} spy={true} offset={-200} to='overview-section'>Resumen</Link1></li>
                        <li className='navlink description-link link'><Link1 activeClass='active' smooth={true} spy={true} offset={-100} to='description-section'>Descripción</Link1></li>
                        <li className='navlink about-link link'><Link1 activeClass='active' smooth={true} spy={true} offset={-100} to='seller-section'>Acerca del vendedor</Link1></li>                      
                        <li className='navlink reviews-link link'><Link1 activeClass='active' smooth={true} spy={true} offset={-100} to='reviews-section'>Reseñas</Link1></li>
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
        <div className='gigContainer' id='overview-section'>
            <div className="gigWrapper">
                <div className="gigTopBar">
                    <span className="breadcrumb">
                        FIVERR &gt; GÁFICOS Y DISEÑO
                    </span> 
                </div>
                <div className="gigContent">
                    <div className="left">
                        <h1>{data.title}</h1>
                        <div className='sellerOverviewMain'>
                            {isLoadingUser ? ("Cargando..." ) : errorUser ? ("¡Algo salió mal!") : (<><div className="sellerOverviewContainer">
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
                                            {!isNaN(data.totalStars / data.starNumber) && (<div className="stars">
                                                {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item, i) => (
                                                    <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true" key={i}>
                                                        <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                                    </span>
                                                ))}
                                                {/* <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true">
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
                                                </span> */}
                                            </div>)}
                                            <b className="rating-score">{Math.round(data.totalStars / data.starNumber)}</b>
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
                            </div></>)}
                        </div>
                        <div className="gigCardContainer">
                            <Slide slidesToShow={1} arrowsScroll={1}>
                                {data.images.map((img) => (
                                    <img src={img} key={img} alt="" />
                                ))}
                            </Slide>
                        </div>
                        
                        {/* ** NO ELIMINAR* */}
                        <div className="gig-description with-translated-badge" id='description-section'>
                            <header className='gig-description-header'>
                                <h2 className="section-title">Acerca de este Servicio</h2>
                                {/* <p className="translated-badge">Traducción automática</p> */}
                            </header>
                            <div className="description-wrapper">
                                <span style={{fontSize:"0px"}}></span>
                                <div className="description-content" data-impression-collected="true">
                                    {/* <p><strong>Crearé 1, 3 o 7 imágenes totalmente personalizadas (según sus descripciones) usando una poderosa herramienta de IA llamada Midjourney</strong></p>
                                    <p>Puede enviarme una <strong>foto</strong>, una <strong>descripción detallada</strong> o simplemente <strong>enviarme un mensaje</strong> y podemos discutir su idea.&nbsp; Todo depende de tu imaginación + mis habilidades y con eso, las posibilidades son infinitas.&nbsp; Soy flexible y me comprometo a crear un resultado óptimo para tu proyecto.</p>
                                    <p><strong>No hay temas relacionados con la desnudez, la violencia o las drogas.</strong></p>
                                    <p><strong><u>Por favor, póngase en contacto conmigo antes de realizar un pedido*</u></strong></p>
                                    <p> Creo imágenes de IA únicas con Midjourney.&nbsp; He invertido incontables horas para dominar efectivamente este software, y es por eso que soy el diseñador ideal para su proyecto.&nbsp; Ya no necesita pasar horas buscando la imagen correcta o intentar hacer un diseño desde cero.&nbsp; Con sus palabras, puedo generar una amplia variedad de estilos, temas y paletas de colores que reflejan su idea de una obra maestra perfecta. Puedes ser el artista, ¡no se necesita experiencia! Ya sea para una presentación comercial, contenido de redes sociales o un proyecto personal, mi plataforma ofrece una solución rápida y fácil para todas sus necesidades artísticas.&nbsp; Mejora tu creatividad con mis servicios.&nbsp; <em>¡Envíame un mensaje en cualquier momento!</em><strong><em></em></strong>Estoy aquí.</p> */}
                                    <p>{data.desc}</p>
                                </div>
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
                            {isLoadingUser ? ("Cargando...") : errorUser ? ("¡Algo salió mal!") : (<div className='aboutSellerWrapper'>
                                <h2 className="section-title about-the-seller"><span>Acerca del vendedor</span></h2>
                                <div className="profileSellerCard">
                                    <div className="profile-info">
                                        <div className="user-profile-image">
                                            <label className="profile-pict" htmlFor="profile_image_2035966769090">
                                                <img src={dataUser.img || NoavatarImage} className="profile-pict-img" alt="ai_lani" data-uw-rm-ima-original="ai_lani" />
                                                <a href="/levels" rel="nofollow" className="user-badge-round md locale-es level-one-seller" data-uw-rm-brl="false" aria-label="es.fiverr.com" data-uw-rm-empty-ctrl=""></a>
                                            </label>
                                        </div>
                                        <div className="user-profile-label">
                                            <div className="username-line">
                                                <div className="flex flex-items-baseline">
                                                    <div tabIndex="0" role="button" aria-label="Desplázate para conocer al vendedor" className="LBuVtkY tbody-4 text-bold">{dataUser.username}</div>
                                                    {/* <div tabIndex="0" role="button" aria-label="Desplázate para conocer al vendedor" className="LBuVtkY a2vZSDs">{dataUser.fiverrName}</div> */}
                                                </div>
                                            </div>
                                            <div className="one-liner-rating-wrapper">
                                                <p className="one-liner">I put the AI in ImAge</p>
                                                <div className="orca-rating seller-rating color-yellow tbody-6">
                                                    {!isNaN(data.totalStars / data.starNumber) && (<div className="stars">
                                                        {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item, i) => (
                                                            <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true" key={i}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                        ))}
                                                        {/* <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                        <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                        <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                        <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                                        <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span> */}
                                                    </div>)}
                                                    <strong className="rating-score">{Math.round(data.totalStars / data.starNumber)}</strong>
                                                    <span className="ratings-count">(<span className="rating-count-number">80</span>)</span>
                                                </div>
                                            </div>
                                            <button className="sPdE5j4 EFWC9E5 a7588_a co-grey-1000 btn-contact-me">Contáctame</button>
                                        </div>
                                    </div>
                                    <div className="stats-desc">
                                        <ul className="user-stats">
                                            <li><span>De:</span> <strong>{dataUser.country}</strong></li>
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
                                            {/* <div className="inner"><p>Hi there &amp; welcome to my shop.&nbsp; I'm ai_lani - a digital artist who creates fully customizable images based on your specific needs and vision.&nbsp; You send me the photo or description, and I will present to you a one of a kind - AI generated piece of art.&nbsp; If you have any questions, send me a message anytime :)</p></div> */}
                                            {!dataUser.desc ? <div className="inner"><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></div> : <div className="inner"><p>{dataUser.desc}</p></div>}
                                            {/* <button className="read-more">+ Ver más</button> */}
                                        </article>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                        {/* ** NO ELIMINAR * */}
                        {/* ** NO ELIMINAR* */}
                        <Reviews gigId={id} />
                        {/* ** NO ELIMINAR* */}
                    </div>
                    <div className="right-sticky-sidebar">
                        <aside className="sidebar-content">
                            <div className="packages-tabs triple">
                                <div className="TEpHpiF">
                                    <div className="package-content zxTHQ6r">
                                        <header className="header-default">
                                            <div className="content-tab">
                                                <h3>
                                                    <b className="title">Básico &mdash; {data.shortTitle}</b>
                                                    <div className="price-wrapper">
                                                        {/* <span className="price">28,50&nbsp;€</span> */}
                                                        <span className="price">{data.price} &nbsp;€</span>
                                                    </div>
                                                </h3>
                                                {/* <p>Un diseño digital personalizado **Por favor, póngase en contacto conmigo antes de realizar un pedido :)**</p> */}
                                                <p>{data.shortDesc}</p>
                                            </div>                                            
                                        </header>
                                        <article>
                                            <div className="additional-info">
                                                <div className="delivery-wrapper">
                                                    <span className="glAQDp5 delivery-icon" aria-hidden="true" style={{width: "16px", height: "16px"}}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg>
                                                    </span>
                                                    <b className="delivery">Entrega en {data.deliveryTime} días</b>
                                                </div>
                                                {isActiveRevision && <div className="revisions-wrapper">
                                                    <span className="glAQDp5 revisions-icon" aria-hidden="true" style={{width: "16px", height: "16px"}}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path><path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path></svg></span>
                                                    {/* <b className="revisions">1 revisión</b> */}
                                                    <b className="revisions">{data.revisionNumber} revisión(es)</b>
                                                </div>}
                                            </div>
                                            <ul className="features">
                                                {data.features.map((feature) => (
                                                    <li className="qSePHwK flex flex-items-center" key={feature}>
                                                        <span className="glAQDp5 bvg2_O1 ZbQv8bb" aria-hidden="true" style={{width: "16px", height: "16px"}}><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>
                                                        </span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                                {/* <li className="qSePHwK flex flex-items-center">
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
                                                </li> */}
                                            </ul>
                                        </article>
                                    </div>
                                    <footer className="tab-footer drawer-payment-footer">
                                        <Link2 className='link payBtn' to={`/payment/${id}`}>
                                            <button className="sPdE5j4 zUvc8Si co-white bg-co-green-700" type="button" tabIndex="0">
                                                <span>Continuar</span>
                                                <span className="glAQDp5 rf" aria-hidden="true" style={{width: "16px", height: "16px", fill: "white"}}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path></svg>
                                                </span>
                                            </button>
                                        </Link2>
                                        {/* ** ELIMINAR* */}
                                        {/* <Link className="btn-compare-packages tbody-6" smooth={true} offset={-100} tabIndex="0" to="buy-packages-section">Comparar paquetes</Link> */}
                                        {/* ** ELIMINAR* */}
                                    </footer>
                                </div>
                            </div>
                            <div className="contact-seller">
                                <div className="contact-seller-wrapper">
                                    <button className="sPdE5j4 EFWC9E5 a7588_a co-grey-1000 btn-contact-seller" tabIndex="0">Contáctame</button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div></>}</>
    );
}

export default Gig;