import Head from 'next/head';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Container from '../components/common/Container';
import Activities from '../components/homepage/activities/Activities';
import BookTheBest from '../components/homepage/BookTheBest';
import ExploreOurDesert from '../components/homepage/ExploreOurDesert';
import WhyChoose from '../components/homepage/WhyChoose';
import Hero from '../components/homepage/Hero';
import Discount from '../components/homepage/Discount';
import Instagram from '../components/homepage/instagram/Instagram';
import { homepageHeadData } from '../constants/constants';


export default function Home() {
  const [isFlipped, setisFlipped] = useState(false);
  return (
    <div>
      <Head>{homepageHeadData}</Head>
      <Hero />
      <Container>
        <Activities />
        <Instagram />
      </Container>
      <ExploreOurDesert />
      <WhyChoose />
      <Discount />
    </div>
  );
}
