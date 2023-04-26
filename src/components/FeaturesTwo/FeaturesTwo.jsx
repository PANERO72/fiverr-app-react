import React from 'react';
import './FeaturesTwo.scss';
import CheckIconImage from '../../assets/img/check-light.png';
import FiverrBussines from '../../assets/img/fiverrBusines.png';
import BussinesImage from '../../assets/img/business-desktop-870-x1.webp';
import { useTranslation, Trans } from 'react-i18next';

function FeaturesTwo() {
    const { t } = useTranslation();
    return (
        <div className='featuresTwoContainer'>
            <div className="featuresTwoWrapper">
                <div className="featuresTwoLeft">
                    <div className="fiverrBusinesContainer">
                        <img className='fiverrLogo' src={FiverrBussines} alt="" />
                        <span className="bagde">{t('featuresTwoBagde')}</span>
                    </div>
                    <h2><span>
                        <Trans i18nKey={'featuresTwoTitle'}>
                            {/* Una solución de negocio diseñada para <i>equipos</i> */}
                        </Trans>
                    </span></h2>
                    <p className='textMain'>{t('featuresTwoMainText')}</p>
                    <div className="featuresTwoLeftItem">
                        <h6 className='title'>
                            <img src={CheckIconImage} className="check-icon" alt='' />
                            <span className='text'>{t('featuresTwoFirstSubText')}</span>
                        </h6>
                        
                    </div>
                    <div className="featuresTwoLeftItem">
                        <h6 className='title'>
                            <img src={CheckIconImage} className="check-icon" alt='' />
                            <span className='text'>{t('featuresTwoSecondSubText')}</span>
                        </h6>
                    </div>
                    <div className="featuresTwoLeftItem">
                        <h6 className='title'><img src={CheckIconImage} className="check-icon" alt='' />
                            <span className='text'>{t('featuresTwoThridSubText')}</span>
                        </h6>
                    </div>
                    <div className="featuresTwoLeftButton">
                        <a className="featuresButton" target="_blank" href="#">{t('featuresTwoFiverrBusinessBtn')}</a>
                    </div>
                </div>
                <div className="featuresTwoRight">
                    <img src={BussinesImage} alt='' />
                </div>
            </div>
        </div>
    );
}

export default FeaturesTwo;