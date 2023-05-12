import React from 'react';
import './Review.scss';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import NoavatarImage from '../../assets/img/noavatar.jpg';
import moment from 'moment';
import ca from 'moment/dist/locale/ca';
import de from 'moment/dist/locale/de';
import es from 'moment/dist/locale/es';
import { useTranslation } from 'react-i18next';

const UrlImages = '../src/assets/img/flags/';

function Review({review}) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    let idioma = "";

    const {t, i18n} = useTranslation();

    console.log(i18n.language);

    if (i18n.language === "cat") {
        moment.updateLocale('ca', ca);
        idioma = t("languageCat");
    } else if (i18n.language === "de") {
        moment.updateLocale('de', de);
        idioma = t("languageDen");
    }else if (i18n.language === "es") {
        moment.updateLocale('es', es);
        idioma = t("languageEsp");
    }else if (i18n.language === "en"){
        moment.updateLocale('en');
        idioma = t("languageEng");
    } else{
        moment.updateLocale('en');
        idioma = t("languageEng");
    }
  const {isLoading, error, data } = useQuery({
        queryKey: [review.userId], queryFn: () => newRequest.get(`/users/${review.userId}`).then((res) => {
          return res.data;
        }),
  });
  return (
    <div className="reviews-wrap">
        <ul className="review-list">
            <span className="review-item-component-wrapper">
                <li className="review-item-component review-item" data-impression-collected="true">
                    <div className="review-header-container">
                        {isLoading ? t("loadingMessage") : error ? t("somethingWentWrongMessage") : <div className='review-user-container'>
                            <div className="flex flex-items-center">
                                <div className="user-profile-image m-r-16 profile-img desktop-only">
                                    <label className="profile-pict" style={{width:"48px",height:"48px",fontSize:"1em"}} htmlFor="profile_image_4396144511271">
                                        <img src={data.img || NoavatarImage} alt={data.username} loading="lazy" data-uw-rm-ima-original={data.username} />
                                    </label>
                                </div>
                                <div className="user-profile-flag">
                                    <div className="user-info-flag">
                                        <div className="user-profile-image m-r-16 profile-img mobile-web-only">
                                            <label className="profile-pict" style={{width:"48px",height:"48px",fontSize:"1em"}} htmlFor="profile_image_0736388611271">
                                                <img src={data.img || NoavatarImage} className="profile-pict-img tbody-6 custom-profile-image" alt={data.username} loading="lazy" data-uw-rm-ima-original={data.username} />
                                            </label>
                                        </div>
                                        <div className="reviewer-details">
                                            <span className="tbody-5 co-grey-1100 username"><b>{data.username}</b></span>
                                        </div>
                                        <div className="reviewer-sub-details flex">
                                            <div className="country">
                                                <img className="country-flag" src={UrlImages+`${data.flag}.svg`} alt={data.flag} loading="lazy" />
                                                <div className="country-name tbody-6">{data.country}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="review-details">
                        <div className="flex m-t-20">
                            <div className="orca-rating color-yellow tbody-6">
                                <div className="stars">
                                    {Array(review.star).fill().map((item, i) => (
                                        <span className="glAQDp5 orca-star" style={{width:"15px",height:"15px"}} aria-hidden="true" key={i}><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd"d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                        </span>
                                    ))}
                                </div>
                                <b className="rating-score">{review.star}</b>
                            </div>
                            <span className="inline-divider"></span>
                            <time className="text-body-2">{moment(review.updatedAt).fromNow()}</time>
                        </div>
                        <div className="review-description m-b-0">
                            {/* <p>5 stars here its not enough to tell how professional, smart , fast , intelligent, responsible, and thoughtful you are This world literally needs more than you to be a better world 🌎 I appreciate your time, and professional work alot 🌹😍❤️🥰 </p> */}
                            <p>{review.desc}</p>
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
                                                <p className="text-body-2">{t("translateToText") + " " + idioma}</p>
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
                                    <div className="tbody-6 helpful-text m-r-12">{t("usefultext")}</div>
                                    <span className="flex thumb-icons-wrapper">
                                        <span className="m-r-12">
                                            <div className="helpful-thumb text-body-2">
                                                <span className="glAQDp5 thumbs-icon ok-hand" style={{width:"14px",height:"14px"}} aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11.89 14.75H1C0.59 14.75 0.25 14.41 0.25 14V8C0.25 7.59 0.59 7.25 1 7.25H3.46L6.05 0.72C6.16 0.43 6.44 0.25 6.75 0.25H7.67C8.59 0.25 9.34 0.98 9.34 1.87V5.45H13.17C14 5.45 14.78 5.84 15.27 6.48C15.73 7.1 15.87 7.87 15.66 8.6L14.39 12.93C14.08 13.99 13.06 14.74 11.9 14.74L11.89 14.75ZM4.75 13.25H11.89C12.38 13.25 12.81 12.95 12.94 12.52L14.21 8.19C14.32 7.81 14.16 7.52 14.06 7.39C13.85 7.12 13.53 6.96 13.16 6.96H8.58C8.17 6.96 7.83 6.62 7.83 6.21V1.87C7.83 1.81 7.76 1.75 7.66 1.75H7.25L4.74 8.08V13.25H4.75ZM1.75 13.25H3.25V8.75H1.75V13.25V13.25Z"></path></svg>
                                                </span>
                                                <span className="thumb-title ok-title">{t("yesButton")}</span>
                                            </div>
                                        </span>
                                        <div className="helpful-thumb text-body-2">
                                            <span className="glAQDp5 thumbs-icon ko-hand" style={{width:"14px",height:"14px"}} aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.25533 14.75H8.33533C7.41533 14.75 6.66533 14.03 6.66533 13.13L6.66533 9.55H2.83533C2.00533 9.55 1.22533 9.16 0.735326 8.52C0.275326 7.9 0.135326 7.13 0.345326 6.4L1.62533 2.06C1.93533 1 2.95533 0.25 4.11533 0.25L15.0053 0.25C15.4153 0.25 15.7553 0.59 15.7553 1V7C15.7553 7.41 15.4153 7.75 15.0053 7.75H12.5453L9.95533 14.28C9.84533 14.57 9.56533 14.75 9.25533 14.75ZM4.11533 1.75C3.62533 1.75 3.19533 2.05 3.06533 2.48L1.79533 6.81C1.68533 7.19 1.84533 7.48 1.94533 7.61C2.15533 7.88 2.47533 8.04 2.84533 8.04H7.42533C7.83533 8.04 8.17533 8.38 8.17533 8.79L8.17533 13.12C8.17533 13.17 8.24533 13.24 8.34533 13.24H8.75533L11.2653 6.91V1.75L4.11533 1.75ZM12.7553 6.25H14.2553V1.75L12.7553 1.75V6.25Z"></path></svg>
                                            </span>
                                            <span className="thumb-title ko-title">{t("noButton")}</span>
                                        </div>
                                    </span>
                                    <span className="flex m-l-12"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </span>
        </ul>
    </div>
  )
}

export default Review;