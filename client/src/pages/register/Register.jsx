import React, { useState } from 'react';
import './Register.scss';
import upload from '../../utils/upload';
import newRequest from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom';
import { CountriesSelect } from '../../data/dummyDataCountries';
import { Dropdown } from 'semantic-ui-react'

function Register() {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [user, setUser] = useState({
        username: "", email: "", password: "", img: "", country: "", flag: "", phone: "", desc: "", isSeller: false, 
    });

    const [isActiveSelect, setIsActiveSelect] = useState(false);
     
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
            await newRequest.post("/auth/register", {...user, img: url});
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='registerContainer'>
            <div className="registerWrapper">
                <div className="addingSections">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="left">
                            <h1>Crear una Nueva Cuenta</h1>
                            <div className="form-group">
                                <label htmlFor="username" className="form-control-label">Nombre de Usuario:</label>
                                <input type="text" name="username" id="username" className="form-control-input" placeholder="ej: pepe72" onChange={handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-control-label">Correo Electrónico:</label>
                                <input type="email" name="email" id="email" className="form-control-input" placeholder="ej: pepe@pepe.com" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-control-label">Contraseña:</label>
                                <input type="password" name="password" id="password" className="form-control-input" placeholder="ej: 1234Password" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="profilePicture" className="form-control-label">Foto de Perfil:</label>
                                <input type="file" name="profilePicture" id="profilePicture" className="form-control-input-file" onChange={e=>setFile(e.target.files[0])} />
                            </div>
                            <div className="form-group">
                                {/*  */}
                                <label htmlFor="country" className="form-control-label">País:</label>
                                <Dropdown name="country" className='form-control-select' placeholder='Seleccione su País' fluid selection closeOnChange options={CountriesSelect} onChange={handleDropdown}/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form-control-button">Crear Cuenta</button>
                            </div>
                        </div>
                        <div className="right">
                            <h1>Quiero Convertirme en un Vendedor</h1>
                            <div className="toggle">
                                <div className="form-group-toggle">
                                    <label htmlFor="activeSellerAccount" className="form-control-label">Activar la cuenta de vendedor:</label>
                                    <label htmlFor='activeSellerAccount' className="switch">
                                        <input type="checkbox" name="activeSellerAccount" id="activeSellerAccount" className="form-control-checkbox" onChange={handleSeller} />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone" className="form-control-label">Némero de teléfono:</label>
                                <input type="tel" name="phone" id="phone" className="form-control-input" placeholder="+34 666 12 34 56" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label className='form-control-label' htmlFor="desc">Descripción:</label>
                                <textarea name="desc" id="desc" className="form-control-textarea" cols="30" rows="16" placeholder='Una breve descripción de ti mismo...' onChange={handleChange}></textarea>
                            </div>
                        </div>
                     </form>
                </div>
            </div>
        </div>
    );
}

export default Register;