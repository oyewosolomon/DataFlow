import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ScheduleDemoForm } from "@/components/schedule-demo-form";

export default function Hero() {
  const ParticleBackground = () => {
    const particles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 3, // 3-8px size range
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 15 // 10-25s duration
    }));
  
    return (
      <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-gray-400/40 rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              x: [`0px`, `${Math.random() * 100 - 50}px`, `0px`],
              y: [`0px`, `${Math.random() * 100 - 50}px`, `0px`],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  };


  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 p-10 rounded-lg gap-12 items-center relative">
          {/* Background with higher z-index */}
          <div className="absolute inset-0 bg-gray-200 rounded-lg -z-10" />
          <ParticleBackground />
          
          {/* Content with explicit z-index */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10" // Added z-10
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Enterprise Data Analytics Platform
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Integrate IoT sensors, cloud storage, and AI analysis tools for real-time data processing with 98% accuracy.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <Button size="lg">Get Started</Button>
              <ScheduleDemoForm />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10" // Added z-10
          >
            <img
              src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4"
              alt="Analytics Dashboard"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}