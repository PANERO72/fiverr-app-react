import React from 'react';
import './Messages.scss';
import { Link } from 'react-router-dom';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import moment from 'moment';
import ca from 'moment/dist/locale/ca';
import de from 'moment/dist/locale/de';
import es from 'moment/dist/locale/es';

// import AsReadImage from '../../assets/img/mark-as-read.svg';
// import AsUnreadImage from '../../assets/img/mark-as-unread.svg';

function Messages() {

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // const bandera = currentUser;

    if (currentUser.flag === "cat") {
        moment.updateLocale('ca', ca);
    } else if (currentUser.flag === "de") {
        moment.updateLocale('de', de);
    }else if (currentUser.flag === "es") {
        moment.updateLocale('es', es);
    }else{
        moment.updateLocale('en');
    }

    const queryClient = useQueryClient();

    const {isLoadig, error, data} = useQuery ({
        queryKey: ["conversations"], queryFn: () => 
            newRequest.get("/conversations").then((res) => {
                return res.data;
            }),
    });

    const mutation = useMutation({
        mutationFn: (id) => {
            return newRequest.put(`/conversations/${id}`);
        }, onSuccess: () => {
            queryClient.invalidateQueries(["conversations"]);
        }
    });

    const handleRead = (id) => {
        mutation.mutate(id);
    }
    
    return (
        <div className='messagesContainer'>
            {isLoadig ? ("Cargando...") : error ? ("¡Algo salió mal!") : (<div className='messagesWrapper'>
                <div className="messagesTitleContainer">
                    <h1>Mensajes</h1>
                    {/* <Link className='link addNewGigBtn' to="/add">Agregar Nuevo Servicio</Link> */}
                </div>
                <div className="messagesTableContainer">
                    <table> 
                        <thead>
                            <tr>
                                <th>{currentUser.isSeller ? "Comprador" : "Vendedor"}</th>
                                <th>Ultimo mensaje</th>
                                <th>Fecha</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((conversation) => (<tr className={ ((currentUser.isSeller && !conversation.readBySeller) || (!currentUser.isSeller && !conversation.readByBuyer)) ? "active" : ""} key={conversation.id}>
                                <td className='title'>{currentUser.isSeller ? conversation.buyerId : conversation.sellerId}</td>
                                <td className='message'><Link to={`/message/${conversation.id}`} className='link'>{conversation?.lastMessage?.substring(0, 200)}...</Link></td>
                                <td className='date'>{moment(conversation.updatedAt).fromNow()} </td>
                                
                                <td className='button'>{((currentUser.isSeller && !conversation.readBySeller) || (!currentUser.isSeller && !conversation.readByBuyer)) &&(<button type='button' className='button-mark-read' onClick={()=>handleRead(conversation.id)}><span className='asRead-mark'>Marcar como leido</span></button>) }</td>

                                {/* <button type='button' className='button-mark-unread' onClick={()=>handleRead(conversation.id)}><span className='asUnread-mark'>Marcar como no leido</span></button> */}

                            </tr>))}                          
                        </tbody>
                    </table>
                </div>
            </div>)}
        </div> 
    );
}

export default Messages;