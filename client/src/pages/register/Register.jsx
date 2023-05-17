import React, { useState } from 'react';
import './Register.scss';
import upload from '../../utils/upload';
import newRequest from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom';
import { CountriesSelect } from '../../data/dummyDataCountries';
import { Dropdown } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import NoavatarImage from '../../assets/img/noavatar.jpg';

function Register() {
    const {t, i18n}= useTranslation();
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [user, setUser] = useState({
        username: "", email: "", password: "", img: "", country: "", flag: "", phone: "", desc: "", isSeller: false, 
    });

    const [isActiveSelect, setIsActiveSelect] = useState(false);

    const handleAlertSuccess = () => {
        Swal.fire({
            title: "¡Éxito!",
            text: t("userSuccesfullcreatedMessage"),
            icon: 'success',
            confirmButtonText: t("okButton"),
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/login");
            ;}
        });

    }

    const handleAlertError = () => {
        Swal.fire({
            title: "¡Error!",
            text: t("userAlreadyExistsMessage"),
            icon: 'error',
            confirmButtonText: t("okButton"),
            allowOutsideClick: false
        });
        
        // .then((result) => {
        //     if (result.isConfirmed) {
        //         navigate("/login");
        //     ;}
        // });

    }
     
    const handleChange = (e) => {
        setUser((prev) => {
            return {...prev, [e.target.name]: e.target.value};
            
        });
        
    };
    const handleSeller = (e) => {
        setUser((prev) => {
            return {...prev, isSeller: e.target.checked};
        });
    };
    const handleDropdown = (e, {value}) => {

        setUser((prev) => {
            return {...prev, country: e.target.textContent, flag: value, };
        });
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = await upload(file);
        
        try {
            
            console.log(file);
            await newRequest.post("/auth/register", {...user, img: url});
            // navigate("/login");
            handleAlertSuccess();
        } catch (error) {
            if(error.response.status === 500){
                handleAlertError();
            }
            console.log(error.response.status);
        }
    }
    return (
        <div className='registerContainer'>
            <div className="registerWrapper">
                <div className="addingSections">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="left">
                            <h1>{t("registerTitle")}</h1>
                            <div className="form-group">
                                <label htmlFor="username" className="form-control-label">{t("userNameLabelText")}</label>
                                <input type="text" name="username" id="username" className="form-control-input" placeholder={t("userNameInputPlaceholder")} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-control-label">{t("emailLabelText")}</label>
                                <input type="email" name="email" id="email" className="form-control-input" placeholder={t("emailInputPlaceholder")} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-control-label">{t("passwordLabelText")}</label>
                                <input type="password" name="password" id="password" className="form-control-input" placeholder={t("passwordInpuPlaceholder")} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="profilePicture" className="form-control-label">{t("profilePictureLabelText")}</label>
                                <input type="file" name="profilePicture" id="profilePicture" className="form-control-input-file" onChange={e=>setFile(e.target.files[0])} />
                            </div>
                            <div className="form-group">
                                {/*  */}
                                <label htmlFor="country" className="form-control-label">{t("countryLabelText")}</label>
                                <Dropdown name="country" className='form-control-select' placeholder={t("countrySelectPlaceholder")} fluid selection closeOnChange options={CountriesSelect} onChange={handleDropdown} required />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form-control-button">{t("registerBtn")}</button>
                            </div>
                        </div>
                        <div className="right">
                            <h1>{t("becomeASellerTitle")}</h1>
                            <div className="toggle">
                                <div className="form-group-toggle">
                                    <label htmlFor="activeSellerAccount" className="form-control-label">{t("activeSellerAccountLabeltext")}</label>
                                    <label htmlFor='activeSellerAccount' className="switch">
                                        <input type="checkbox" name="activeSellerAccount" id="activeSellerAccount" className="form-control-checkbox" onChange={handleSeller} />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone" className="form-control-label">{t("phoneNumberLabelText")}</label>
                                <input type="tel" name="phone" id="phone" className="form-control-input" placeholder={t("phoneNumberPlaceholder")} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label className='form-control-label' htmlFor="desc">{t("descriptionLabelText")}</label>
                                <textarea name="desc" id="desc" className="form-control-textarea" cols="30" rows="16" placeholder={t("descriptionPlaceholder")} onChange={handleChange} required></textarea>
                            </div>
                        </div>
                     </form>
                </div>
            </div>
        </div>
    );
}

export default Register;