import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, TrendingUp, Clock, Award } from "lucide-react";

const caseStudies = [
  {
    client: "TechManufacturing Co.",
    industry: "Manufacturing",
    challenge: "Needed to optimize production efficiency and reduce downtime",
    solution: "Implemented real-time sensor monitoring and predictive maintenance",
    results: [
      "30% reduction in machine downtime",
      "25% increase in production efficiency",
      "$2M annual cost savings"
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    client: "GlobalRetail Inc.",
    industry: "Retail",
    challenge: "Required better inventory management and demand forecasting",
    solution: "Deployed AI-powered analytics for inventory optimization",
    results: [
      "40% reduction in stockouts",
      "20% decrease in excess inventory",
      "15% increase in sales"
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8"
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold">Success Stories</h2>
            <p className="mt-4 text-xl text-gray-600">
              See how leading companies achieve excellence with DataFlow
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="aspect-video mb-6 overflow-hidden rounded-lg">
                    <img
                      src={study.image}
                      alt={study.client}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-semibold">{study.client}</h3>
                      <Badge variant="secondary">{study.industry}</Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Clock className="w-5 h-5 mt-1 text-gray-400" />
                        <div>
                          <p className="font-medium">Challenge</p>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <TrendingUp className="w-5 h-5 mt-1 text-gray-400" />
                        <div>
                          <p className="font-medium">Solution</p>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <Award className="w-5 h-5 mt-1 text-gray-400" />
                        <div>
                          <p className="font-medium">Key Results</p>
                          <ul className="text-gray-600 list-none space-y-1">
                            {study.results.map((result, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <ChevronRight className="w-4 h-4 text-primary" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
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
