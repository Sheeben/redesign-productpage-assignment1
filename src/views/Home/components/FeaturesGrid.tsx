import React from 'react';
import { 
  HeartPulse, 
  BrainCircuit, 
  LineChart, 
  ClipboardList, 
  Bell, 
  Smartphone 
} from 'lucide-react';
import Container from '../../../components/ui/Container';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-purple-200 bg-gradient-to-r rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center p-3 mb-4 bg-gradient-to-br from-purple-100 to-purple-50 text-purple-600 rounded-lg group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Health Monitoring",
      description: "Track vital signs, activity levels, and sleep patterns with our real-time monitoring system."
    },
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: "AI Health Assistant",
      description: "Get personalized health insights and recommendations powered by our advanced AI algorithms."
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Progress Tracking",
      description: "Visualize your health journey with intuitive charts and progress indicators."
    },
    {
      icon: <ClipboardList className="h-6 w-6" />,
      title: "Personalized Plans",
      description: "Receive customized wellness plans tailored to your specific health goals and needs."
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Smart Reminders",
      description: "Never miss medications or appointments with intelligent notification systems."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Access",
      description: "Access your health data anytime, anywhere with our user-friendly mobile application."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute w-[600px] h-[600px] -top-48 -right-48 rounded-full bg-gradient-to-br from-blue-100/20 to-teal-100/20 blur-3xl"></div>
        <div className="absolute w-[400px] h-[400px] -bottom-32 -left-32 rounded-full bg-gradient-to-br from-purple-100/20 to-pink-100/20 blur-2xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Health Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform provides everything you need to monitor, improve, and maintain your health with cutting-edge AI technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesGrid;