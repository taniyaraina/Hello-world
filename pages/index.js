import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Clients from '../components/clients';
import Features from '../components/features';
import Newsletter from '../components/newsletter';
import Testimonial from '../components/testimonial';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Clients />
      <Features />
      <Testimonial />
      <Newsletter />
    </Layout>
  );
};

export default Index;
