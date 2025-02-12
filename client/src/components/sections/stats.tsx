import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "98%", label: "Prediction Accuracy" },
  { value: "24/7", label: "Real-time Monitoring" },
  { value: "100TB+", label: "Data Processed Daily" }
];

export default function Stats() {
  return (
    <section id="stats" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 border-none">
                <CardContent className="text-center p-6">
                  <div className="text-4xl font-bold">{stat.value}</div>
                  <div className="mt-2 text-white/80">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
