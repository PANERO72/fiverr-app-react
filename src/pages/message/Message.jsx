import React from 'react';
import './Message.scss';
import { Link } from 'react-router-dom';
import UserImage from '../../assets/img/user-01.png';

function Message() {
    return (
        <div className='messageContainer'>
            <div className="messageWrapper">
                <div className="messageTopBar">
                    <span className="breadcrumb">
                        <Link to='/messages' className='link'> MENSAJES</Link> &gt; JOSÉ PANERO &gt;
                    </span> 
                </div>
                <div className="messageContent">
                    <div className="messagesWrapper">
                        <div className="massageItem">
                            <div className="usserInfo">
                                <img src={UserImage} alt="" />
                                <span>José Panero</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum velit perferendis asperiores excepturi. Voluptatem animi omnis fuga saepe hic magni unde est reprehenderit assumenda, dolorum dolores obcaecati similique quam?</p>
                        </div>
                        <div className="massageItem ownerMessage">
                            <div className="usserInfo">
                                <img src={UserImage} alt="" />
                                <span>José Panero</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum velit perferendis asperiores excepturi. Voluptatem animi omnis fuga saepe hic magni unde est reprehenderit assumenda, dolorum dolores obcaecati similique quam?</p>
                        </div>
                        <div className="massageItem">
                            <div className="usserInfo">
                                <img src={UserImage} alt="" />
                                <span>José Panero</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum velit perferendis asperiores excepturi. Voluptatem animi omnis fuga saepe hic magni unde est reprehenderit assumenda, dolorum dolores obcaecati similique quam?</p>
                        </div>
                        <div className="massageItem ownerMessage">
                            <div className="usserInfo">
                                <img src={UserImage} alt="" />
                                <span>José Panero</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum velit perferendis asperiores excepturi. Voluptatem animi omnis fuga saepe hic magni unde est reprehenderit assumenda, dolorum dolores obcaecati similique quam?</p>
                        </div>
                        <div className="massageItem">
                            <div className="usserInfo">
                                <img src={UserImage} alt="" />
                                <span>José Panero</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum velit perferendis asperiores excepturi. Voluptatem animi omnis fuga saepe hic magni unde est reprehenderit assumenda, dolorum dolores obcaecati similique quam?</p>
                        </div>
                        <div className="massageItem ownerMessage">
                            <div className="usserInfo">
                                <img src={UserImage} alt="" />
                                <span>José Panero</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum velit perferendis asperiores excepturi. Voluptatem animi omnis fuga saepe hic magni unde est reprehenderit assumenda, dolorum dolores obcaecati similique quam?</p>
                        </div>
                    </div>
                    <hr />
                    <div className="writeContainer">
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Escriba su mensaje...'></textarea>
                        <button type='button'>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;