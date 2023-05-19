import React, { useEffect, useRef, useState } from 'react';
import './NavBar.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import NoavatarImage from '../../assets/img/noavatar.jpg';
import { useTranslation } from 'react-i18next';
import newRequest from '../../utils/newRequest';
import getCurrentUser from '../../utils/getCurrentUser';


function NavBar() {
  const refDropdown = useRef();

  const {t, i18n} = useTranslation();
  const navigate = useNavigate();
  const [activeSubmenu, setActiveSubmenu] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const {pathname} = useLocation();
  const isActive = ()=>{
    window.scrollY > 0 ? setActiveSubmenu(true) : setActiveSubmenu(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", isActive);

    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (openSubmenu && refDropdown.current && !refDropdown.current.contains(e.target)) {
        setOpenSubmenu(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      window.removeEventListener("scroll", isActive);
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  },[openSubmenu]);

  // const currentUser = {
  //   id: 1, username: "José Panero", isSeller: true
  // }

  const currentUser = getCurrentUser();
  console.log(currentUser);

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

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
                {currentUser ? (<div className='userContainer' onClick={() => setOpenSubmenu(!openSubmenu)} ref={refDropdown}>
                  <img src={currentUser?.img || NoavatarImage} alt={t("altTextUserImage")} />
                  <span className='userName'>{currentUser?.username}</span>
                  {openSubmenu && <div className="optionsContainer">
                    {currentUser?.isSeller && (<>
                      <Link className='link optionLink bordersTop' to='/mygigs'>{t('servicesLink')}</Link>
                      <Link className='link optionLink' to='/add'>{t('createrServiceLink')}</Link>
                   </>)}
                    <Link className='link optionLink' to='/orders'>{t('ordersLink')}</Link>
                    <Link className='link optionLink' to='/messages'>{t('messagesLink')}</Link>
                    <hr className='divider' />
                    <Link className='link optionLink bordersBottom' onClick={handleLogout}>{t('logoutBtn')}</Link>
                  </div>}
                </div>) : (<><Link className='link' to='/login'> <span className='linkItem'>{t('loginBtn')}</span></Link>
                <Link className='link' to="/register"><button className='button' type='button'>{t('joinBtn')}</button></Link></>)}
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