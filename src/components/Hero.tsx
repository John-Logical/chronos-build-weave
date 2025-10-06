import { Button } from "@/components/ui/button";
import { Play, Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Construction site" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent-foreground">AI-Powered Construction Intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Every Day. Every Detail.
            <span className="block text-accent">Captured. Verified.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Transform GPS-tagged photos and daily reports into searchable, visual construction narratives. 
            See your project's story unfold, moment by moment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 shadow-elevated">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm">
              Learn More
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-primary-foreground/20">
            <div>
              <div className="text-3xl font-bold text-accent mb-1">10K+</div>
              <div className="text-sm text-primary-foreground/80">Photos Analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">24/7</div>
              <div className="text-sm text-primary-foreground/80">AI Processing</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-primary-foreground/80">Verifiable</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};
