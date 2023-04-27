import React from 'react';
import './GigCard.scss';
import { Link } from 'react-router-dom';
import StartImage from '../../assets/img/star.png';
import HeartImage from '../../assets/img/heart.png';

function GigCard({item}) {
    return (
        <>
        <div className="gigCardWrapper">
            <Link to="/gig/1">
                <img className='backgroundImage' src={item.img} alt="" />
            </Link>
            <div className="gigCardInfo">
                <div className="gigCardUser">
                    <Link to="/">
                        <img className='infoImage' src={item.profilePicture} alt="" />
                    </Link>
                    <Link to="/">
                        <span className="username">{item.username}</span>
                    </Link>
                    
                </div>
                <div className="cardTextsContainer">
                    <span>{item.desc}</span>
                </div>
                <div className="gigCardStartContainer">
                    <img src={StartImage} alt="" />
                    <span>{item.star}</span>
                </div>
                <div className="gigCardDetails">
                    <img src={HeartImage} alt="" />
                    <div className="gigCardPrice">
                        <span>STARTING AT</span>
                        <h3>{item.price}</h3>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default GigCard;