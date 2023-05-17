import React from 'react';
import './Home.scss';
import Featured from '../../components/Featured/Featured';
import TrustedBy from '../../components/TrustedBy/TrustedBy';
import Slide from '../../components/Slide/Slide';
// import {cards} from '../../data/dummyData';
// import {cardsCA} from '../../data/dummyDataCA';
// import {cardsDE} from '../../data/dummyDataDE';
// import {cardsEN} from '../../data/dummyDataEN';
// import {cardsES} from '../../data/dummyDataES';
// import {testimonials} from '../../data/dummyData';
import {testimonialsCA} from '../../data/dummyDataCA';
import {testimonialsDE} from '../../data/dummyDataDE';
import {testimonialsEN} from '../../data/dummyDataEN';
import {testimonialsES} from '../../data/dummyDataES';
// import {projects} from '../../data/dummyData';
import {projectsCA} from '../../data/dummyDataCA';
import {projectsDE} from '../../data/dummyDataDE';
import {projectsEN} from '../../data/dummyDataEN';
import {projectsES} from '../../data/dummyDataES';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import FeaturesOne from '../../components/FeaturesOne/FeaturesOne';
import FeaturesTwo from '../../components/FeaturesTwo/FeaturesTwo';
import ExplorePlatform from '../../components/ExplorePlatform/ExplorePlatform';
import TestimonialsCard from '../../components/TestimonialsCard/TestimonialsCard';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

import i18n from '../../i18n';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { useTranslation } from 'react-i18next';

function Home() {

    const {t, i18n} = useTranslation();

    //let cards;
    let testimonials;
    let projects;

    if (i18n.language === "cat") {
        //cards = cardsCA;
        testimonials = testimonialsCA;
        projects = projectsCA;
    } else if(i18n.language === "de") {
        //cards = cardsDE;
        testimonials = testimonialsDE;
        projects = projectsDE;
    } else if(i18n.language === "en") {
        //cards = cardsEN;
        testimonials = testimonialsEN;
        projects = projectsEN;
    } else if (i18n.language === "es") {
        //cards = cardsES;
        testimonials = testimonialsES;
        projects = projectsES;
    } else {
        //cards = cardsES;
        testimonials = testimonialsES;
        projects = projectsES;
    }

    const {isLoading, error, data} = useQuery({
        queryKey: ['gigs'], queryFn: () => 
            newRequest.get(`gigs`).then((res) => {
                return res.data;
            }),
    });
    return (
        <>
            <Featured />
            <TrustedBy />
            <div className="categoryCardContainer">
                {isLoading ? (t("loadingContentMessage")) : error ? (t("somethingWentWrongContentMessage")) : (<div className="categoryCardWrapper">
                    <h2>Servicios populares</h2>
                    <Slide slidesToShow={5} arrowsScroll={5}>
                        {/* LOS DATOS SE MOSTRADOS AQUÍ SE OBTENIAN DE LOS ARCHIVOS cardsCA, cardsDE, cardsEN Y cardsES */}
                        {data?.map((card) => (
                            <CategoryCard item={card} key={card._id} />
                        ))}
                    </Slide>
                </div>)}
            </div>
            <FeaturesOne />
            <ExplorePlatform />
            <FeaturesTwo />
            <Slide slidesToShow={1} arrowsScroll={1}>
                {testimonials.map((testimonial) => (
                    <TestimonialsCard item={testimonial} key={testimonial.id} />
                ))}
            </Slide>
            <div className='projectCardContainer'>
                <div className="projectCardWrapper">
                    <h2>Trabajo inspirador Made on Fiverr</h2>
                    <Slide slidesToShow={4} arrowsScroll={4}>
                        {projects.map((project) => (
                            <ProjectCard item={project} key={project.id} />
                        ))}
                    </Slide>
                </div>
            </div>
        </>
    );
}

export default Home;