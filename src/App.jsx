import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar, { ContactModal } from './components/Navbar';
import Hero from './components/Hero';
import HorizontalScroll from './components/HorizontalScroll';
import Footer from './components/Footer';
import AIOpportunity from './components/AIOpportunity';
import BusinessContext from './components/BusinessContext';
import AgentMonitoring from './components/AgentMonitoring';
import Engineering from './components/Engineering';
import PIHub from './components/PIHub';
import SectionPage from './components/SectionPage';
import './index.css';

function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
      <Navbar onContactClick={() => setContactOpen(true)} />
      <Hero />
      <HorizontalScroll />
      <Footer onContactClick={() => setContactOpen(true)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ai-opportunity" element={
        <SectionPage><AIOpportunity /></SectionPage>
      } />
      <Route path="/business-context" element={
        <SectionPage><BusinessContext /></SectionPage>
      } />
      <Route path="/agent-monitoring" element={
        <SectionPage><AgentMonitoring /></SectionPage>
      } />
      <Route path="/engineering" element={
        <SectionPage><Engineering /></SectionPage>
      } />
      <Route path="/pi-hub" element={
        <SectionPage><PIHub /></SectionPage>
      } />
    </Routes>
  );
}
