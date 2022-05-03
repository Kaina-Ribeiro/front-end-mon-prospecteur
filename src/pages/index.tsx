import Head from 'next/head';
import { ReactElement } from 'react';
import SearchForm from '../components/SearchForm';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <>
      <SearchForm />
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
