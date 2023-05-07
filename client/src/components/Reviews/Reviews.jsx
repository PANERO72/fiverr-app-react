import React, {useState} from 'react';
import './Reviews.scss';
import Review from '../Review/Review';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import Swal from 'sweetalert2';

function Reviews({gigId}) {
  const queryClint = useQueryClient();

  const {isLoading, error, data } = useQuery({
        queryKey: ['reviews'], queryFn: () => newRequest.get(`/reviews/${gigId}`).then((res) => {
          return res.data;
        }),
  });
  const mutation = useMutation({
    mutationFn: (review) => {
        return newRequest.post("/reviews", review);
    },
    onSuccess: (response) => {
        queryClint.invalidateQueries(["reviews"]);
    }, onError: (error) => {
        console.log(error.response.data);
        handleAlert(error.response.data);
    }
  }); 

  const [isActiveSelect, setIsActiveSelect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({gigId, desc, star});
  }

  const handleAlert = (error) => {
    Swal.fire({
        title: "Error",
        text: error,
        icon: "error",
        confirmButtonText: "Aceptar",
    });

  }

  return (
    <div className="gig-page-reviews desktop-view" id='reviews-section'>
        <div className="gig-page-reviews-title">Reseñas</div>
        {isLoading ? "Cargando..." : error ? "¡Algo salió mal!" : <div className="reviews-package">
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
                    {data.map((review) => (<Review key={review._id} review={review} />))}
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
        </div>}
        <div className="addNewReviewContainer">
            <h3>Agregar una Reseña</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className='form-label' htmlFor="desc">Reseña:</label>
                    <textarea name="desc" id="desc" className="form-control-textarea" cols="30" rows="16" placeholder='Escriba su reseña...'></textarea>
                </div>
                <div className="form-group">
                    <label className='form-label' htmlFor="star">Valoración:</label>
                    <select name="star" className={isActiveSelect ? "form-control-select select-border" : "form-control-select"} id="star" onClick={() => setIsActiveSelect(!isActiveSelect)}>
                        <option value="">-- Seleccione una valoración --</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit" className="form-control-button">Enviar</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Reviews;