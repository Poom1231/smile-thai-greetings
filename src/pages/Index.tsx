
import React, { useState } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import WelcomeBlog from '../components/WelcomeBlog';
import ExhibitorDelight from '../components/ExhibitorDelight';
import HighlightsActivities from '../components/HighlightsActivities';
import AttendeeTerritory from '../components/AttendeeTerritory';
import WhatToExpect from '../components/WhatToExpect';
import KeySpeakers from '../components/KeySpeakers';
import CoLocated from '../components/CoLocated';
import ProductHighlights from '../components/ProductHighlights';
import SupportingOrganizations from '../components/SupportingOrganizations';
import MediaSupporters from '../components/MediaSupporters';
import Footer from '../components/Footer';

const Index = () => {
  const [language, setLanguage] = useState('th');

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage} />
      <Banner />
      <WelcomeBlog language={language} />
      <ExhibitorDelight language={language} />
      <HighlightsActivities language={language} />
      <AttendeeTerritory language={language} />
      <WhatToExpect language={language} />
      <KeySpeakers language={language} />
      <CoLocated language={language} />
      <ProductHighlights language={language} />
      <SupportingOrganizations />
      <MediaSupporters />
      <Footer language={language} />
    </div>
  );
};

export default Index;
