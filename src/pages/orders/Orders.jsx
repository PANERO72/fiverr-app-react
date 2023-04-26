import React from 'react';
import './Orders.scss';
// import { Link } from 'react-router-dom';
import GigImage from '../../assets/img/slide-19.webp';
import EmailImage from '../../assets/img/message.png';

function Orders() {
    const currentUser = {
        id: 1, username: 'José Panero', isSeller: true
    }
    return (
        <div className='ordersContainer'>
            <div className='ordersWrapper'>
                <div className="ordersTitleContainer">
                    <h1>Pedidos</h1>
                    {/* <Link className='link addNewGigBtn' to="/add">Agregar Nuevo Servicio</Link> */}
                </div>
                <div className="ordersTableContainer">
                    <table> 
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Título</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>{ currentUser?.isSeller ? "Comprador" : "Vendedor"}</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='image'><img className='gigImage' src={GigImage} alt="" /></td>
                                <td className='title'>Título del servicio ofrecido</td>
                                <td className='desc'>Descripción del servicio que realizo...</td>
                                <td className='price'>20,99 €</td>
                                <td className='sales'>{currentUser?.isSeller ? currentUser.username : " 15"}</td>
                                <td><a href=""><img className='gigEdit' src={EmailImage} alt="" /></a></td>
                            </tr>
                            <tr>
                                <td><img className='gigImage' src={GigImage} alt="" /></td>
                                <td>Título del servicio ofrecido</td>
                                <td>Descripción del servicio que realizo...</td>
                                <td>20,99 €</td>
                                <td>{currentUser?.isSeller ? currentUser.username : " 15"}</td>
                                <td><a href=""><img className='gigEdit' src={EmailImage} alt="" /></a></td>
                            </tr>
                            <tr>
                                <td><img className='gigImage' src={GigImage} alt="" /></td>
                                <td>Título del servicio ofrecido</td>
                                <td>Descripción del servicio que realizo...</td>
                                <td>20,99 €</td>
                                <td>{currentUser?.isSeller ? currentUser.username : " 15"}</td>
                                <td><a href=""><img className='gigEdit' src={EmailImage} alt="" /></a></td>
                            </tr>
                            <tr>
                                <td><img className='gigImage' src={GigImage} alt="" /></td>
                                <td>Título del servicio ofrecido</td>
                                <td>Descripción del servicio que realizo...</td>
                                <td>20,99 €</td>
                                <td>{currentUser?.isSeller ? currentUser.username : " 15"}</td>
                                <td><a href=""><img className='gigEdit' src={EmailImage} alt="" /></a></td>
                            </tr>
                            <tr>
                                <td><img className='gigImage' src={GigImage} alt="" /></td>
                                <td>Título del servicio ofrecido</td>
                                <td>Descripción del servicio que realizo...</td>
                                <td>20,99 €</td>
                                <td>{currentUser?.isSeller ? currentUser.username : " 15"}</td>
                                <td><a href=""><img className='gigEdit' src={EmailImage} alt="" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div> 
    );
}

export default Orders;