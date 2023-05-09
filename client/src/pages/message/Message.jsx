import React from 'react';
import './Message.scss';
import { Link, useParams } from 'react-router-dom';
import UserImage from '../../assets/img/user-01.png';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';

function Message() {
    const {id} = useParams();

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

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
            queryClient.invalidateQueries("messages");
        }
    });

    const handleSubmit= (e) => {
        e.preventDefault();

        mutation.mutate({
            conversationId: id, desc: e.taget[0].value,
        });
        e.taget[0].value = "";
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
                                <div className="usserInfo">
                                    <img src={UserImage} alt="" />
                                    <span>José Panero</span>
                                </div>
                                <p>{message.desc}</p>
                            </div>
                        ))}
                        
                        <div className="massageItem">
                            <div className="usserInfo">
                                <img src={UserImage} alt="" />
                                <span>José Panero</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum velit perferendis asperiores excepturi. Voluptatem animi omnis fuga saepe hic magni unde est reprehenderit assumenda, dolorum dolores obcaecati similique quam?</p>
                        </div>
                        
                    </div>)}
                    <hr />
                    <div className="writeContainer">
                        <form action="" onSubmit={handleSubmit}>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder='Escriba su mensaje...'></textarea>
                            <button type='submit'>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;