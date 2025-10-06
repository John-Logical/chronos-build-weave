import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Play, Pause, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import sitePhoto1 from "@/assets/site-photo-1.jpg";
import sitePhoto2 from "@/assets/site-photo-2.jpg";
import sitePhoto3 from "@/assets/site-photo-3.jpg";

interface PhotoData {
  id: string;
  date: string;
  time: string;
  location: string;
  coordinates: string;
  image: string;
  description: string;
}

const mockPhotos: PhotoData[] = [
  {
    id: "1",
    date: "2025-10-01",
    time: "08:45 AM",
    location: "Zone A - Foundation",
    coordinates: "40.7128°N, 74.0060°W",
    image: sitePhoto1,
    description: "Rebar installation complete, concrete forms ready for inspection",
  },
  {
    id: "2",
    date: "2025-10-02",
    time: "02:30 PM",
    location: "Zone B - Steel Frame",
    coordinates: "40.7129°N, 74.0061°W",
    image: sitePhoto2,
    description: "Steel beam erection in progress, crane operations ongoing",
  },
  {
    id: "3",
    date: "2025-10-03",
    time: "11:15 AM",
    location: "Zone C - Exterior",
    coordinates: "40.7130°N, 74.0062°W",
    image: sitePhoto3,
    description: "Envelope installation commenced, scaffolding positioned",
  },
];

export const TimelineViewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentPhoto = mockPhotos[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : mockPhotos.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < mockPhotos.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Visual Timeline <span className="text-accent">Playback</span>
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Navigate through your construction timeline with precision. Every photo, every moment, perfectly documented.
          </p>
        </div>

        <Card className="max-w-6xl mx-auto overflow-hidden bg-card/95 backdrop-blur-sm shadow-elevated">
          {/* Main Photo Display */}
          <div className="relative aspect-video bg-muted">
            <img
              src={currentPhoto.image}
              alt={currentPhoto.description}
              className="w-full h-full object-cover"
            />
            
            {/* Photo Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex items-center gap-2 text-primary-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{currentPhoto.date}</span>
                  <span className="text-primary-foreground/70">•</span>
                  <span>{currentPhoto.time}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90 mb-2">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">{currentPhoto.location}</span>
                <span className="text-sm text-primary-foreground/70">({currentPhoto.coordinates})</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">{currentPhoto.description}</p>
            </div>

            {/* Expand Button */}
            <Button
              size="sm"
              variant="secondary"
              className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm"
            >
              <Maximize2 className="w-4 h-4" />
            </Button>
          </div>

          {/* Controls */}
          <div className="p-6 border-t border-border/50">
            {/* Timeline Progress */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Photo {currentIndex + 1} of {mockPhotos.length}
                </span>
                <span className="text-sm text-muted-foreground">
                  Oct 1-3, 2025
                </span>
              </div>
              <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-accent transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / mockPhotos.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handlePrevious}
                  className="border-border/50"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant={isPlaying ? "default" : "outline"}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={isPlaying ? "bg-accent hover:bg-accent/90" : "border-border/50"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleNext}
                  className="border-border/50"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Button size="sm" variant="ghost" className="gap-2">
                  <Calendar className="w-4 h-4" />
                  Filter by Date
                </Button>
                <Button size="sm" variant="ghost" className="gap-2">
                  <MapPin className="w-4 h-4" />
                  Filter by Location
                </Button>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="px-6 pb-6">
            <div className="grid grid-cols-3 gap-4">
              {mockPhotos.map((photo, index) => (
                <button
                  key={photo.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? "border-accent shadow-lg scale-105"
                      : "border-border/30 hover:border-border opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={photo.image}
                    alt={photo.description}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-2">
                    <p className="text-xs text-primary-foreground font-medium truncate">
                      {photo.location}
                    </p>
                    <p className="text-xs text-primary-foreground/70">{photo.date}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
            <div className="text-3xl font-bold text-accent mb-2">156</div>
            <div className="text-sm text-muted-foreground">Total Site Photos</div>
            <div className="text-xs text-muted-foreground mt-1">Last 30 days</div>
          </Card>
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
            <div className="text-3xl font-bold text-accent mb-2">12</div>
            <div className="text-sm text-muted-foreground">Active Locations</div>
            <div className="text-xs text-muted-foreground mt-1">Across 3 zones</div>
          </Card>
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
            <div className="text-3xl font-bold text-accent mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Coverage Rate</div>
            <div className="text-xs text-muted-foreground mt-1">GPS accuracy verified</div>
          </Card>
        </div>
      </div>
    </section>
  );
};
