import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Target, Eye, Heart, Zap, Users, Award } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";



import ceo from "@/assets/team/ceo.jpg";
import cto from "@/assets/team/cto.jpg";
import cmo from "@/assets/team/cmo.jpg";
import cfo from "@/assets/team/cfo.jpg";
import anshika from "@/assets/team/anshika.jpg";
import mandeep from "@/assets/team/mandeep.jpg";
import humaira from "@/assets/team/humaira.jpg";
import thenmathy from "@/assets/team/thenmathy.jpg";


const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Open communication and honest relationships are the foundation of our partnerships.",
  },
  {
    icon: Heart,
    title: "Client Success",
    description: "Your success is our success. We're invested in delivering results that matter.",
  },
  {
    icon: Zap,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in everything we do.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Great things happen when diverse minds work together toward a common goal.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "We do what's right, even when no one is watching.",
  },
];

const timeline = [
  { year: "2024", title: "Founded", description: "InvisiaX was born from a vision to create technology that works invisibly." },
  { year: "2024", title: "Team Building", description: "Assembled a passionate team of developers, designers, and AI specialists." },
  { year: "12 oct 2025", title: "Testing MVP Launch", description: "Launched our testing MVP to gather early user feedback and validate core features." },
  { year: "22 Oct 2025", title: "Ending MVP Launch", description: "Successfully completed the MVP launch, incorporating early user feedback to refine and strengthen core features." },
];

const teamMembers = [
  { name: "Dhruv Pratap Singh", role: "Founder and CEO", image: ceo },
  { name: "Jay Gupta", role: "Executive Director and CTO", image: cto },
  { name: "Pragati Sharma", role: "Co-Founder and CMO", image: cmo },
  { name: "Sangam Sharma", role: "Co-Founder and CFO", image: cfo },
  { name: "Anshika Gupta", role: "Web Developer & Backend Developer Intern", image: anshika },
  { name: "Mandeep Kumar", role: "Developer", image: mandeep },
  { name: "Humaira Fatima", role: "AI/ML and Data Engineering Intern", image: humaira },
  { name: "S Thenmathy", role: "AI/ML and Data Engineering Intern", image: thenmathy },
];

const About = () => {
    const [activeMember, setActiveMember] = useState<any>(null);
  return (
    <>
      <Helmet>
        <title>About InvisiaX - Our Vision, Mission & Values | Technology Company</title>
        <meta 
          name="description" 
          content="Discover InvisiaX's story, our mission to engineer invisible innovation, and the core values that drive our team to deliver exceptional technology solutions." 
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full" style={{ background: "var(--gradient-glow)" }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                We Are <span className="gradient-text">InvisiaX</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                InvisiaX was born from a dream – a dream to craft a platfowhere voices are heard,creativity is celebrated, and privacy is honored. Founded by a passionate team of tech enthusiasts, marketers, and visionaries,InvisiaX aims to stand out in the digital landscape of India.
                
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8 md:p-10"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted andoriginal Indian platform for theyouth to express, inspire, andinnovate.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card rounded-2xl p-8 md:p-10"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To bring back realness to digital lifeby offering a social media spacethat prioritizes creativity, mentalwell-being, and meaningfulinteraction
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <SectionHeading
              badge="Our Journey"
              title="The InvisiaX Story"
              description="InvisiaX started as a college idea and soon evolved into a movement. Built with relentless passion, sleepless nights, and a vision to build India’s own social media empire — this journey is still unfolding."
            />

            <div className="mt-16 max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center gap-8 mb-12 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10 glow-effect" />
                    
                    {/* Content */}
                    <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <span className="text-primary font-display font-bold text-lg">{item.year}</span>
                      <h3 className="font-display text-xl font-semibold text-foreground mt-1">{item.title}</h3>
                      <p className="text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <SectionHeading
              badge="Core Values"
              title="What Drives Us"
              description="Our values shape every decision we make and every line of code we write."
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

       {/* Team Section */}
<section className="py-16 md:py-24 bg-card/50">
  <div className="container mx-auto px-4">
    <SectionHeading
      badge="Our Team"
      title="Meet the Innovators"
      description="A passionate team of developers, designers, and problem-solvers dedicated to building exceptional technology."
    />

    <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  {/* Image */}
                  <div
                    onClick={() => setActiveMember(member)}
                    className="relative mx-auto w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 mb-6 cursor-pointer"
                  >
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />

                    {/* Border */}
                    <div className="absolute inset-0 rounded-full border-4 border-border group-hover:border-primary/60 transition-colors" />

                    {/* Image */}
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-sm">View Profile</span>
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-primary text-sm mt-1">{member.role}</p>
                  {/* <p className="text-xs text-muted-foreground mt-1">InvisiaX</p> */}
                </motion.div>
              ))}
            </div>
          </div>

          {/* ---------------- Modal ---------------- */}
          {activeMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
              onClick={() => setActiveMember(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card rounded-2xl p-8 max-w-sm w-full text-center relative"
              >
                <button
                  onClick={() => setActiveMember(null)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>

                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/50 mb-4">
                  <img
                    src={activeMember.image}
                    alt={activeMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold">{activeMember.name}</h3>
                <p className="text-primary mt-1">{activeMember.role}</p>
                <p className="text-sm text-muted-foreground mt-3">
                  Member of InvisiaX Team
                </p>
              </motion.div>
            </motion.div>
          )}
        </section>

        <CTASection />
      </Layout>
    </>
  );
};

export default About;