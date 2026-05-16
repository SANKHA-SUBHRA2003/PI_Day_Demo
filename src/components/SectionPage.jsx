import { useState } from 'react';
import Navbar, { ContactModal } from './Navbar';
import Footer from './Footer';
import './Section.css';

export default function SectionPage({ children }) {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar onContactClick={() => setContactOpen(true)} />
      <div style={{ paddingTop: 'var(--nav-height)' }}>
        {children}
      </div>
      <Footer onContactClick={() => setContactOpen(true)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
