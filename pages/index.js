import Head from 'next/head';
import Container from '../components/common/Container';
import BookTheBest from '../components/homepage/BookTheBest';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Desert Raja</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1 className="text-4xl font-bold">hello world</h1>
        <BookTheBest />
      </Container>
    </div>
  );
}
