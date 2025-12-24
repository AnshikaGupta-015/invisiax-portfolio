import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Linkedin, Twitter } from "lucide-react";

const founders = [
  {
    name: "Placeholder Name",
    role: "Founder & CEO",
    image: "/placeholder.svg",
    description:
      "A visionary leader with extensive experience in building scalable technology products. Passionate about leveraging AI to create meaningful social connections. Previously led product teams at leading tech companies and holds a strong background in strategic growth and innovation.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Placeholder Name",
    role: "Co-Founder & CTO",
    image: "/placeholder.svg",
    description:
      "A technical expert with deep expertise in AI/ML systems and distributed architectures. Brings years of experience in building high-performance platforms that scale to millions of users. Committed to creating technology that respects user privacy while delivering personalized experiences.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Placeholder Name",
    role: "Co-Founder & CMO",
    image: "/placeholder.svg",
    description:
      "A product visionary focused on creating intuitive user experiences that drive engagement. Has a proven track record of designing products that users love. Deeply believes in building technology that enhances human connections rather than replacing them.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Placeholder Name",
    role: "Co-Founder & CFO",
    image: "/placeholder.svg",
    description:
      "An operations expert with a talent for building high-performing teams and efficient processes. Experienced in scaling startups from early stage to growth phase. Passionate about creating inclusive workplaces and sustainable business practices.",
    linkedin: "#",
    twitter: "#",
  },
];

const Founders = () => {
  return (
    <>
      <Helmet>
        <title>Our Founders - Meet the Team Behind InvisiaX</title>
        <meta
          name="description"
          content="Meet the visionary founders behind InvisiaX. Our leadership team brings together expertise in AI, product development, and operations to build the future of social connections."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
            style={{ background: "var(--gradient-glow)" }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                Leadership
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Meet Our <span className="gradient-text">Founders</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The visionary team behind InvisiaX, united by a shared mission to
                transform how people connect online through AI-powered technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founders Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {founders.map((founder, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-3xl overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image */}
                    <div className="lg:w-1/3 aspect-square lg:aspect-auto relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="lg:w-2/3 p-6 lg:p-8 flex flex-col justify-center">
                      <h2 className="font-display text-2xl font-bold text-foreground mb-1">
                        {founder.name}
                      </h2>
                      <p className="text-primary font-medium mb-4">{founder.role}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {founder.description}
                      </p>
                      <div className="flex gap-3">
                        <a
                          href={founder.linkedin}
                          aria-label="LinkedIn"
                          className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                        >
                          <Linkedin size={18} />
                        </a>
                        <a
                          href={founder.twitter}
                          aria-label="Twitter"
                          className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                        >
                          <Twitter size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Founders;