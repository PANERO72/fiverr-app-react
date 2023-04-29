import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Login.scss';
import newRequest from '../../utils/newRequest';
import Swal from 'sweetalert2';

function Login() {
    const {username, setUsername} = useState("");
    const {password, setPassword} = useState("");
    const {error, setError} = useState(null);
    const navigate = useNavigate();

    const handleAlert = () => {
        Swal.fire({
            title: "Error",
            text: error && error,
            icon: "error",
            confirmButtonText: "Aceptar",
        });

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await newRequest.post("/auth/login", {username,password});
            localStorage.setItem("currentuUer", JSON.stringify(res.data));
            navigate('/');
            console.log(res.data);
        } catch (error) {
            setError(error.response.data);
            handleAlert();
            console.log(error.response.data);
        }

    }
    return (
        <div className='loginContainer'>
            <div className="loginWrapper">
                <form action="" onSubmit={handleSubmit}>
                    <h1>Inicie Sesión en su Cuenta</h1>
                    <div className="form-group">
                        <label htmlFor="username" className="form-control-label">Nombre de Usuario:</label>
                        <input type="text" name="username" id="username" className="form-control-input" placeholder="ej: pepe72" onChange={e=>setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-control-label">Contraseña:</label>
                        <input type="password" name="password" id="password" className="form-control-input" placeholder="ej: 1234Password" onChange={e=>setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="form-control-button">Inciar Sesión</button>
                    </div>
                    {/* <div>{error && error}</div> */}
                    {/* <div>{handleAlert()}</div> */}
                </form>
            </div>
        </div>
    );
}

export default Login;