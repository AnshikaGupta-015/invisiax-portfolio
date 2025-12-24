import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>InvisiaX - Engineering Invisible Innovation | Technology Solutions</title>
        <meta 
          name="description" 
          content="InvisiaX delivers cutting-edge technology solutions including web development, mobile apps, UI/UX design, cloud services, and AI solutions. Transform your business with invisible innovation." 
        />
        <meta name="keywords" content="technology solutions, web development, mobile apps, UI/UX design, cloud services, AI solutions, digital transformation" />
        <link rel="canonical" href="https://invisiax.com" />
      </Helmet>
      <Layout>
        <HeroSection />
        <ServicesPreview />
        <AboutPreview />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
