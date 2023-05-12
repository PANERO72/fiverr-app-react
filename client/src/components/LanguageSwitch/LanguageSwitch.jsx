import React from 'react';
import { useTranslation } from "react-i18next";
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import useStyles from './styles';
//import './LanguageSwitch.css';
import { useRef } from 'react';

const LanguageSwitch = () => {
  //Hacemos uso del hook useRef para quitar Warning findDOMNode 
  const nodeRef = useRef(null);
  const { t, i18n } = useTranslation();
  // var langAttribute = document.getElementsByTagName('html')[0].getAttribute('lang');
  
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    document.documentElement.setAttribute("lang", lng);
  }; 
  
  const classes = useStyles();
  return (
      <div className={classes.languageSwitch}> 
        <header className={classes.languageSwitchHeader}> 
          <div className={classes.languageContainer}> 
              <Dropdown fluid floating direction='left' className={classes.languageSwitchDropdown} icon='globe' text={t('selectLanguage')} noderef={nodeRef}>
                <Dropdown.Menu>
                  <Dropdown.Item flag='' className={classes.languageSwitchFlagIcon} text={t('languageCat')} onClick={() => changeLanguage('cat')}></Dropdown.Item>
                  <Dropdown.Item flag='gb' text={t('languageEng')} onClick={() => changeLanguage('en')}></Dropdown.Item>
                  <Dropdown.Item flag='de' text={t('languageDen')} onClick={() => changeLanguage('de')}></Dropdown.Item>
                  <Dropdown.Item flag='es' text={t('languageEsp')} onClick={() => changeLanguage('es')}></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          </div>
        </header>
      </div>

    // <div className="LanguageSwitch">
    //     <header className="LanguageSwitch-header">
    //       <div className="LanguageContainer">
    //         <Dropdown icon='globe' text={t('slecteLanguage')}>
    //           <Dropdown.Menu>
    //             <Dropdown.Item flag='' className="flag-icon" text={t('languageCat')} onClick={() => changeLanguage('ca')}></Dropdown.Item>
    //             <Dropdown.Item flag='gb' text={t('languageEng')} onClick={() => changeLanguage('en')}></Dropdown.Item>
    //             <Dropdown.Item flag='de' text={t('languageDen')} onClick={() => changeLanguage('de')}></Dropdown.Item>
    //             <Dropdown.Item flag='es' text={t('languageEsp')} onClick={() => changeLanguage('es')}></Dropdown.Item>
    //           </Dropdown.Menu>
    //         </Dropdown>
    //       </div>
    //     </header>
    // </div>
  )
}

export default LanguageSwitch;