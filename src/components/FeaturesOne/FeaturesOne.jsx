import React from 'react';
import './FeaturesOne.scss';
import CheckIconImage from '../../assets/img/check.png';
import VideoContent from '../../assets/videos/vmvv3czyk2ifedefkau7.mp4';
import { useTranslation } from 'react-i18next';

function FeaturesOne() {
    const { t } = useTranslation();
    return (
        <div className='featuresOneContainer'>
            <div className="featuresOneWrapper">
                <div className="featuresOneLeft">
                    <h2>{t('featuresOneTitle')}</h2>
                    <div className="featuresOneLeftItem">
                        <h6 className='title'>
                            <img src={CheckIconImage} className="check-icon" alt='' />
                            <span>{t('featuresOneFirstSubtitle')}</span>
                        </h6>
                        <p className="text">{t('featuresOneFirstText')}</p>
                    </div>
                    <div className="featuresOneLeftItem">
                        <h6 className='title'>
                            <img src={CheckIconImage} className="check-icon" alt='' />
                            <span>{t('featuresOneSecondSubtitle')}</span>
                        </h6>
                        <p className="text">{t('featuresOneSecondText')}</p>
                    </div>
                    <div className="featuresOneLeftItem">
                        <h6 className='title'>
                            <img src={CheckIconImage} className="check-icon" alt='' />
                            <span>{t('featuresOneThirdSubtitle')}</span>
                        </h6>
                        <p className="text">{t('featuresOneThirdText')}</p>
                    </div>
                    <div className="featuresOneLeftItem">
                        <h6 className='title'><img src={CheckIconImage} className="check-icon" alt='' />
                            <span>{t('featuresOneFourthSubtitle')}</span>
                        </h6>
                        <p className="text">{t('featuresOneFourthText')}</p>
                    </div>
                </div>
                <div className="featuresOneRight">
                    <video src={VideoContent} controls></video>
                </div>
            </div>
        </div>
    );
}

export default FeaturesOne;