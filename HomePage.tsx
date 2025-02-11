import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import AudienceSegments from '../components/AudienceSegments';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import SuccessStories from '../components/SuccessStories';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <AudienceSegments />
        <HowItWorks />
        <Pricing />
        <SuccessStories />
        <Testimonials />
        <FAQ />
        <Contact />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;