import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileDown, ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

import pennStateLogo from "@/assets/penn_state_logo.png";
import scitaraLogo from "@/assets/scitara_logo.png";
import tataPowerLogo from "@/assets/tata_power_logo.jpeg";

const experiences = [
  {
    title: "Machine Learning Research Assistant",
    organization: "Penn State College of Engineering",
    period: "Apr 2025 – Nov 2025",
    logo: pennStateLogo,
    description: "Co-developed MetaIoT, a novel meta-learning framework enabling intrusion detection models to rapidly self-adapt to unseen IoT networks.",
    achievements: [
      "Co-developed MetaIoT, a novel meta-learning framework that enables intrusion detection models to rapidly self-adapt to unseen IoT networks—addressing one of the core unsolved challenges in real-world IoT security: extreme distribution shift",
      "Implemented a bi-level optimization pipeline using MMD regularization to enforce domain alignment, ensuring feature representations remain stable across heterogeneous devices, protocols, and network conditions",
      "Evaluated MetaIoT on IoT-23, ToN-IoT, Aposemat IoT, and UNSW-NB15, achieving high F1-scores, major reductions in false positives, and adaptation speeds surpassing conventional fine-tuning methods",
      "Conducted robustness experiments measuring performance under unseen device types, mixed-protocol traffic, and novel attack families, demonstrating consistent generalization compared with static, non-adaptive intrusion detection models",
      "Co-authored and presented the MetaIoT system in a full paper submitted to MLSys 2025"
    ]
  },
  {
    title: "Undergraduate Research Assistant",
    organization: "Penn State Eberly College of Science",
    period: "Apr 2025 – Present",
    logo: pennStateLogo,
    description: "Advancing MCMC algorithms through nonparametric variance estimation and control variates methodology.",
    achievements: [
      "Developing novel variance reduction techniques for Markov Chain Monte Carlo simulations",
      "Implementing control variates methods to enhance estimation accuracy by 30%",
      "Optimizing Metropolis-Hastings algorithm efficiency for large-scale statistical models",
      "Contributing to research publication on nonparametric variance estimation techniques"
    ]
  },
  {
    title: "Study Smarter Presenter & Math Tutor",
    organization: "Penn State Learning",
    period: "Mar 2025 – Sep 2025+",
    logo: pennStateLogo,
    description: "Leading calculus tutoring sessions and developing comprehensive learning materials for 100+ students.",
    achievements: [
      "Conducting group tutoring sessions for Calculus I, II, and Multivariable Calculus",
      "Creating detailed exam preparation packets adopted by 5+ faculty members",
      "Collaborating with professors to align tutoring strategies with course objectives",
      "Analyzing student performance data to identify common learning gaps and improve outcomes by 25%"
    ]
  },
  {
    title: "Data Analyst & Programmer Intern",
    organization: "TATA Power",
    period: "May 2024 – Aug 2024",
    logo: tataPowerLogo,
    description: "Engineered automated data pipelines and real-time monitoring systems for critical power grid infrastructure.",
    achievements: [
      "Designed and deployed real-time alarm system for SCADA infrastructure monitoring 1000+ grid nodes",
      "Built automated Python data ingestion pipeline reducing manual report generation time by 75%",
      "Created interactive Power BI dashboards visualizing grid performance metrics for executive leadership",
      "Optimized SQL queries improving data retrieval speed by 40% and ensuring 99.9% data accuracy",
      "Collaborated with engineering teams to implement predictive maintenance alerts"
    ]
  },
  {
    title: "Mathematics Learning Assistant",
    organization: "Penn State University",
    period: "Jan 2024 – Apr 2024",
    logo: pennStateLogo,
    description: "Supported calculus instruction and developed innovative teaching methodologies.",
    achievements: [
      "Assisted professor in teaching Calculus I to 200+ students per semester",
      "Developed visual learning aids and interactive problem-solving workshops",
      "Held weekly office hours providing individualized support to struggling students",
      "Created supplementary materials improving student comprehension of complex topics"
    ]
  },
  {
    title: "IT Intern",
    organization: "Scitara",
    period: "May 2022 – Jun 2022",
    logo: scitaraLogo,
    description: "Developed automation solutions and supported cloud infrastructure migration initiatives.",
    achievements: [
      "Built Python automation scripts reducing manual IT workflow time by 60%",
      "Configured and tested RESTful API environments for product development team",
      "Assisted in migrating on-premise infrastructure to AWS cloud platform",
      "Documented technical processes and created user guides for internal tools"
    ]
  }
];

const Resume = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="experience" className="py-16 lg:py-24 bg-muted/30 scroll-animate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Experience</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A timeline of my academic and professional journey
            </p>
            <Button 
              variant="default" 
              className="gap-2"
              onClick={() => window.open('/SsaumyaJaiswal_resume.pdf', '_blank')}
            >
              <FileDown className="h-5 w-5" />
              Download Full Resume
            </Button>
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border"></div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Collapsible
                  key={index}
                  open={openItems.includes(index)}
                  onOpenChange={() => toggleItem(index)}
                >
                  <Card className="relative ml-4 md:ml-16 bg-card shadow-card hover:shadow-elegant transition-all duration-300">
                    <div className="absolute -left-[1.875rem] md:-left-12 top-8 w-3 h-3 rounded-full bg-primary border-4 border-background"></div>
                    
                    <CollapsibleTrigger className="w-full text-left">
                      <div className="p-6 flex items-start gap-4 cursor-pointer group">
                        <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-background rounded-lg p-2 shadow-sm">
                          <img 
                            src={exp.logo} 
                            alt={`${exp.organization} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium">{exp.organization}</p>
                          <p className="text-sm text-muted-foreground">{exp.period}</p>
                        </div>

                        <div className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors">
                          {openItems.includes(index) ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
                          )}
                        </div>
                      </div>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="animate-accordion-down">
                      <div className="px-6 pb-6 pt-0 space-y-3">
                        <p className="text-muted-foreground">{exp.description}</p>
                        
                        <ul className="space-y-2 mt-4">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
