import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Mail, Github } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/ssaumyajaiswal", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/saumya-k-j", label: "GitHub" },
    { icon: Mail, href: "mailto:ssaumya@example.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-muted/30 scroll-animate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              I'm always open to discussing research opportunities, collaborations, or just connecting
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form and I'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Connect With Me</CardTitle>
                  <CardDescription>Find me on these platforms</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted transition-colors"
                    >
                      <link.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium">{link.label}</span>
                    </a>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Looking for Opportunities</h3>
                  <p className="text-sm opacity-90">
                    I'm actively seeking research positions, internships, and collaborative projects in data science, 
                    machine learning, and mathematical optimization.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
