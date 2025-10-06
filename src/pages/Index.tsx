import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { TimelineViewer } from "@/components/TimelineViewer";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <Features />
        <TimelineViewer />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
