import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Trophy, Star } from "lucide-react";

const honors = [
  {
    icon: Trophy,
    title: "Matthew Rosenshine Fund For Excellence",
    organization: "Penn State",
    date: "May 2025",
    description: "Awarded for academic excellence and significant contributions to the field of Data Science and Mathematics."
  },
  {
    icon: Star,
    title: "Dean's List",
    organization: "Penn State",
    date: "Dec 2024",
    description: "Recognized for outstanding academic performance. Semesters: Fall 2023, Spring 2024, Fall 2024."
  },
  {
    icon: Award,
    title: "Cambridge ICE Distinction Certificate",
    organization: "Cambridge / SVKM's JV Parekh International School",
    date: "May 2021",
    description: "Awarded to top 3% of IGCSE scorers worldwide for exceptional performance across all subjects."
  }
];

const Honors = () => {
  return (
    <section id="honors" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Honors & Awards</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for academic excellence and outstanding contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {honors.map((honor, index) => (
            <Card
              key={index}
              className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 border-border"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <honor.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{honor.title}</CardTitle>
                <div className="space-y-1 text-sm">
                  <p className="text-primary font-medium">{honor.organization}</p>
                  <p className="text-muted-foreground">{honor.date}</p>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {honor.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Honors;
