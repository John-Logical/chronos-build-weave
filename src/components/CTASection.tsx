import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Real-time visual verification",
  "Schedule integration",
  "Defensible documentation",
  "Enterprise-grade security",
];

export const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          color: 'white'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your
            <span className="block text-accent mt-2">Construction Documentation?</span>
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-8">
            Join leading GCs, owners, and project teams using SiteTime to verify progress, 
            defend claims, and build with confidence.
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-primary-foreground/90">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 shadow-elevated">
              Request a Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
            >
              Contact Sales
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/60 mt-6">
            No credit card required • Free 30-day trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};
