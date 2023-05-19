import React from 'react';
import './MyGigs.scss';
import { Link } from 'react-router-dom';
import GigImage from '../../assets/img/slide-19.webp';
import EditImage from '../../assets/img/document-edit.png';
import DeleteImage from '../../assets/img/delete.png';
import { useTranslation } from 'react-i18next';
import getCurrentUser from '../../utils/getCurrentUser';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';

function MyGigs() {
    const {t, i18n} = useTranslation();

    const currentUser = getCurrentUser();

    const queryClient = useQueryClient();

    const {isLoading, error, data} = useQuery({
        queryKey: ['myGigs'], queryFn: () => 
            newRequest.get(`/gigs?=userdId=${currentUser?.id}`).then((res) => {
                return res.data;
            }),
    });

    const mutationDelete = useMutation({
        mutationFn: (id) => {
            return newRequest.delete(`/gigs/${id}`);
        }, onSuccess: () => {
            queryClient.invalidateQueries(['myGigs']);
        },
    });

    const handleDelete = (id) => {
        mutationDelete.mutate(id);
    }
    return (
        <div className='myGigsContainer'>
            {isLoading ? (t("loadingContentMessage")) : error ? (t("somethingWentWrongContentMessage")) : ( <div className='myGigsWrapper'>
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
                            {data?.map((gig) => (<tr key={gig._id}>
                                <td className='image'><img className='gigImage' src={gig.cover} alt={t("altGigCoverImage")} /></td>
                                <td className='title'>{gig.title}</td>
                                <td className='desc'>{gig.desc}</td>
                                <td className='price'>{gig.price} €</td>
                                <td className='sales'>{gig.sales}</td>
                                <td>{/* <button type='button' onClick={() => handleEdit(gig._id)}><img className='gigEdit' src={EditImage} alt="" /></button>  */}
                                <button type='button' onClick={() => handleDelete(gig._id)}><img className='gigDelete' src={DeleteImage} alt="" /></button></td>
                            </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>)}
        </div> 
    );
}

export default MyGigs;