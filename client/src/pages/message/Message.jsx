import React from 'react';
import './Message.scss';
import { Link, useParams } from 'react-router-dom';
import UserImage from '../../assets/img/user-01.png';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import moment from 'moment';
import ca from 'moment/dist/locale/ca';
import de from 'moment/dist/locale/de';
import es from 'moment/dist/locale/es';

function Message() {
    const {id} = useParams();

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

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

    const {isLoading, error, data} = useQuery({
        queryKey: ["messages"], queryFn: () => 
            newRequest.get(`/messages/${id}`).then((res) => {
                return res.data;
            }),
    });

    const mutation = useMutation({
        mutationFn: (message) => {
            return newRequest.post(`/messages`, message);
        }, onSuccess: () => {
            queryClient.invalidateQueries(["messages"]);
        }
    });

    const handleSubmit= (e) => {
        e.preventDefault();

        mutation.mutate({
            conversationId: id, desc: e.target[0].value,
        });
        e.target[0].value = "";
    }

    return (
        <div className='messageContainer'>
            <div className="messageWrapper">
                <div className="messageTopBar">
                    <span className="breadcrumb">
                        <Link to='/messages' className='link'> MENSAJES</Link> &gt; JOSÉ PANERO &gt;
                    </span> 
                </div>
                <div className="messageContent">
                    {isLoading? ("Cargando...") : error ? ("¡Algo salió mal!") : ( <div className="messagesWrapper">
                        {data.map((message) => (
                            <div className={message.userId === currentUser._id ? "massageItem ownerMessage" : "massageItem"} key={message._id}>
                                <div className="userInfo">
                                    <img src={UserImage} alt="" />
                                    <span className='userName'>José Panero</span>
                                    {/* <span className='userName'>{message.userId === currentUser.username} </span> */}
                                    <span className='messageDate'>{moment(message.updatedAt).fromNow()}</span>
                                </div>
                                <p>{message.desc}</p>
                            </div>
                        ))}
                    
                    </div>)}
                    <hr />
                    <div className="writeContainer">
                        <form action="" onSubmit={handleSubmit}>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder='Escriba su mensaje...' required></textarea>
                            <button type='submit'>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;