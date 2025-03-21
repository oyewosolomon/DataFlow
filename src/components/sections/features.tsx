import { motion } from "framer-motion";
import { 
  BarChart3, 
  Cloud, 
  Cpu, 
  LineChart,
  Activity,
  AlertCircle
} from "lucide-react";
import { ReactNode } from "react";

// Define the type for the FeatureCard props
interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500  max-md:mx-auto md:h-64 hover:bg-blue-600">
      <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
        {icon}
      </div>
      <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
        {title}
      </h4>
      <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
        {description}
      </p>
    </div>
  );
};

// Define the type for the features array
interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Real-time Analytics",
    description: "Monitor and analyze data streams in real-time with advanced visualization tools.",
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud Storage",
    description: "Secure and scalable cloud storage solution for your enterprise data needs.",
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "IoT Integration",
    description: "Seamless integration with IoT sensors for comprehensive data collection.",
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "Predictive Analytics",
    description: "AI-powered predictions with 98% accuracy for informed decision making.",
  },
  {
    icon: <Activity className="h-8 w-8" />,
    title: "Performance Monitoring",
    description: "Track system performance and receive real-time alerts and notifications.",
  },
  {
    icon: <AlertCircle className="h-8 w-8" />,
    title: "Automated Reporting",
    description: "Generate comprehensive reports automatically with customizable templates.",
  },
];

export default function Features() {
  return (
    <section className="py-24" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
              Empower Your Business with Advanced Features
            </h2>
          </div>
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <p className="text-lg font-normal text-gray-500 mb-5">
              Unlock the full potential of your business with our cutting-edge solutions designed to streamline operations and drive growth.
            </p>
            <a href="#" className="flex flex-row items-center justify-center gap-2 text-base font-semibold text-indigo-600 lg:justify-start hover:text-indigo-700">
              Explore Features
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-center items-center ">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
}