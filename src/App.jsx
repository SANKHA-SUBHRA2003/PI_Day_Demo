import { useState } from 'react';
import Navbar, { ContactModal } from './components/Navbar';
import Hero from './components/Hero';
import HorizontalScroll from './components/HorizontalScroll';
import AIOpportunity from './components/AIOpportunity';
import BusinessContext from './components/BusinessContext';
import AgentMonitoring from './components/AgentMonitoring';
import Engineering from './components/Engineering';
import RiskCompliance from './components/RiskCompliance';
import './index.css';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
      <Navbar onContactClick={() => setContactOpen(true)} />
      <Hero />
      <HorizontalScroll />
      <AIOpportunity />
      <BusinessContext />
      <AgentMonitoring />
      <Engineering />
      <RiskCompliance />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
