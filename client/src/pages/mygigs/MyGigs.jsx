import React from 'react';
import './MyGigs.scss';
import { Link } from 'react-router-dom';
import GigImage from '../../assets/img/slide-19.webp';
import EditImage from '../../assets/img/document-edit.png';
import DeleteImage from '../../assets/img/delete.png';

function MyGigs() {
    return (
        <div className='myGigsContainer'>
            <div className='myGigsWrapper'>
                <div className="myGigsTitleContainer">
                    <h1>{t("myGigsPageTitle")}</h1>
                    <Link className='link addNewGigBtn' to="/add">{t("addingNewGigBtn")}</Link>
                </div>
                <div className="myGigsTableContainer">
                    <table> 
                        <thead>
                            <tr>
                                <th>{t("myGigsTableHeadingImage")}</th>
                                <th>{t("myGigsTableHeadingTitle")}</th>
                                <th>{t("myGigsTableHeadingDescription")}</th>
                                <th>{t("myGigsTableHeadingPrice")}</th>
                                <th>{t("myGigsTableHeadingSales")}</th>
                                <th>{t("myGigsTableHeadingActions")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='image'><img className='gigImage' src={GigImage} alt="" /></td>
                                <td className='title'>Título del servicio ofrecido</td>
                                <td className='desc'>Descripción del servicio que realizo...</td>
                                <td className='price'>20,99 €</td>
                                <td className='sales'>15</td>
                                <td><a href=""><img className='gigEdit' src={EditImage} alt="" /></a> <a href=""><img className='gigDelete' src={DeleteImage} alt="" /></a></td>
                            </tr>
                            <tr>
                                <td><img className='gigImage' src={GigImage} alt="" /></td>
                                <td>Título del servicio ofrecido</td>
                                <td>Descripción del servicio que realizo...</td>
                                <td>20,99 €</td>
                                <td>15</td>
                                <td><a href=""><img className='gigEdit' src={EditImage} alt="" /></a> <a href=""><img className='gigDelete' src={DeleteImage} alt="" /></a></td>
                            </tr>
                            <tr>
                                <td><img className='gigImage' src={GigImage} alt="" /></td>
                                <td>Título del servicio ofrecido</td>
                                <td>Descripción del servicio que realizo...</td>
                                <td>20,99 €</td>
                                <td>15</td>
                                <td><a href=""><img className='gigEdit' src={EditImage} alt="" /></a> <a href=""><img className='gigDelete' src={DeleteImage} alt="" /></a></td>
                            </tr>
                            <tr>
                                <td><img className='gigImage' src={GigImage} alt="" /></td>
                                <td>Título del servicio ofrecido</td>
                                <td>Descripción del servicio que realizo...</td>
                                <td>20,99 €</td>
                                <td>15</td>
                                <td><a href=""><img className='gigEdit' src={EditImage} alt="" /></a> <a href=""><img className='gigDelete' src={DeleteImage} alt="" /></a></td>
                            </tr>
                            <tr>
                                <td><img className='gigImage' src={GigImage} alt="" /></td>
                                <td>Título del servicio ofrecido</td>
                                <td>Descripción del servicio que realizo...</td>
                                <td>20,99 €</td>
                                <td>15</td>
                                <td><a href=""><img className='gigEdit' src={EditImage} alt="" /></a> <a href=""><img className='gigDelete' src={DeleteImage} alt="" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div> 
    );
}

export default MyGigs;