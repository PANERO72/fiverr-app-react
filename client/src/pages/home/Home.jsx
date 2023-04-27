import React from 'react';
import './Home.scss';
import Featured from '../../components/Featured/Featured';
import TrustedBy from '../../components/TrustedBy/TrustedBy';
import Slide from '../../components/Slide/Slide';
// import {cards} from '../../data/dummyData';
import {cardsCA} from '../../data/dummyDataCA';
import {cardsDE} from '../../data/dummyDataDE';
import {cardsEN} from '../../data/dummyDataEN';
import {cardsES} from '../../data/dummyDataES';
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

function Home() {

  let cards;
  let testimonials;
  let projects;

  if (i18n.language === "ca") {
		cards = cardsCA;
    testimonials = testimonialsCA;
    projects = projectsCA;
	} else if(i18n.language === "de") {
		cards = cardsDE;
    testimonials = testimonialsDE;
    projects = projectsDE;
	} else if(i18n.language === "en") {
		cards = cardsEN;
    testimonials = testimonialsEN;
     projects = projectsEN;
	} else if (i18n.language === "es") {
		cards = cardsES;
    testimonials = testimonialsES;
     projects = projectsES;
	}
  return (
    <>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
          {cards.map((card) => (
              <CategoryCard item={card} key={card.id} />
          ))}
      </Slide>
      <FeaturesOne />
      <ExplorePlatform />
      <FeaturesTwo />
      <Slide slidesToShow={1} arrowsScroll={1}>
        {testimonials.map((testimonial) => (
          <TestimonialsCard item={testimonial} key={testimonial.id} />
        ))}
      </Slide>
      <div className='projectCardContainer'>
        <Slide slidesToShow={4} arrowsScroll={4}>
          {projects.map((project) => (
            <ProjectCard item={project} key={project.id} />
          ))}
        </Slide>
      </div>
    </>
  );
}

export default Home;