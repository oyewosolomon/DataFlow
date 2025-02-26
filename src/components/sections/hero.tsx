import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ScheduleDemoForm } from "@/components/schedule-demo-form";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 bg-gray-200 p-10 rounded-lg gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Enterprise Data Analytics Platform
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Integrate IoT sensors, cloud storage, and AI analysis tools for real-time data processing with 98% accuracy.
            </p>
            <div className="mt-8 flex  flex- gap-2">
              <Button size="lg">Get Started</Button>
              <ScheduleDemoForm />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
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
