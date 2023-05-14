import React from 'react';
import './ProjectCard.scss';
import { Link } from 'react-router-dom';

function ProjectCard({item}) {
    return (
        <>
        <div className="projectCardWrapper">
            <Link to="/">
                <img className='backgroundImage' src={item.img} alt={t("altBackgroundImage")} />
            </Link>
            <div className="projectCardInfo">
                <Link to="/">
                    <img className='infoImage' src={item.profilePicture} alt={t("altProfileImage")} />
                </Link>
                <div className="projectCardTexts">
                    <Link to="/" className='link'>
                        <h2 className="desc">{item.cat}</h2>
                    </Link>
                    <Link to="/">
                        <span className="username">{item.username}</span>
                    </Link>
                </div>
            </div>
        </div>
        </>

    )
}

export default ProjectCard;