import { Button } from "@/components/ui/button";
import { HardHat, Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
              <HardHat className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">SiteTime</h1>
              <p className="text-xs text-muted-foreground">AI Construction Intelligence</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Features
            </a>
            <a href="#timeline" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Timeline
            </a>
            <a href="#pricing" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Pricing
            </a>
            <a href="#docs" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Documentation
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
