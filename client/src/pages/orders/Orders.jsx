import React from 'react';
import './Orders.scss';
// import { Link } from 'react-router-dom';
import GigImage from '../../assets/img/slide-19.webp';
import EmailImage from '../../assets/img/message.png';
import {useQuery} from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom';
import {useTranslation} from 'react-i18next';

function Orders() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    console.log(currentUser);

    const {t, i18n} = useTranslation();

    const navigate = useNavigate();

    const {isLoading, error, data} = useQuery({

        queryKey: ["orders"], queryFn: () => 
            newRequest.get(`/orders`).then((res) => {
                return res.data;
            }),
    });


    // console.log(data);

    const handleContact = async (order) => {
        const sellerId = order.sellerId;
        const buyerId = order.buyerId;
        const id = sellerId + buyerId;

        try {
            const res = await newRequest.get(`/conversations/single/${id}`);
            navigate(`/message/${res.data.id}`);
            
        } catch (error) {
            if(error.response.status === 404){

                const res = await newRequest.post(`/conversations/`, {
                    to: currentUser.seller ? buyerId : sellerId,
                });
                navigate(`/message/${res.data.id}`);
            }
        }

    }

    return (
        <div className='ordersContainer'>
            {isLoading ? (t("loadingContentMessage")) : error ? (t("somethingWentWrongContentMessage")) : (<div className='ordersWrapper'>
                <div className="ordersTitleContainer">
                    <h1>{t("ordersPageTitle")}</h1>
                    {/* <Link className='link addNewGigBtn' to="/add">Agregar Nuevo Servicio</Link> */}
                </div>
                <div className="ordersTableContainer">
                    <table> 
                        <thead>
                            <tr>
                                <th>{t("ordersTableHeadingImage")}</th>
                                <th>{t("ordersTableHeadingTitle")}</th>
                                <th>{t("ordersTableHeadingDescription")}</th>
                                <th>{t("ordersTableHeadingPrice")}</th>
                                {/* <th>{ currentUser?.isSeller ? t("ordersTableHeadingUserIsSeller") : t("ordersTableHeadingUserIsBuyer")}</th> */}
                                <th>{t("ordersTableHeadingActions")}</th>
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
                                    <td><img className='gigEdit' src={EmailImage} alt=""  onClick={() =>handleContact(order)}/></td>
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