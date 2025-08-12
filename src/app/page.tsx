"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Calendar,
  Map,
  Menu,
  X,
  ChevronDown
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "experience",
        "skills",
        "projects",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const portfolioData = {
    name: "Nagendra Kumar K S",
    title: "Full Stack Developer | AI Enthusiast",
    email: "nagendrakumarkssumu@gmail.com",
    phone: "+91 9742970382",
    location: "Bengaluru, Karnataka",
    github: "https://github.com/Nagendra2k00",
    linkedin: "https://linkedin.com/in/nagendrakumarks",
    about:
      "Full-stack developer with a strong foundation in Node.js, Python, React, and Next.js. Skilled in building scalable backend systems with Node and Express JS, integrating AI APIs, and delivering intuitive front-end experiences. Experienced with database design, and implementing machine learning models into production applications.",
    experience: [
      {
        id: 1,
        position: "Full Stack Developer",
        company: "Curatal",
        period: "Dec 2023 – Present",
        location: "Bengaluru, Karnataka",
        description:
          "Integrated AI capabilities into the platform using OpenAI API for content generation and automation. Designed and optimized database schemas, built scalable full-stack features, and improved performance.",
        achievements: [
          "Improved page load speed by 25%",
          "Reduced API response time from 500ms to 200ms",
          "Cut deployment errors by 15%",
          "Optimized SQL queries and implemented API security",
        ],
      },
      {
        id: 2,
        position: "Web Developer Intern",
        company: "CodeYoung",
        period: "Feb 2024 – Nov 2024",
        location: "Bengaluru, Karnataka",
        description:
          "Developed and optimized user interfaces using React and Next.js, boosting SEO and improving performance.",
        achievements: [
          "Reduced UI load time by 25%",
          "Implemented Next.js SSR and React Hooks for SEO optimization",
          "Resolved critical production bugs",
        ],
      },
      {
        id: 3,
        position: "Machine Learning Intern",
        company: "Indigeneous Tech Pvt Ltd",
        period: "Nov 2023 – Dec 2023",
        location: "Remote",
        description:
          "Built ML models for price prediction and conducted data analysis using Python libraries.",
        achievements: [
          "Developed Lasso regression model for room price prediction",
          "Implemented data preprocessing and visualization with NumPy, pandas, matplotlib, and seaborn",
        ],
      },
    ],
    skills: [
      {
        category: "Frontend",
        items: [
          "React",
          "Next.js",
          "Material UI",
          "TypeScript",
          "Tailwind CSS",
          "HTML",
          "CSS",
        ],
      },
      {
        category: "Backend",
        items: [
          "Node.js",
          "Express.js",
          "SQL",
          "PostgreSQL",
          "Java",
          "Spring Boot",
          "MongoDB",
        ],
      },
      {
        category: "Tools & Others",
        items: [
          "Git",
          "GitHub",
          "GitLab",
          "Postman",
          "Jupyter",
          "Anaconda",
          "IntelliJ",
          "VS Code",
          "n8n",
        ],
      },
    ],
    education: [
      {
        id: 1,
        degree: "Master of Computer Applications",
        institution: "Rajarajeshwari College of Engineering",
        period: "2022 – 2024",
        location: "Bengaluru, Karnataka",
        description:
          "Graduated with core concepts of software engineering, basics of SDLC and programming languages, Gold medalist .",
      },
      {
        id: 2,
        degree: "Java Full Stack Course",
        institution: "Jspiders",
        period: "2022 – 2022",
        location: "Bengaluru, Karnataka",
        description:
          "Completed a comprehensive full-stack development course covering Java, Spring Boot, React, and Next.js. Gained hands-on experience in building web applications and RESTful APIs.",
      },
      {
        id: 3,
        degree: "Bachelor of Science (Physics, Mathematics, Electronics)",
        institution: "Vijaya College",
        period: "2018 – 2021",
        location: "Bengaluru, Karnataka",
        description:
          "Graduated with a strong foundation in analytical problem-solving and computational concepts. secured 8.13 CGPA.",
      },
    ],
    projects: [
      {
        id: 1,
        title: "portfolio website",
        description:
          "Developed a personal portfolio website using Next.js and Tailwind CSS. Implemented responsive design, smooth scrolling, and dynamic content loading. Deployed on Vercel with CI/CD integration.",
        technologies: ["Next.js", "Tailwind CSS", "Vercel", "JavaScript"],
        link: "",
      },
      {
        id: 2,
        title: "Scene Classification with Grad-CAM Visualization",
        description:
          "Developed a deep learning model using a custom ResNet18 architecture with TensorFlow/Keras. Achieved 92% accuracy and deployed with TensorFlow Serving for real-time inference.",
        technologies: ["Python", "TensorFlow", "Keras", "Grad-CAM"],
        link: "https://github.com/Nagendra2k00/Explainable-AI",
      },
      {
        id: 3,
        title: "Image Noise Reduction using Autoencoders",
        description:
          "Built an autoencoder model to denoise MNIST images and improve classification accuracy. Created a Streamlit app for real-time visualization.",
        technologies: ["Python", "Autoencoders", "MNIST", "Streamlit"],
        link: "https://github.com/Nagendra2k00/Image-Noise-Reduction-using-Autoencoders",
      },
      {
        id: 4,
        title: "Cohort Analysis using Machine Learning",
        description:
          "Performed cohort analysis on customer retention data and visualized insights using heatmaps, bar graphs, and pie charts.",
        technologies: ["Python", "pandas", "matplotlib", "seaborn"],
        link: "https://github.com/Nagendra2k00/Cohort-Analysis-",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Moving background elements */}
      <div className="moving-grid"></div>
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">{portfolioData.name}</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {[
                "hero",
                "About",
                "Experience",
                "Skills",
                "Projects",
                "Education",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-primary transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-primary font-semibold"
                      : ""
                  }`}
                >
                  {item === "hero" ? "Home" : item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-4 mt-8">
                    {[
                      "hero",
                      "About",
                      "Experience",
                      "Skills",
                      "Projects",
                      "Education",
                      "Contact",
                    ].map((item) => (
                      <button
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className={`text-left p-2 rounded-lg hover:bg-accent transition-colors ${
                          activeSection === item.toLowerCase()
                            ? "bg-accent text-primary font-semibold"
                            : ""
                        }`}
                      >
                        {item === "hero" ? "Home" : item}
                      </button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center pt-16"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent text-glow">
              {portfolioData.name}
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
              {portfolioData.title}
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              {portfolioData.about}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="px-8 button-glow cursor-pointer"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <a href="/files/ATS.pdf" download className="inline-block">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 button-glow cursor-pointer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Resume
                </Button>
              </a>
            </div>
            <div className="flex justify-center space-x-6">
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center px-8 cursor-pointer mt-10 animate-bounce">
            <a href="#about" className="">
              <ChevronDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* <section
        id="hero"
        className="min-h-screen flex items-center justify-center pt-16"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-8 items-center">
            {/* Left Column - Text Content */}
      {/* <div className="text-center md:text-left flex flex-col mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent text-glow">
                {portfolioData.name}
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
                {portfolioData.title}
              </p>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
                {portfolioData.about}
              </p>
              <div className="flex flex-wrap md:justify-start justify-center gap-4 mb-12">
                <Button
                  size="lg"
                  className="px-8 button-glow cursor-pointer"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
                <a href="/files/ATS.pdf" download className="inline-block">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 button-glow cursor-pointer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Resume
                  </Button>
                </a>
              </div>
              <div className="flex md:justify-start justify-center space-x-6">
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div> */}

      {/* Right Column - Profile Photo */}
      {/* <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                <img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="card-hover">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6">
                  {portfolioData.about}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>{portfolioData.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>{portfolioData.phone}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>{portfolioData.location}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {portfolioData.experience.map((exp) => (
              <Card key={exp.id} className="card-hover">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{exp.position}</CardTitle>
                      <CardDescription className="text-lg">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2 md:mt-0">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Map className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{exp.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {portfolioData.skills.map((skillGroup, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <CardTitle>{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {portfolioData.projects.map((project) => (
              <Card key={project.id} className="card-hover">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="button-glow cursor-pointer"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
          <div className="max-w-4xl mx-auto">
            {portfolioData.education.map((edu) => (
              <Card key={edu.id} className="card-hover mb-6">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-lg">
                        {edu.institution}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2 md:mt-0">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Map className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-center">Let's Connect</CardTitle>
                <CardDescription className="text-center">
                  I'm always interested in hearing about new opportunities and
                  exciting projects.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <Button className="w-full button-glow" size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Or reach out directly
              </p>
              <div className="flex justify-center space-x-6">
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="hover:text-primary transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 {portfolioData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
