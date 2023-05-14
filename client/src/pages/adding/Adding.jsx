import React, {useState} from 'react';
import './Adding.scss';

import {gigsCategoryCA} from '../../data/dummyDataCA';
import {gigsCategoryDE} from '../../data/dummyDataDE';
import {gigsCategoryEN} from '../../data/dummyDataEN';
import {gigsCategoryES} from '../../data/dummyDataES';

import { useTranslation } from 'react-i18next';

function Adding() {
    const {t, i18n} = useTranslation();

    let gigsCategory;

    if (i18n.language === "ca") {
        gigsCategory = gigsCategoryCA;
    } else if(i18n.language === "de") {
        gigsCategory = gigsCategoryDE;
    } else if(i18n.language === "en") {
        gigsCategory = gigsCategoryEN;
    }else if(i18n.language === "es") {
        gigsCategory = gigsCategoryES;
    }

    const [isActiveInput, setIsActiveInput] = useState(false);
    const [isActiveSelect, setIsActiveSelect] = useState(false);

    return (
        <div className='addingContainer'>
            <div className="addingWrapper">
                <h1>{t("addingGigTitle")}</h1>
                <div className="addingSections">
                    <form action="">
                        <div className="left">
                            <div className="form-group">
                                <label className='form-label' htmlFor="gigTitle">{t("gigTitleLabel")}</label>
                                <input type="text" className="form-control-input" id="gigTitle" placeholder={t("gigTitlePlaceholder")} />
                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="gigCategory">{t("gigCategoryLabel")}</label>
                                <select name="gigCategory" className={isActiveSelect ? "form-control-select select-border" : "form-control-select"} id="gigCategory" onClick={() => setIsActiveSelect(!isActiveSelect)}>
                                    <option value="">-- {t("gigSelectCategoryPlaceholder")} --</option>
                                    {gigsCategory.map((category) => (<option key={category.id} value={category.cat}>{category.title}</option>))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="gigCoverImage">{t("gigCoverImageLabel")}</label>
                                <input type="file" className={isActiveInput ? "form-control-input-file file-border" : "form-control-input-file"} id="gigCoverImage" onClick={() => setIsActiveInput(!isActiveInput)} />
                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="gigUploadImages">{t("gigUploadImagesLabel")}</label>
                                <input type="file" className={isActiveInput ? "form-control-input-file file-border" : "form-control-input-file"} id="gigUploadImages" multiple onClick={() => setIsActiveInput(!isActiveInput)} />
                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="gigDescription">{t("gigDescriptionLabel")}</label>
                                <textarea name="gigDescription" id="gigDescription" className="form-control-textarea" cols="30" rows="16" placeholder={t("gigDescriptionPlaceholder")}></textarea>
                            </div>
                            <div className="form-group">
                                <button type="button" className="form-control-button">{t("gigCreateButton")}</button>
                            </div>
                        </div>
                        <div className="right">
                            <div className="form-group">
                                <label className='form-label' htmlFor="serviceTitle">{t("shortServiceTitleLabel")}</label>
                                <input type="text" className="form-control-input" id="serviceTitle" aria-describedby="serviceTitle" placeholder={t("shortServiceTitlePlaceholder")} />
                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="gigShortDescription">{t("shortServiceDescriptionLabel")}</label>
                                <textarea name="gigShortDescription" id="gigShortDescription" className="form-control-textarea" cols="30" rows="16" placeholder={t("shortServiceDescriptionPlaceholder")}></textarea>
                            </div>
                            <div className="form-group-delivery-revision">
                                <div className="delivery-revision">
                                    <label className='form-label' htmlFor="deliveryTime">{t("deliveryTimeLabel")} <span className='delivery-time'>{t("deliveryTimeExampleText")}</span>:</label>
                                    <input type="number" className="form-control-input" id="deliveryTime" aria-describedby="deliveryTime" min={1} placeholder="1" />
                                </div>
                                <div className="delivery-revision">
                                    <label className='form-label' htmlFor="revisionNumber">{t("revisionNumberLabel")}</label>
                                    <input type="number" className="form-control-input" id="revisionNumber" aria-describedby="revisionNumber" min={1} placeholder="1" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="serviceSkills">{t("serviceSkillsLabel")}</label>
                                <div className="form-group-skills">
                                    <input type="text" className="form-control-input" name='serviceSkills1' id="serviceSkills1" aria-describedby="serviceSkills" placeholder={t("serviceSkillsPlaceholder1")} />
                                    <input type="text" className="form-control-input" name='serviceSkills2' id="serviceSkills2" aria-describedby="serviceSkills" placeholder={t("serviceSkillsPlaceholder2")} />
                                    <input type="text" className="form-control-input" name='serviceSkills3' id="serviceSkills3" aria-describedby="serviceSkills" placeholder={t("serviceSkillsPlaceholder3")} />
                                    <input type="text" className="form-control-input" name='serviceSkills4' id="serviceSkills4" aria-describedby="serviceSkills" placeholder={t("serviceSkillsPlaceholder4")} />
                                    <input type="text" className="form-control-input" name='serviceSkills5' id="serviceSkills5" aria-describedby="serviceSkills" placeholder={t("serviceSkillsPlaceholder5")} />
                                    <input type="text" className="form-control-input" name='serviceSkills6' id="serviceSkills6" aria-describedby="serviceSkills" placeholder={t("serviceSkillsPlaceholder6")} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="priceService">{t("priceServiceLabel")}</label>
                                <input type="number" className="form-control-input" id="priceService" aria-describedby="priceService" min={2} placeholder="10,00" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Adding;