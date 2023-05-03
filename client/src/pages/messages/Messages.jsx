import React from 'react';
import './Messages.scss';
import { Link } from 'react-router-dom';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import moment from 'moment';
// import AsReadImage from '../../assets/img/mark-as-read.svg';
// import AsUnreadImage from '../../assets/img/mark-as-unread.svg';

function Messages() {
    const currentUser = localStorage.getItem("currentUser");

    const queryClient = useQueryClient();

    const {isLoadig, error, data} = useQuery ({
        queryKey: ["conversations"], queryFn: () => {
            newRequest.get("/conversations").then((res => {
                return res.data;
            }));
        },
    });

    const mutation = useMutation({
        mutationFn: (id) => {
            return newRequest.put(`/conversations/${id}`);
        }, onSuccess: () => {
            queryClient.invalidateQueries("conversations");
        }
    });

    const handleReaded = (id) => {
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
                                <th>Comprador</th>
                                <th>Ultimo mensaje</th>
                                <th>Fecha</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((conversation) => (<tr className="active" key={conversation.id}>
                                <td className='title'>{currentUser.isSeller ? conversation.buyerId : conversation.sellerId}</td>
                                <td className='message'><Link to={`/message/${conversation.id}`} className='link'>{conversation?.lastMessage?.substring(0, 200)}...</Link></td>
                                <td className='date'>{moment(conversation.updatedAt).fromNow()}</td>
                                {/* <td>{currentUser?.isRead ? (<a href=""><img className='asRead-mark' src={AsReadImage} alt="" /></a>) : (<img className='asUnread-mark' src={AsUnreadImage} alt="" />) }</td> */}
                                <td className='button'>{((currentUser.isSeller && !conversation.readBySeller) || (!currentUser.isSeller && !conversation.readByBuyer)) && (<button type='button' onClick={()=>handleReaded(conversation.id)}><span className='asRead-mark' /*style={{width: "25px", height: "25px"}}*/><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" stroke="none">
<path d="M891 1944 c-23 -9 -102 -51 -173 -95 l-131 -79 -74 0 c-110 0 -147 -24 -168 -108 -11 -44 -17 -49 -109 -107 -111 -70 -139 -100 -161 -169 -21 -70 -23 -1108 -1 -1178 19 -65 59 -113 119 -143 l51 -25 755 0 c849 0 797 -4 874 75 66 68 67 74 67 680 0 609 -1 614 -68 680 -20 20 -75 60 -122 88 -75 47 -85 56 -92 90 -18 87 -62 117 -172 117 l-75 0 -129 79 c-71 44 -150 86 -176 95 -58 20 -157 20 -215 0z m200 -66 c19 -6 68 -32 109 -57 l75 -46 -137 -3 c-76 -1 -200 -1 -275 0 l-138 3 75 46 c42 25 89 51 105 57 41 14 144 15 186 0z m473 -189 l26 -21 -2 -296 -3 -295 -195 -120 c-264 -161 -305 -180 -389 -180 -89 1 -128 18 -376 165 l-210 125 -3 301 -2 300 26 21 c26 21 35 21 564 21 529 0 538 0 564 -21z m-1224 -363 l0 -215 -105 62 -105 62 0 58 c0 65 17 112 49 142 18 16 147 101 159 104 1 1 2 -95 2 -213z m1479 110 c33 -30 51 -77 51 -135 l0 -49 -99 -61 c-54 -34 -101 -61 -105 -61 -3 0 -6 92 -6 205 l0 205 68 -41 c37 -23 78 -51 91 -63z m49 -877 l-3 -346 -28 -36 c-54 -71 -4 -67 -840 -67 l-754 0 -33 22 c-18 13 -43 36 -54 51 -21 28 -21 39 -24 498 -1 258 0 469 4 469 4 0 160 -91 348 -202 187 -111 366 -211 396 -221 42 -15 75 -18 140 -15 106 5 104 4 525 261 l320 196 3 -132 c1 -73 1 -288 0 -478z"/></g></svg></span></button>) } {/*: (<a href=''><span className='asUnread-mark'><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,156.000000) scale(0.100000,-0.100000)"
fill="" stroke="none"><path d="M204 1501 c-22 -10 -57 -36 -77 -56 -66 -68 -67 -75 -67 -665 0 -590 1 -597 67 -665 77 -79 25 -75 873 -75 710 0 757 2 795 19 50 22 96 67 121 118 18 36 19 68 19 603 0 535 -1 567 -19 603 -25 51 -71 96 -121 118 -38 17 -85 19 -795 19 -714 0 -757 -1 -796 -19z m1586 -73 c54 -37 74 -72 75 -130 l0 -51 -142 -86 c-79 -47 -232 -141 -342 -208 -247 -152 -264 -161 -334 -174 -96 -17 -151 3 -405 154 -122 73 -288 170 -368 217 l-146 85 4 58 c5 64 25 98 78 135 l33 22 757 0 757 0 33 -22z m75 -1195 c-3 -18 -17 -46 -32 -63 -53 -63 -10 -60 -836 -60 l-754 0 -33 22 c-18 13 -43 36 -54 51 -21 28 -21 39 -24 499 -2 447 -2 470 15 464 10 -4 72 -40 138 -80 301 -182 543 -320 591 -337 72 -26 177 -25 247 1 29 11 209 114 398 229 l344 210 3 -452 c1 -249 0 -466 -3 -484z"/></g></svg></span></a>)*/}</td>
                            </tr>))}

                            <tr className="active">
                                <td>{currentUser.username}</td>
                                <td><Link to="/message/1" className='link'>Mesajes del comprdor sobre el servicio que adquirido...</Link></td>
                                <td>20/04/2023</td>
                                <td>{currentUser?.isRead ? (<a href=""><span className='asRead-mark' /*style={{width: "25px", height: "25px"}}*/><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" stroke="none">
<path d="M891 1944 c-23 -9 -102 -51 -173 -95 l-131 -79 -74 0 c-110 0 -147 -24 -168 -108 -11 -44 -17 -49 -109 -107 -111 -70 -139 -100 -161 -169 -21 -70 -23 -1108 -1 -1178 19 -65 59 -113 119 -143 l51 -25 755 0 c849 0 797 -4 874 75 66 68 67 74 67 680 0 609 -1 614 -68 680 -20 20 -75 60 -122 88 -75 47 -85 56 -92 90 -18 87 -62 117 -172 117 l-75 0 -129 79 c-71 44 -150 86 -176 95 -58 20 -157 20 -215 0z m200 -66 c19 -6 68 -32 109 -57 l75 -46 -137 -3 c-76 -1 -200 -1 -275 0 l-138 3 75 46 c42 25 89 51 105 57 41 14 144 15 186 0z m473 -189 l26 -21 -2 -296 -3 -295 -195 -120 c-264 -161 -305 -180 -389 -180 -89 1 -128 18 -376 165 l-210 125 -3 301 -2 300 26 21 c26 21 35 21 564 21 529 0 538 0 564 -21z m-1224 -363 l0 -215 -105 62 -105 62 0 58 c0 65 17 112 49 142 18 16 147 101 159 104 1 1 2 -95 2 -213z m1479 110 c33 -30 51 -77 51 -135 l0 -49 -99 -61 c-54 -34 -101 -61 -105 -61 -3 0 -6 92 -6 205 l0 205 68 -41 c37 -23 78 -51 91 -63z m49 -877 l-3 -346 -28 -36 c-54 -71 -4 -67 -840 -67 l-754 0 -33 22 c-18 13 -43 36 -54 51 -21 28 -21 39 -24 498 -1 258 0 469 4 469 4 0 160 -91 348 -202 187 -111 366 -211 396 -221 42 -15 75 -18 140 -15 106 5 104 4 525 261 l320 196 3 -132 c1 -73 1 -288 0 -478z"/></g></svg></span></a>) : (<a href=''><span className='asUnread-mark'><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,156.000000) scale(0.100000,-0.100000)"
fill="" stroke="none"><path d="M204 1501 c-22 -10 -57 -36 -77 -56 -66 -68 -67 -75 -67 -665 0 -590 1 -597 67 -665 77 -79 25 -75 873 -75 710 0 757 2 795 19 50 22 96 67 121 118 18 36 19 68 19 603 0 535 -1 567 -19 603 -25 51 -71 96 -121 118 -38 17 -85 19 -795 19 -714 0 -757 -1 -796 -19z m1586 -73 c54 -37 74 -72 75 -130 l0 -51 -142 -86 c-79 -47 -232 -141 -342 -208 -247 -152 -264 -161 -334 -174 -96 -17 -151 3 -405 154 -122 73 -288 170 -368 217 l-146 85 4 58 c5 64 25 98 78 135 l33 22 757 0 757 0 33 -22z m75 -1195 c-3 -18 -17 -46 -32 -63 -53 -63 -10 -60 -836 -60 l-754 0 -33 22 c-18 13 -43 36 -54 51 -21 28 -21 39 -24 499 -2 447 -2 470 15 464 10 -4 72 -40 138 -80 301 -182 543 -320 591 -337 72 -26 177 -25 247 1 29 11 209 114 398 229 l344 210 3 -452 c1 -249 0 -466 -3 -484z"/></g></svg></span></a>) }</td>
                            </tr>
                            <tr className="active">
                                <td>{currentUser.username}</td>
                                <td><Link to="/message/1" className='link'>Mesajes del comprdor sobre el servicio que adquirido...</Link></td>
                                <td>12/04/2023</td>
                                <td>{currentUser?.isRead ? (<a href=""><span className='asRead-mark' /*style={{width: "25px", height: "25px"}}*/><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" stroke="none">
<path d="M891 1944 c-23 -9 -102 -51 -173 -95 l-131 -79 -74 0 c-110 0 -147 -24 -168 -108 -11 -44 -17 -49 -109 -107 -111 -70 -139 -100 -161 -169 -21 -70 -23 -1108 -1 -1178 19 -65 59 -113 119 -143 l51 -25 755 0 c849 0 797 -4 874 75 66 68 67 74 67 680 0 609 -1 614 -68 680 -20 20 -75 60 -122 88 -75 47 -85 56 -92 90 -18 87 -62 117 -172 117 l-75 0 -129 79 c-71 44 -150 86 -176 95 -58 20 -157 20 -215 0z m200 -66 c19 -6 68 -32 109 -57 l75 -46 -137 -3 c-76 -1 -200 -1 -275 0 l-138 3 75 46 c42 25 89 51 105 57 41 14 144 15 186 0z m473 -189 l26 -21 -2 -296 -3 -295 -195 -120 c-264 -161 -305 -180 -389 -180 -89 1 -128 18 -376 165 l-210 125 -3 301 -2 300 26 21 c26 21 35 21 564 21 529 0 538 0 564 -21z m-1224 -363 l0 -215 -105 62 -105 62 0 58 c0 65 17 112 49 142 18 16 147 101 159 104 1 1 2 -95 2 -213z m1479 110 c33 -30 51 -77 51 -135 l0 -49 -99 -61 c-54 -34 -101 -61 -105 -61 -3 0 -6 92 -6 205 l0 205 68 -41 c37 -23 78 -51 91 -63z m49 -877 l-3 -346 -28 -36 c-54 -71 -4 -67 -840 -67 l-754 0 -33 22 c-18 13 -43 36 -54 51 -21 28 -21 39 -24 498 -1 258 0 469 4 469 4 0 160 -91 348 -202 187 -111 366 -211 396 -221 42 -15 75 -18 140 -15 106 5 104 4 525 261 l320 196 3 -132 c1 -73 1 -288 0 -478z"/></g></svg></span></a>) : (<a href=''><span className='asUnread-mark'><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,156.000000) scale(0.100000,-0.100000)"
fill="" stroke="none"><path d="M204 1501 c-22 -10 -57 -36 -77 -56 -66 -68 -67 -75 -67 -665 0 -590 1 -597 67 -665 77 -79 25 -75 873 -75 710 0 757 2 795 19 50 22 96 67 121 118 18 36 19 68 19 603 0 535 -1 567 -19 603 -25 51 -71 96 -121 118 -38 17 -85 19 -795 19 -714 0 -757 -1 -796 -19z m1586 -73 c54 -37 74 -72 75 -130 l0 -51 -142 -86 c-79 -47 -232 -141 -342 -208 -247 -152 -264 -161 -334 -174 -96 -17 -151 3 -405 154 -122 73 -288 170 -368 217 l-146 85 4 58 c5 64 25 98 78 135 l33 22 757 0 757 0 33 -22z m75 -1195 c-3 -18 -17 -46 -32 -63 -53 -63 -10 -60 -836 -60 l-754 0 -33 22 c-18 13 -43 36 -54 51 -21 28 -21 39 -24 499 -2 447 -2 470 15 464 10 -4 72 -40 138 -80 301 -182 543 -320 591 -337 72 -26 177 -25 247 1 29 11 209 114 398 229 l344 210 3 -452 c1 -249 0 -466 -3 -484z"/></g></svg></span></a>) }</td>
                            </tr>
                            <tr className="active">
                                <td>{currentUser.username}</td>
                                <td><Link to="/message/1" className='link'>Mesajes del comprdor sobre el servicio que adquirido...</Link></td>
                                <td>09/04/2023</td>
                                <td>{currentUser?.isRead ? (<a href=""><span className='asRead-mark' /*style={{width: "25px", height: "25px"}}*/><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" stroke="none">
<path d="M891 1944 c-23 -9 -102 -51 -173 -95 l-131 -79 -74 0 c-110 0 -147 -24 -168 -108 -11 -44 -17 -49 -109 -107 -111 -70 -139 -100 -161 -169 -21 -70 -23 -1108 -1 -1178 19 -65 59 -113 119 -143 l51 -25 755 0 c849 0 797 -4 874 75 66 68 67 74 67 680 0 609 -1 614 -68 680 -20 20 -75 60 -122 88 -75 47 -85 56 -92 90 -18 87 -62 117 -172 117 l-75 0 -129 79 c-71 44 -150 86 -176 95 -58 20 -157 20 -215 0z m200 -66 c19 -6 68 -32 109 -57 l75 -46 -137 -3 c-76 -1 -200 -1 -275 0 l-138 3 75 46 c42 25 89 51 105 57 41 14 144 15 186 0z m473 -189 l26 -21 -2 -296 -3 -295 -195 -120 c-264 -161 -305 -180 -389 -180 -89 1 -128 18 -376 165 l-210 125 -3 301 -2 300 26 21 c26 21 35 21 564 21 529 0 538 0 564 -21z m-1224 -363 l0 -215 -105 62 -105 62 0 58 c0 65 17 112 49 142 18 16 147 101 159 104 1 1 2 -95 2 -213z m1479 110 c33 -30 51 -77 51 -135 l0 -49 -99 -61 c-54 -34 -101 -61 -105 -61 -3 0 -6 92 -6 205 l0 205 68 -41 c37 -23 78 -51 91 -63z m49 -877 l-3 -346 -28 -36 c-54 -71 -4 -67 -840 -67 l-754 0 -33 22 c-18 13 -43 36 -54 51 -21 28 -21 39 -24 498 -1 258 0 469 4 469 4 0 160 -91 348 -202 187 -111 366 -211 396 -221 42 -15 75 -18 140 -15 106 5 104 4 525 261 l320 196 3 -132 c1 -73 1 -288 0 -478z"/></g></svg></span></a>) : (<a href=''><span className='asUnread-mark'><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,156.000000) scale(0.100000,-0.100000)"
fill="" stroke="none"><path d="M204 1501 c-22 -10 -57 -36 -77 -56 -66 -68 -67 -75 -67 -665 0 -590 1 -597 67 -665 77 -79 25 -75 873 -75 710 0 757 2 795 19 50 22 96 67 121 118 18 36 19 68 19 603 0 535 -1 567 -19 603 -25 51 -71 96 -121 118 -38 17 -85 19 -795 19 -714 0 -757 -1 -796 -19z m1586 -73 c54 -37 74 -72 75 -130 l0 -51 -142 -86 c-79 -47 -232 -141 -342 -208 -247 -152 -264 -161 -334 -174 -96 -17 -151 3 -405 154 -122 73 -288 170 -368 217 l-146 85 4 58 c5 64 25 98 78 135 l33 22 757 0 757 0 33 -22z m75 -1195 c-3 -18 -17 -46 -32 -63 -53 -63 -10 -60 -836 -60 l-754 0 -33 22 c-18 13 -43 36 -54 51 -21 28 -21 39 -24 499 -2 447 -2 470 15 464 10 -4 72 -40 138 -80 301 -182 543 -320 591 -337 72 -26 177 -25 247 1 29 11 209 114 398 229 l344 210 3 -452 c1 -249 0 -466 -3 -484z"/></g></svg></span></a>) }</td>
                            </tr>
                            <tr className="active">
                                <td>{currentUser.username}</td>
                                <td><Link to="/message/1" className='link'>Mesajes del comprdor sobre el servicio que adquirido...</Link></td>
                                <td>01/04/2023</td>
                                <td>{currentUser?.isRead ? (<a href=""><span className='asRead-mark' /*style={{width: "25px", height: "25px"}}*/><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" stroke="none">
<path d="M891 1944 c-23 -9 -102 -51 -173 -95 l-131 -79 -74 0 c-110 0 -147 -24 -168 -108 -11 -44 -17 -49 -109 -107 -111 -70 -139 -100 -161 -169 -21 -70 -23 -1108 -1 -1178 19 -65 59 -113 119 -143 l51 -25 755 0 c849 0 797 -4 874 75 66 68 67 74 67 680 0 609 -1 614 -68 680 -20 20 -75 60 -122 88 -75 47 -85 56 -92 90 -18 87 -62 117 -172 117 l-75 0 -129 79 c-71 44 -150 86 -176 95 -58 20 -157 20 -215 0z m200 -66 c19 -6 68 -32 109 -57 l75 -46 -137 -3 c-76 -1 -200 -1 -275 0 l-138 3 75 46 c42 25 89 51 105 57 41 14 144 15 186 0z m473 -189 l26 -21 -2 -296 -3 -295 -195 -120 c-264 -161 -305 -180 -389 -180 -89 1 -128 18 -376 165 l-210 125 -3 301 -2 300 26 21 c26 21 35 21 564 21 529 0 538 0 564 -21z m-1224 -363 l0 -215 -105 62 -105 62 0 58 c0 65 17 112 49 142 18 16 147 101 159 104 1 1 2 -95 2 -213z m1479 110 c33 -30 51 -77 51 -135 l0 -49 -99 -61 c-54 -34 -101 -61 -105 -61 -3 0 -6 92 -6 205 l0 205 68 -41 c37 -23 78 -51 91 -63z m49 -877 l-3 -346 -28 -36 c-54 -71 -4 -67 -840 -67 l-754 0 -33 22 c-18 13 -43 36 -54 51 -21 28 -21 39 -24 498 -1 258 0 469 4 469 4 0 160 -91 348 -202 187 -111 366 -211 396 -221 42 -15 75 -18 140 -15 106 5 104 4 525 261 l320 196 3 -132 c1 -73 1 -288 0 -478z"/></g></svg></span></a>) : (<a href=''><span className='asUnread-mark'><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,156.000000) scale(0.100000,-0.100000)"
fill="" stroke="none"><path d="M204 1501 c-22 -10 -57 -36 -77 -56 -66 -68 -67 -75 -67 -665 0 -590 1 -597 67 -665 77 -79 25 -75 873 -75 710 0 757 2 795 19 50 22 96 67 121 118 18 36 19 68 19 603 0 535 -1 567 -19 603 -25 51 -71 96 -121 118 -38 17 -85 19 -795 19 -714 0 -757 -1 -796 -19z m1586 -73 c54 -37 74 -72 75 -130 l0 -51 -142 -86 c-79 -47 -232 -141 -342 -208 -247 -152 -264 -161 -334 -174 -96 -17 -151 3 -405 154 -122 73 -288 170 -368 217 l-146 85 4 58 c5 64 25 98 78 135 l33 22 757 0 757 0 33 -22z m75 -1195 c-3 -18 -17 -46 -32 -63 -53 -63 -10 -60 -836 -60 l-754 0 -33 22 c-18 13 -43 36 -54 51 -21 28 -21 39 -24 499 -2 447 -2 470 15 464 10 -4 72 -40 138 -80 301 -182 543 -320 591 -337 72 -26 177 -25 247 1 29 11 209 114 398 229 l344 210 3 -452 c1 -249 0 -466 -3 -484z"/></g></svg></span></a>) }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>)}
        </div> 
    );
}

export default Messages;