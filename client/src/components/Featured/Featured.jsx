import React from 'react';
import './Featured.scss';
import SearchIcon from '../../assets/img/search.png';
import ManImage from '../../assets/img/man.png';

import { useTranslation, Trans } from 'react-i18next';

function Featured() {
    const { t,} = useTranslation();
    return (
        <div className='featuredContainer'>
            <div className="featuredWrapper">
                <div className="leftContainer">
                    <h1>
                        <Trans i18nKey={'featuredTitle'}>
                            {/* <h1>Troba els serveis <i>freelance</i> ideals per al teu negoci.</h1> */}
                        </Trans>
                    </h1>
                    <div className="searchContainer">
                        <div className="searchInput">
                            <img src={SearchIcon} alt="" />
                            <input type="search" name="search" id="search" placeholder={t('topBarInputPlaceholder')} />
                        </div>
                        <button type='button'>{t('searchBtn')}</button>
                    </div>
                    <div className="popular">
                        <span>{t('popularSearchText')}:</span>
                        <div className='popularButtons'>
                            <button type='button'>{t('webDesignSearch')}</button>
                            <button type='button'>{t('wordPressSearch')}</button>
                            <button type='button'>{t('logoDesignSearch')}</button>
                            <button type='button'>{t('aIServicesSearch')}</button>
                        </div>
                    </div>
                </div>
                <div className="rightContainer">
                    <img src={ManImage} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Featured;