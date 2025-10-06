import { HardHat } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
                <HardHat className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary-foreground">SiteTime</h3>
                <p className="text-xs text-primary-foreground/70">AI Construction Intelligence</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/60">
              Transforming construction documentation with AI-powered visual verification.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Features</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Timeline Viewer</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Integrations</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">About</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">API Reference</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Support</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2025 SiteTime. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Terms</a>
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
