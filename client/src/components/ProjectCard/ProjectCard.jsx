import React from 'react';
import './ProjectCard.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ProjectCard({item}) {
    const {t} = useTranslation();
    return (
        <>
        <div className="projectCardItem">
            <Link to="/">
                <img className='backgroundImage' src={item.img} alt={t("altTextBackgroundImage")} />
            </Link>
            <div className="projectCardInfo">
                <Link to="/">
                    <img className='infoImage' src={item.profilePicture} alt={t("altTextProfileImage")} />
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