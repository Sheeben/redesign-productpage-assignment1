import React from 'react';
import { CheckCircle } from 'lucide-react';
import Container from '../../../components/ui/Container';
import Button from '../../../components/ui/Button';


const InfoSection: React.FC = () => {
  const benefits = [
    "24/7 health monitoring and insights",
    "Personalized AI recommendations",
    "Integration with 100+ health devices",
    "HIPAA-compliant data security",
    "Regular wellness reports and analysis",
    "Direct connection to healthcare providers"
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Future of Healthcare Is <span className="text-blue-600">Personal</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              GoGetWell-ai combines cutting-edge artificial intelligence with decades of medical expertise to provide you with a truly personalized healthcare experience.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our platform learns from your unique health data to deliver insights and recommendations that are specifically tailored to your body, lifestyle, and goals.
            </p>
            
            <ul className="mb-8 space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button size="lg">Learn More About Our Approach</Button>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-blue-100 rounded-xl"></div>
              <img 
                src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Doctor with patient reviewing health data" 
                className="rounded-xl relative z-10 w-full h-auto"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
      </Container>
      
      {/* Testimonial */}
      <Container className="mt-24">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 mx-auto mb-4 text-blue-100 opacity-80" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-xl md:text-2xl font-medium mb-6">
              "GoGetWell-ai has transformed how I approach my health. The personalized insights have helped me make meaningful lifestyle changes that have significantly improved my well-being."
            </p>
            <div className="flex items-center justify-center">
              <img 
                className="w-12 h-12 rounded-full mr-4" 
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Sarah Johnson" 
              />
              <div className="text-left">
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-blue-100">Member since 2023</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default InfoSection;