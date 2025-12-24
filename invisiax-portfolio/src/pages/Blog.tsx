import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Rocket, Eye, Megaphone } from "lucide-react";

const posts = [
  {
    title: "InvisiaX Launch Announcement",
    excerpt: "We're excited to announce that InvisiaX will officially launch on January 23, 2026. Get ready for a revolutionary AI-powered social platform designed for meaningful connections.",
    date: "December 20, 2024",
    readTime: "3 min read",
    category: "Launch Update",
    icon: Rocket,
  },
  {
    title: "Our Vision: Redefining Social Connections",
    excerpt: "At InvisiaX, we believe social media should bring people closer, not drive them apart. Learn about our vision for creating a platform that prioritizes authenticity and meaningful interactions.",
    date: "December 15, 2024",
    readTime: "5 min read",
    category: "Product Vision",
    icon: Eye,
  },
  {
    title: "Building with AI: Privacy-First Approach",
    excerpt: "Discover how we're using artificial intelligence to enhance user experience while maintaining strict privacy standards. Your data belongs to you.",
    date: "December 10, 2024",
    readTime: "4 min read",
    category: "Product Vision",
    icon: Eye,
  },
  {
    title: "Early Access Program Coming Soon",
    excerpt: "Be among the first to experience InvisiaX. We're launching an early access program for select users. Sign up to get notified when spots open.",
    date: "December 5, 2024",
    readTime: "2 min read",
    category: "Announcement",
    icon: Megaphone,
  },
  {
    title: "The Team Behind InvisiaX",
    excerpt: "Meet the passionate team working to bring InvisiaX to life. From AI researchers to product designers, we're united by a shared mission.",
    date: "November 28, 2024",
    readTime: "4 min read",
    category: "Announcement",
    icon: Megaphone,
  },
  {
    title: "Why We're Building InvisiaX",
    excerpt: "Social media has strayed from its original purpose. Here's why we're building a platform that puts meaningful human connections at the center.",
    date: "November 20, 2024",
    readTime: "6 min read",
    category: "Product Vision",
    icon: Eye,
  },
];

const categories = ["All", "Launch Update", "Product Vision", "Announcement"];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Updates & Announcements | InvisiaX</title>
        <meta
          name="description"
          content="Stay updated with the latest news, launch updates, product vision, and announcements from InvisiaX. Follow our journey to redefine social connections."
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
                Blog & Updates
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                News & <span className="gradient-text">Announcements</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Follow our journey as we build InvisiaX. Get the latest updates on our
                launch, product vision, and announcements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <SectionHeading badge="Latest Posts" title="Recent Updates" />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 relative flex items-center justify-center">
                    <div className="absolute inset-0 grid-pattern opacity-50" />
                    <post.icon className="w-16 h-16 text-primary/40" />
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium text-primary bg-card/80 backdrop-blur-sm rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Button variant="hero">
                View All Posts
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Blog;