import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustInfo from '../components/TrustInfo';
import Footer from '../components/Footer';
import ProblemSection from '../components/ProblemSection';
import ProgramsSection from '../components/ProgramsSection';
import SocialProveSection from '../components/SocialProveSection';
import TargetAudienceSection from '../components/TargetAudienceSection';
import MentorSection from '../components/MentorSection';
import FinalCtaSection from '../components/FinalCtaSection';

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='min-h-screen bg-brand-dark flex flex-col'>
      <main className='grow'>
        <Hero />
        <MentorSection />
        <ProblemSection />
        <ProgramsSection />
        <SocialProveSection />
        <TargetAudienceSection />
        <FinalCtaSection />
        <TrustInfo />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
