import { Card } from "@/components/ui/card";

const courses = [
  {
    semester: "Advanced Coursework",
    courses: [
      { code: "DS 340W", title: "Applied Data Sciences", institution: "Penn State" },
      { code: "STAT 380H", title: "Data Science through Statistical Reasoning", institution: "Penn State" },
      { code: "DS 310", title: "Applied Machine Learning", institution: "Penn State" },
      { code: "MATH 312", title: "Concepts of Real Analysis", institution: "Penn State" },
      { code: "CMPSC 465", title: "Data Structures & Algorithms", institution: "Penn State" },
    ]
  },
  {
    semester: "Statistics & Probability",
    courses: [
      { code: "STAT 415H", title: "Introduction to Mathematical Statistics", institution: "Penn State" },
      { code: "MATH 414", title: "Introduction to Probability Theory", institution: "Penn State" },
      { code: "STAT 184", title: "Introduction to R", institution: "Penn State" },
    ]
  },
  {
    semester: "Advanced Mathematics",
    courses: [
      { code: "MATH 455", title: "Numerical Analysis I", institution: "Penn State" },
      { code: "MATH 456", title: "Numerical Analysis II", institution: "Penn State" },
      { code: "MATH 467", title: "Factorization & Primality Testing", institution: "Penn State" },
      { code: "MATH 485", title: "Graph Theory", institution: "Penn State" },
    ]
  }
];

const Coursework = () => {
  return (
    <section id="coursework" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Academic Coursework</h2>
            <p className="text-lg text-muted-foreground">
              Advanced curriculum in Data Science, Statistics, and Mathematics
            </p>
          </div>

          <div className="space-y-8">
            {courses.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold mb-4 text-primary">{category.semester}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.courses.map((course, i) => (
                    <Card key={i} className="p-4 bg-card shadow-card hover:shadow-elegant transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary text-center">{course.code}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground mb-1">{course.title}</h4>
                          <p className="text-sm text-muted-foreground">{course.institution}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coursework;
