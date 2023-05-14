import React from 'react';
import './TrustedBy.scss';
import { useTranslation } from 'react-i18next';

function TrustedBy() {

  const {t} = useTranslation();

  return (
    <div className='trustedContainer'>
        <div className="trustedWrapper">
            <span>{t('trustedByTxt')}</span>
            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png" alt={t("brandImageAltText")} />
            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png" alt={t("brandImageAltText")} />
            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png" alt={t("brandImageAltText")} />
            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png" alt={t("brandImageAltText")} />
            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png" alt={t("brandImageAltText")} />
       </div>
    </div>
  )
}

export default TrustedBy;