import { Linkedin, Mail, Github, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-12 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Column - Minimal Text */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="text-sm font-medium text-primary tracking-wider uppercase">
                    Schreyer Honors College
                  </span>
                </div>
                <h1 className="text-6xl lg:text-8xl font-bold text-foreground font-serif leading-tight">
                  Ssaumya
                  <br />
                  <span className="text-primary">Jaiswal</span>
                </h1>
                <div className="space-y-2 max-w-lg">
                  <p className="text-xl text-muted-foreground">
                    Data Science & Mathematics
                  </p>
                  <p className="text-base text-muted-foreground/80 leading-relaxed">
                    Machine learning researcher and developer building data-driven solutions at the intersection of statistics and computation.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="gap-2 shadow-lg hover:shadow-xl transition-shadow"
                  onClick={() => window.open('/SsaumyaJaiswal_resume.pdf', '_blank')}
                >
                  <FileDown className="h-4 w-4" />
                  Resume
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2"
                  onClick={() => window.open('https://www.linkedin.com/in/ssaumyajaiswal', '_blank')}
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="gap-2"
                  onClick={() => window.open('https://github.com/saumya-k-j', '_blank')}
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </div>

            {/* Right Column - Floating Image with Geometric Accents */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 lg:ml-auto">
                {/* Geometric accent elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
                
                {/* Main image container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src={profilePhoto}
                    alt="Ssaumya Jaiswal"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                </div>
                
                {/* Floating card accent */}
                <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-elegant backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
