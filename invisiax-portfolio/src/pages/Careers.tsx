import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Users,
  Globe,
  BookOpen,
  Coffee,
  Mail,
} from "lucide-react";

const perks = [
  // {
  //   icon: Zap,
  //   title: "Learning Budget",
  //   description: "Annual budget for courses, conferences, and certifications",
  // },
  {
    icon: Zap,
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, and certifications",
  },
  {
    icon: Globe,
    title: "Remote First",
    description: "Work from anywhere with flexible hours",
  },
  {
    icon: Coffee,
    title: "Team Retreats",
    description: "Annual company retreats and team building events",
  },
  {
    icon: BookOpen,
    title: "Growth Paths",
    description: "Clear career progression and mentorship programs",
  },
  {
    icon: Users,
    title: "Inclusive Culture",
    description: "Diverse team celebrating different perspectives",
  },
];

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers at InvisiaX - Join Our Team | Open Positions</title>
        <meta
          name="description"
          content="Join InvisiaX and help build the future of meaningful social connections. Explore open positions and be part of our mission."
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
                Join Our Team
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Build the <span className="gradient-text">Future With Us</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We're looking for passionate individuals who want to make an impact.
                Join a team that values innovation, collaboration, and growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Culture */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                  Our Culture
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Where Talent <span className="gradient-text">Thrives</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At InvisiaX, we believe that great work happens when people feel
                  empowered, supported, and inspired. We've built a culture that
                  celebrates curiosity, embraces challenges, and values every voice.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're a seasoned expert or just starting your journey,
                  you'll find opportunities to learn, grow, and make a real impact
                  on projects that matter.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {perks.map((perk, index) => (
                  <motion.div
                    key={perk.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="p-6 rounded-2xl glass-card"
                  >
                    <perk.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      {perk.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {perk.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <SectionHeading
              badge="Open Roles"
              title="Current Opportunities"
              description="Explore our open positions and find your next adventure."
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 max-w-3xl mx-auto"
            >
              <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  No Open Positions Currently
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Currently, there are no open positions. You can still reach out to
                  us for future opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button variant="hero" size="lg" asChild>
                    <a href="https://www.linkedin.com/posts/invisiax_welcome-to-invisiax-anshika-were-happy-activity-7407756475609120769--OtX?utm_source=share&utm_medium=member_android&rcm=ACoAAFL7v4QBYiNC3KoClu731ri6h_XortZCqRU" target="_blank" rel="noopener noreferrer">
                      <Mail className="mr-2" size={18} />
                      Contact Us
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  Email us at:{" "}
                  <a
                    href="mailto:invisiax.info@gmail.com"
                    className="text-primary hover:underline"
                  >
                    invisiax.info@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Careers;