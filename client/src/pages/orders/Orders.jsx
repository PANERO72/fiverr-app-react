import React from 'react';
import './Orders.scss';
// import { Link } from 'react-router-dom';
import GigImage from '../../assets/img/slide-19.webp';
import EmailImage from '../../assets/img/message.png';
import {useQuery} from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom';

function Orders() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const navigate = useNavigate();

    const {isLoading, error, data} = useQuery({

        queryKey: ["orders"], queryFn: () => {
            newRequest.get(`/orders`).then((res) => {
                return res.data;
            });
        }
    });


    // console.log(data);

    const handleContact = async (order) => {
        const sellerId = order.sellerId;
        const buyerId = order.buyerId;
        const id = sellerId + buyerId;

        try {
            const res = await newRequest.get(`/conversations/single/${id}`);
            navigate(`/messages/${res.data.id}`);
            
        } catch (error) {
            if(error.respopnse.status === 404){

                const res = await newRequest.post(`/conversations`, {
                    to: currentUser.seller ? buyerId : sellerId,
                });
                navigate(`/messages/${res.data.id}`);
            }
        }

    }

    return (
        <div className='ordersContainer'>
            {isLoading ? ("Cargando...") : error ? ("¡Algo salión mal!") : (<div className='ordersWrapper'>
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
                                {/* <th>{ currentUser?.isSeller ? "Comprador" : "Vendedor"}</th> */}
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((order) => (
                               <tr key={order._id}>
                                    <td className='image'><img className='gigImage' src={order.img} alt="" /></td>
                                    <td className='title'>{order.title}</td>
                                    <td className='desc'>{order.desc}</td>
                                    <td className='price'>{order.price} €</td>
                                    {/* <td className='sales'>{currentUser?.isSeller ? currentUser.username : " 15"}</td> */}
                                    <td><a href="" onClick={() =>handleContact(order)}><img className='gigEdit' src={EmailImage} alt="" /></a></td>
                                </tr> 
                            ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>)}
        </div> 
    );
}

export default Orders;