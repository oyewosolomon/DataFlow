import { motion } from "framer-motion";
import { 
  BarChart3, 
  Cloud, 
  Cpu, 
  LineChart,
  Activity,
  AlertCircle
} from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Real-time Analytics",
    description: "Monitor and analyze data streams in real-time with advanced visualization tools."
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud Storage",
    description: "Secure and scalable cloud storage solution for your enterprise data needs."
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "IoT Integration",
    description: "Seamless integration with IoT sensors for comprehensive data collection."
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "Predictive Analytics",
    description: "AI-powered predictions with 98% accuracy for informed decision making."
  },
  {
    icon: <Activity className="h-8 w-8" />,
    title: "Performance Monitoring",
    description: "Track system performance and receive real-time alerts and notifications."
  },
  {
    icon: <AlertCircle className="h-8 w-8" />,
    title: "Automated Reporting",
    description: "Generate comprehensive reports automatically with customizable templates."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Powerful Features
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to analyze and optimize your data
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-primary">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
