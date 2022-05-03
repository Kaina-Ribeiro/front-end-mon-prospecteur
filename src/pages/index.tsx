import Head from 'next/head';
import { ReactElement } from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <>
      <h1>Title</h1>
    </>
  );
};

export default Home;
Home.getLayout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>Mon Prospecteur</title>
      </Head>
      <Layout>{page}</Layout>
    </>
  );
};
