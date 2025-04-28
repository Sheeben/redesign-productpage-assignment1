import React, { useRef, useEffect } from 'react';
import Header from '../src/components/layouts/Header';
import HeroSection from '../src/views/Home/components/HeroSection';
import FeaturesGrid from '../src/views/Home/components/FeaturesGrid';
import InfoSection from '../src/views/Home/components/InfoSection';
import HomeFAQ from '../src/views/Home/components/HomeFAQ';
import ContactForm from '../src/views/Home/components/ContactForm';
import Footer from '../src/components/layouts/Footer';

function App() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 flex flex-col">
      <Header 
        scrollToSection={scrollToSection}
        featuresRef={featuresRef}
        contactRef={contactRef}
        aboutRef={aboutRef}
        faqRef={faqRef}
        homeRef={homeRef}
      />
      
      <main className="flex-grow">
        <div ref={homeRef}>
          <HeroSection 
            scrollToSection={scrollToSection}
            featuresRef={featuresRef}
            contactRef={contactRef}
            aboutRef={aboutRef}
          />
        </div>
        
        <div ref={featuresRef}>
          <FeaturesGrid />
        </div>
        
        <div ref={aboutRef}>
          <InfoSection />
        </div>
        
        <div ref={faqRef}>
          <HomeFAQ />
        </div>
        
        <div ref={contactRef}>
          <ContactForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;