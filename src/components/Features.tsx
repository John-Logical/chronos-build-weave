import { Card } from "@/components/ui/card";
import { Play, MapPin, Calendar, FileText, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: Play,
    title: "Visual Playback",
    description: "Navigate through construction timeline with GPS-tagged photos and AI-generated scene reconstructions.",
  },
  {
    icon: Calendar,
    title: "Schedule Integration",
    description: "Sync with P6 and MS Project for task-level visual verification and progress tracking.",
  },
  {
    icon: MapPin,
    title: "Location Intelligence",
    description: "Filter and search by specific areas, zones, or coordinates across your entire jobsite.",
  },
  {
    icon: FileText,
    title: "DIR Narratives",
    description: "Auto-generated scene narratives from Daily Inspection Reports linked to visual evidence.",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Real-time installation percentages and productivity metrics derived from visual data.",
  },
  {
    icon: Shield,
    title: "Defensible Records",
    description: "Timestamped, watermarked documentation ready for claims, audits, and legal proceedings.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Construction Intelligence, <span className="text-accent">Simplified</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From data capture to defensible documentation, SiteTime transforms how you verify, track, and prove construction progress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-elevated transition-all duration-300 border-border/50 bg-card hover:border-accent/30"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
