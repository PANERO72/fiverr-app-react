import React, { useEffect, useState } from 'react';
import './NavBar.scss';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import UserImage from '../../assets/img/user-01.png';
import { useTranslation } from 'react-i18next';

function NavBar() {
  const [activeSubmenu, setActiveSubmenu] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const {pathname} = useLocation();
  const isActive = ()=>{
    window.scrollY > 0 ? setActiveSubmenu(true) : setActiveSubmenu(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    }
  },[]);

  const currentUser = {
    id: 1, username: "José Panero", isSeller: true
  }

  const {t} = useTranslation();
  return (
    <div className={activeSubmenu || pathname !== "/" ? 'navbarContainer activeSubmenu' : 'navbarContainer'}>
        <div className="navbarWrapper">
            <div className='logo'>
               <Link to="/" className='link'>
                  <span className="text">fiverr</span>
               </Link>
                <span className="dot">.</span>
            </div>
            <div className="linksContainer">
                <Link className='link' to='/'><span className='linkItem'>{t('fiverrBusinessLink')}</span></Link>
                <Link className='link' to='/'><span className='linkItem'>{t('exploreLink')}</span></Link>
                <Link className='link' to='/'><span className='linkItem'>{t('languageEsp')}</span></Link>
                {!currentUser?.isSeller && <Link className='link' to='/'> <span className='linkItem'>{t('becomeSeller')}</span></Link>}
                <Link className='link' to='/'> <span className='linkItem'>{t('loginBtn')}</span></Link>
                {!currentUser && <button className='button' type='button'>{t('Beitreten')}</button>}
                {currentUser && (<div className='userContainer' onClick={() => setOpenSubmenu(!openSubmenu)}>
                  <img src={UserImage} alt="" />
                  <span className='userName'>{currentUser?.username}</span>
                  {openSubmenu && <div className="optionsContainer">
                    {currentUser?.isSeller && (<>
                      <Link className='link optionLink bordersTop' to='/mygigs'>{t('servicesLink')}</Link>
                      <Link className='link optionLink' to='/add'>{t('createrServiceLink')}</Link>
                   </>)}
                    <Link className='link optionLink' to='/orders'>{t('ordersLink')}</Link>
                    <Link className='link optionLink' to='/messages'>{t('messagesLink')}</Link>
                    <hr className='divider' />
                    <Link className='link optionLink bordersBottom' to='/'>{t('logoutBtn')}</Link>
                  </div>}
                </div>)}
            </div>
            <div className="languageSwitchContainer">
              <LanguageSwitch></LanguageSwitch>
            </div>
        </div>
        {activeSubmenu || pathname !== "/" && (<><hr className='rule'/>
        <div className="mainMenu">
          <Link className='link' to="/">{t('graphicAndDesignLink')}</Link>
          <Link className='link' to="/">{t('digitalMarketingLink')}</Link>
          <Link className='link' to="/">{t('writingAndTranslationLink')}</Link>
          <Link className='link' to="/">{t('videoAndAnimationLink')}</Link>
          <Link className='link' to="/">{t('musicAndAudioLink')}</Link>
          <Link className='link' to="/">{t('programmingAndTechLink')}</Link>
          <Link className='link' to="/">{t('photographyLink')}</Link>
          <Link className='link' to="/">{t('businessLink')}</Link>
          <Link className='link' to="/">{t('aIServicesLink')}</Link>
        </div>
        <hr className='rule'/></>)}
    </div>
  );
}

export default NavBar;