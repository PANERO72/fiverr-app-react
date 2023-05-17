import React from 'react';
import './GigCard.scss';
import { Link } from 'react-router-dom';
import StartImage from '../../assets/img/star.png';
import HeartImage from '../../assets/img/heart.png';
import NoavatarInage from '../../assets/img/noavatar.jpg';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { useTranslation } from 'react-i18next';

function GigCard({item}) {
    const {t, i18n} = useTranslation();
    const {isLoading, error, data} = useQuery({
        queryKey: [item.userId], queryFn: () => 
            newRequest.get(`/users/${item.userId}`).then((res) => {
                return res.data;
            }),
    });
    return (
        <>
        <div className="gigCardWrapper">
            <Link to={`/gig/${item._id}`}>
                {/* <img className='backgroundImage' src={item.img} alt="" /> */}
                <img className='backgroundImage' src={item.cover} alt="" />
            </Link>
            <div className="gigCardInfo">
                {isLoading ? t("loadingContentMessage") : error ? t("somethingWentWrongContentMessage") : <div className="gigCardUser">
                    <Link to="/">
                        {/* <img className='infoImage' src={item.profilePicture} alt="" /> */}
                        <img className='infoImage' src={data.img || NoavatarInage} alt={t("altUserImage")} />
                    </Link>
                    <Link to="/">
                        {/* <span className="username">{item.username}</span> */}
                        <span className="username">{data.username}</span>
                    </Link>
                    
                </div>}
                <div className="cardTextsContainer">
                    <span className='desc'><p>{item.shortDesc}</p></span>
                </div>
                <div className="gigCardStartContainer">
                    <img src={StartImage} alt="" />
                    {/* <span>{item.star}</span> */}
                    <span>{!isNaN(item.totalStars / item.starNumber) && Math.round(item.totalStars / item.starNumber) }</span>
                </div>
                <div className="gigCardDetails">
                    <img src={HeartImage} alt="" />
                    <div className="gigCardPrice">
                        <span>{t("startingAtPriceText")}</span>
                        <h3>{item.price} &euro;</h3>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default GigCard;