import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

import Faq from '../sections/Faq';
import About from '../sections/About';
import Landing from '../sections/Landing';
import Rules from '../sections/Rules';
import Social from '../sections/Social';
import Sponsors from '../sections/Sponsors';
import Tracks from '../sections/Tracks';

const Home = () => {
  return (
    <>
      <Landing />
      <Header home={true} />
      <main className='mt-6'>
        <About />
        <Rules />
        <Tracks />
        <Sponsors />
        <Faq />
        <Social />
        <Social />
      </main>
      <Footer />
    </>
  );
};

export default Home;
