import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import makeMydayApp from "@/assets/make_my_day_app.png";

const projects = [
  {
    title: "Graph-Guided, LLM-Steered Portfolio Optimization",
    description: "Multi-agent framework integrating Large Language Models with Graph Neural Networks and metaheuristic algorithms to optimize real-world investment portfolios. Achieved 18% improvement in risk-adjusted returns over traditional methods.",
    technologies: ["Python", "PyTorch", "GNNs", "LLMs", "Genetic Algorithms", "NetworkX"],
    link: "#",
    image: null
  },
  {
    title: "SCADA Grid Monitoring & Analytics Platform",
    description: "Enterprise-grade data pipeline automating real-time monitoring of 1000+ power grid nodes. Reduced incident response time by 65% and manual reporting by 75% through intelligent alerting and visualization.",
    technologies: ["Python", "SQL Server", "Power BI", "SCADA", "Azure"],
    link: "#",
    image: null
  },
  {
    title: "MCMC Variance Reduction via Control Variates",
    description: "Novel nonparametric variance estimation technique for Markov Chain Monte Carlo simulations. Enhanced Metropolis-Hastings algorithm efficiency by 30% for high-dimensional Bayesian inference problems.",
    technologies: ["Python", "NumPy", "SciPy", "Statistical Analysis", "MCMC"],
    link: "#",
    image: null
  },
  {
    title: "Make My Day – AI Itinerary Generator",
    description: "User-centric Java application leveraging real-time APIs to generate personalized travel itineraries. Conducted 20+ user interviews to iterate on UX, achieving 90% user satisfaction in beta testing.",
    technologies: ["Java", "REST APIs", "UI/UX Design", "Swing", "Google Maps API"],
    link: "#",
    image: makeMydayApp
  },
  {
    title: "Google PageRank & Markov Chain Ranking Algorithms",
    description: "Modeled the web as a directed graph and implemented ranking algorithms ranging from naïve inbound-link counting to a full Markov Chain–based PageRank system. Built counterexamples where structurally influential nodes receive higher PageRank scores despite having fewer direct links.",
    technologies: ["Python", "NumPy", "Markov Chains", "Graph Theory", "Linear Algebra"],
    link: "#",
    image: null
  },
  {
    title: "Machine Learning Algorithms From Scratch",
    description: "Derived core machine learning algorithms mathematically and implemented them entirely from scratch in R without ML libraries. Validated implementations by comparing predictions, residual patterns, and optimization behavior against R's built-in models.",
    technologies: ["R", "Statistical Learning", "Optimization", "Linear Algebra"],
    link: "#",
    image: null
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 lg:py-24 scroll-animate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Data Science & Mathematics Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing research and applied work in machine learning, optimization, and data systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-gradient-card shadow-card hover:shadow-elegant hover:scale-105 transition-all duration-300 border-border overflow-hidden"
            >
              {project.image && (
                <div className="w-full h-48 overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium"
                >
                  Click to read more
                  <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
