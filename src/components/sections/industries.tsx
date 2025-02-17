import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
  {
    title: "Manufacturing",
    image: "https://images.unsplash.com/photo-1469289759076-d1484757abc3",
    description: "Optimize production processes with real-time monitoring and predictive maintenance."
  },
  {
    title: "Retail",
    image: "https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1",
    description: "Enhance customer experience and inventory management with data-driven insights."
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Industries We Serve</h2>
          <p className="mt-4 text-xl text-gray-600">
            Trusted by over 500 enterprise clients globally
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-0">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold">{industry.title}</h3>
                    <p className="mt-2 text-gray-600">{industry.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
