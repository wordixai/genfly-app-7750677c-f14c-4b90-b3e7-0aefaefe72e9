import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedItems } from "@/components/FeaturedItems";
import { Menu } from "@/components/Menu";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedItems />
      <Menu />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;