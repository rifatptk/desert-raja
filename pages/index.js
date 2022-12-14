import Head from 'next/head';
import Container from '../components/common/Container';
import Activities from '../components/homepage/activities/Activities';
import BookTheBest from '../components/homepage/BookTheBest';
import ExploreOurDesert from '../components/homepage/ExploreOurDesert';
import WhyChoose from '../components/homepage/WhyChoose';
import Hero from '../components/homepage/Hero';
import Discount from '../components/homepage/Discount';
import Instagram from '../components/homepage/instagram/Instagram';
import { homepageHeadData } from '../constants/constants';
import Accordion from '../components/homepage/accordion/Accordion';

export default function Home() {
  return (
    <div>
      <Head>{homepageHeadData}</Head>
      <Hero />
      <BookTheBest />
      <ExploreOurDesert />
      <WhyChoose />
      <Container>
        <Activities />
      </Container>
      <Discount />
      <Accordion />
      <Container>
        <Instagram />
      </Container>
    </div>
  );
}
