import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../../../components/ui/Container';
import Button from '../../../components/ui/Button';

interface HeroSectionProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  featuresRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
  aboutRef: React.RefObject<HTMLElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  scrollToSection, 
  featuresRef, 
  contactRef 
}) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-32 -right-32 rounded-full bg-gradient-to-br from-blue-100/40 to-teal-100/40 blur-3xl animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] top-1/2 -left-32 rounded-full bg-gradient-to-br from-orange-100/30 to-pink-100/30 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-[200px] h-[200px] bottom-0 right-1/4 rounded-full bg-gradient-to-br from-purple-100/20 to-blue-100/20 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Mesh Grid Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-blue-50 border border-blue-100">
              <span className="text-blue-600 text-sm font-medium"> AI-Powered Healthcare</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="relative">
                <span className="relative z-10">Empowering</span>
                <div className="absolute bottom-2 left-0 w-full h-3 bg-teal-200/30 -rotate-1"></div>
              </span>{' '}
              Your Health Journey with AI
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Personalized healthcare insights, smart wellness tracking, and AI-powered recommendations to help you live your healthiest life.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Button 
                onClick={() => scrollToSection(contactRef)} 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => scrollToSection(featuresRef)}
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto border-2"
              >
                Discover Features
              </Button>
            </div>
            <p className="text-gray-500 text-sm mt-4">No credit card required • Free 14-day trial</p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm rounded-xl transform -rotate-3"></div>
              <div className="rounded-xl shadow-xl bg-white p-2 max-w-md relative z-10">
                <img 
                  src="https://img.freepik.com/free-photo/person-using-ar-technology-perform-their-occupation_23-2151137451.jpg" 
                  alt="Health tracking dashboard" 
                  className="rounded-lg w-full h-auto"
                  width="600"
                  height="500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges with enhanced styling */}
        <div className="mt-16 border-t border-gray-200/50 pt-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>
          <p className="text-center text-gray-500 text-sm mb-4 relative z-10">Trusted by leading healthcare providers</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70 relative z-10">
            <div className="h-8 text-gray-400 font-semibold bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text text-transparent">HealthPartners</div>
            <div className="h-8 text-gray-400 font-semibold bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text text-transparent">MediCare Plus</div>
            <div className="h-8 text-gray-400 font-semibold bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text text-transparent">CareAlliance</div>
            <div className="h-8 text-gray-400 font-semibold bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text text-transparent">WellTrack</div>
            <div className="h-8 text-gray-400 font-semibold bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text text-transparent">FitMed Group</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;