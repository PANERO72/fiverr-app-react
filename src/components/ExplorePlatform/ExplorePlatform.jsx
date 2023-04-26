import React from 'react';
import './ExplorePlatform.scss';
import { useTranslation } from 'react-i18next';

function ExplorePlatform() {
const { t } = useTranslation();
  return (
    <div className='explorePlatformContainer'>
        <div className="explorePlatformWrapper">
            <h2>{t('explorePlatformMainTitle')}</h2>
            <ul className="categories-list">
                <li>
                    <a href="/categories/graphics-design?source=hplo_cat_sec&amp;pos=1">
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.91dfe44.svg" alt="Artes gráficas y diseño" loading="lazy" data-uw-rm-ima-original="artes gráficas y diseño" />
                        {t('explorePlatformFirstOption')}
                    </a>
                </li>
                <li>
                    <a href="/categories/online-marketing?source=hplo_cat_sec&amp;pos=2">
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/online-marketing.a3e9794.svg" alt="Marketing digital" loading="lazy" data-uw-rm-ima-original="marketing digital" />{t('explorePlatformSecondOption')}</a>
                </li>
                <li>
                    <a href="/categories/writing-translation?source=hplo_cat_sec&amp;pos=3">
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation.a787f2f.svg" alt="Escritura y traducción" loading="lazy" data-uw-rm-ima-original="escritura y traducción" />{t('explorePlatformThirdOption')}</a>
                </li>
                <li>
                    <a href="/categories/video-animation?source=hplo_cat_sec&amp;pos=4">
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation.1356999.svg" alt="Video y animación" loading="lazy" data-uw-rm-ima-original="video y animación" />{t('explorePlatformFourthOption')}</a>
                </li>
                <li>
                    <a href="/categories/music-audio?source=hplo_cat_sec&amp;pos=5">
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio.ede4c90.svg" alt="Música y audio" loading="lazy" data-uw-rm-ima-original="música y audio" />{t('explorePlatformFifthOption')}</a>
                </li>
                <li>
                    <a href="/categories/programming-tech?source=hplo_cat_sec&amp;pos=6">
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming.6ee5a90.svg" alt="Programación y tecnología" loading="lazy" data-uw-rm-ima-original="programación y tecnología" />{t('explorePlatformSixthOption')}</a>
                </li>
                <li>
                    <a href="/categories/business?source=hplo_cat_sec&amp;pos=7">
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business.fabc3a7.svg" alt="Negocios" loading="lazy" data-uw-rm-ima-original="negocios" />{t('explorePlatformSeventhOption')}</a>
                </li>
                <li>
                    <a href="/categories/lifestyle?source=hplo_cat_sec&amp;pos=8">
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lifestyle.112b348.svg" alt="Estilo de vida" loading="lazy" data-uw-rm-ima-original="estilo de vida" />{t('explorePlatformEighthOption')}</a>
                </li>
                <li>
                    <a href="/categories/data?source=hplo_cat_sec&amp;pos=9">
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/data.855fe95.svg" alt="Datos" loading="lazy" data-uw-rm-ima-original="datos" />{t('explorePlatformNinthOption')}</a>
                </li>
                <li>
                    <a href="/categories/photography?source=hplo_cat_sec&amp;pos=10" >
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/photography.0cf5a3f.svg" alt="Fotografía" loading="lazy" data-uw-rm-ima-original="fotografía" />{t('explorePlatformTenthOption')}</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default ExplorePlatform;