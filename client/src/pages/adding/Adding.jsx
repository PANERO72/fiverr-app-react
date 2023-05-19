import React, {useReducer, useState} from 'react';
import './Adding.scss';

import {gigsCategoryCA} from '../../data/dummyDataCA';
import {gigsCategoryDE} from '../../data/dummyDataDE';
import {gigsCategoryEN} from '../../data/dummyDataEN';
import {gigsCategoryES} from '../../data/dummyDataES';

import { useTranslation } from 'react-i18next';
import { INITIAL_STATE, gigReducer } from '../../reducers/gigReducer';
import upload from '../../utils/upload';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';

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
    const [isShowSkills, setIsShowSkills] = useState(false);
    const [textareaClass, setTexeareaClass] = useState(false);

    const [imageCover, setImageCover] = useState(undefined);
    const [uploadedImages, setUploadImages] = useState([]);
    const [uploading, setUploading] = useState(false);

    const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const handleChange = (e) => {
        dispatch({
            type: "CHANGE_INPUT", payload: {name: e.target.name, value: e.target.value},
        });
    };
    const handleFeature = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_FEATURE", payload: e.target[0].value,
        });
        e.target[0].value = "";
        setTexeareaClass(true);
    };

    const handleUpload = async () => {
        setUploading(true);
        try {
            const cover = await upload(imageCover);

            const images = await Promise.all([...uploadedImages].map(async (file) => {
                const url = await upload(file);
                return url;
            }));

            setUploading(false);
            dispatch({
                type: "ADD_IMAGES", payload: {cover, images},
            });
        } catch (error) {
            console.log(error);
        }
    }

    const handleSkills = (e) => {
        //e.preventDefault();
    }

    const mutation = useMutation({
        mutationFn: (gig) => {
            return newRequest.post("/gigs", gig);
        }, onSuccess: () => {
            queryClient.invalidateQueries(["myGigs"]);
        },
    });

    const handleSubmit = (e) => {
        handleUpload();
        e.preventDefault();
        mutation.mutate(state);
        // navigate("/myGigs");
    }

    return (
        <div className='addingContainer'>
            <div className="addingWrapper">
                <h1>{t("addingGigTitle")}</h1>
                <div className="addingSections">
                    {/* ** ESTE DIV ERA UN ELEMENTO FORM */}
                    <div className='main-form' action="">
                        <div className="left">
                            <div className="form-group">
                                <label className='form-label' htmlFor="gigTitle">{t("gigTitleLabel")}</label>
                                <input type="text" className="form-control-input" id="gigTitle" name='title' placeholder={t("gigTitlePlaceholder")} onChange={handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="cat">{t("gigCategoryLabel")}</label>
                                <select name="cat" className={isActiveSelect ? "form-control-select select-border" : "form-control-select"} id="cat" onClick={() => setIsActiveSelect(!isActiveSelect)} onChange={handleChange} required>
                                    <option value="">-- {t("gigSelectCategoryPlaceholder")} --</option>
                                    {gigsCategory.map((category) => (<option key={category.id} value={category?.cat}>{category.title}</option>))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="cover">{t("gigCoverImageLabel")}</label>
                                <input type="file" className={isActiveInput ? "form-control-input-file file-border" : "form-control-input-file"} id="cover" onClick={() => setIsActiveInput(!isActiveInput)} onChange={(e) => setImageCover(e.target.files[0])} required />
                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="images">{t("gigUploadImagesLabel")}</label>
                                <input type="file" className={isActiveInput ? "form-control-input-file file-border" : "form-control-input-file"} id="images" multiple onClick={() => setIsActiveInput(!isActiveInput)} onChange={(e) => setUploadImages(e.target.files)} required />
                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="desc">{t("gigDescriptionLabel")}</label>
                                <textarea name="desc" id="desc" className="form-control-textarea" cols="30" rows="16" placeholder={t("gigDescriptionPlaceholder")} onChange={handleChange} ></textarea>
                            </div>
                            <div className="form-group">
                                <button type="button" className="form-control-button" onClick={handleSubmit}>{t("gigCreateButton")}</button>
                            </div>
                        </div>
                        <div className="right">
                            <div className="form-group">
                                <label className='form-label' htmlFor="shortTitle">{t("shortServiceTitleLabel")}</label>
                                <input type="text" className="form-control-input" id="shortTitle" aria-describedby="shortTitle" placeholder={t("shortServiceTitlePlaceholder")} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="shortDesc">{t("shortServiceDescriptionLabel")}</label>
                                <textarea name="shortDesc" id="shortDesc" className={!textareaClass ? "form-control-textarea textarea-height" : "form-control-textarea"} cols="30" rows="16" placeholder={t("shortServiceDescriptionPlaceholder")} onChange={handleChange} ></textarea>
                            </div>
                            <div className="form-group-delivery-revision-price">
                                <div className="delivery-revision-price">
                                    <label className='form-label' htmlFor="deliveryTime">{t("deliveryTimeLabel")} <span className='delivery-time'>{t("deliveryTimeExampleText")}</span>:</label>
                                    <input type="number" className="form-control-input" name='deliveryTime' id="deliveryTime" aria-describedby="deliveryTime" min={1} placeholder="1" onChange={handleChange} />
                                </div>
                                <div className="delivery-revision-price">
                                    <label className='form-label' htmlFor="revisionNumber">{t("revisionNumberLabel")}</label>
                                    <input type="number" className="form-control-input" name='revisionNumber' id="revisionNumber" aria-describedby="revisionNumber" min={1} placeholder="1" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="features">{t("serviceSkillsLabel")}</label>
                                <div className={state?.features ? "form-group-skills no-gap" : "form-group-skills"}>
                                    <form className='form-skills' action="" onSubmit={handleFeature}>
                                        <input type="text" className="form-control-input" name='features1' id="features1" aria-describedby="features" placeholder={t("serviceSkillsPlaceholder1")} required/>
                                        {/* <input type="text" className="form-control-input" name='features2' id="features2" aria-describedby="features" placeholder={t("serviceSkillsPlaceholder2")} />
                                        <input type="text" className="form-control-input" name='features3' id="features3" aria-describedby="features" placeholder={t("serviceSkillsPlaceholder3")} />
                                        <input type="text" className="form-control-input" name='features4' id="features4" aria-describedby="features" placeholder={t("serviceSkillsPlaceholder4")} />
                                        <input type="text" className="form-control-input" name='features5' id="features5" aria-describedby="features" placeholder={t("serviceSkillsPlaceholder5")} />
                                        <input type="text" className="form-control-input" name='features6' id="features6" aria-describedby="features" placeholder={t("serviceSkillsPlaceholder6")} /> */}
                                        <button type="submit" className="form-control-button" onClick={handleSkills}>{t("addSkillBtn")}</button>
                                    </form>
                                    <div className='addedFeatures'>
                                        {state?.features?.map((feature, index) => (<div className='featureItem' key={index}>
                                            <span>{feature}</span>
                                            <button type='button' onClick={()=>{dispatch({type: "REMOVE_FEATURE", payload: feature}); setTexeareaClass(false)}}>X</button>
                                        </div>))}
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="price">{t("priceServiceLabel")}</label>
                                <input type="number" className="form-control-input" name='price' id="price" aria-describedby="price" min={2} placeholder="10,00" onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    {/* *** */}
                </div>
            </div>
        </div>
    );
}

export default Adding;