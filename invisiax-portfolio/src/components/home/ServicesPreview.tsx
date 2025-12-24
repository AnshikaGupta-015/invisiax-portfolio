import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Palette, 
  Smartphone, 
  Cloud, 
  Brain,
  ArrowRight 
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies for optimal performance and scalability.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality for exceptional digital experiences.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions that deliver seamless experiences across all devices.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Infrastructure automation and cloud solutions that ensure reliability and performance at scale.",
  },
  {
    icon: Brain,
    title: "AI & Data",
    description: "Intelligent solutions powered by machine learning and data analytics to drive business growth.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          badge="Our Services"
          title="What We Do Best"
          description="We deliver comprehensive technology solutions tailored to your business needs, from concept to deployment and beyond."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover-glow">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: services.length * 0.1 }}
          >
            <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 flex flex-col justify-center items-center text-center">
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Ready to Start?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can help transform your business.
              </p>
              <Button variant="hero" asChild>
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
