"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "EcoTrack - Sustainability Dashboard",
    description: "A comprehensive platform for tracking and visualizing environmental impact metrics for businesses. Features real-time data visualization, AI-powered insights, and collaborative reporting tools.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "PostgreSQL", "D3.js", "AWS"],
    category: "Web Application",
    status: "Live",
    github: "https://github.com",
    live: "https://ecotrack-demo.com",
    featured: true
  },
  {
    id: 2,
    title: "MindfulMoments - Meditation App",
    description: "Cross-platform mobile app for guided meditation and mindfulness practices. Includes personalized recommendations, progress tracking, and social features.",
    image: "/api/placeholder/600/400",
    technologies: ["React Native", "Firebase", "Node.js", "Stripe"],
    category: "Mobile App",
    status: "Live",
    github: "https://github.com",
    live: "https://mindfulmoments.app",
    featured: true
  },
  {
    id: 3,
    title: "DevFlow - Project Management",
    description: "Streamlined project management tool designed specifically for development teams. Features sprint planning, code review integration, and automated reporting.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "TypeScript", "Prisma", "tRPC", "Vercel"],
    category: "SaaS Platform",
    status: "Beta",
    github: "https://github.com",
    live: "https://devflow-beta.com",
    featured: false
  },
  {
    id: 4,
    title: "ArtisanMarket - E-commerce Platform",
    description: "Modern e-commerce solution for artisan creators with integrated payment processing, inventory management, and customer analytics.",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "Express", "MongoDB", "Stripe", "Docker"],
    category: "E-commerce",
    status: "Live",
    github: "https://github.com",
    live: "https://artisanmarket.demo",
    featured: false
  },
  {
    id: 5,
    title: "CodeMentor - Learning Platform",
    description: "Interactive coding education platform with real-time collaboration, automated testing, and personalized learning paths for aspiring developers.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Python", "Django", "WebRTC", "Redis"],
    category: "EdTech",
    status: "Development",
    github: "https://github.com",
    live: null,
    featured: false
  },
  {
    id: 6,
    title: "HealthSync - Telemedicine App",
    description: "Secure telemedicine platform connecting patients with healthcare providers. Features video consultations, prescription management, and health record integration.",
    image: "/api/placeholder/600/400",
    technologies: ["Flutter", "Node.js", "PostgreSQL", "WebRTC", "HIPAA"],
    category: "Healthcare",
    status: "Live",
    github: "https://github.com",
    live: "https://healthsync.medical",
    featured: true
  }
];

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative" data-macaly="projects-section">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-macaly="projects-title">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-macaly="projects-description">
              A showcase of my recent work, from web applications to mobile apps. Each project represents a unique challenge and creative solution.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="space-y-20 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <motion.div
                    className="relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="glass rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-300">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <span className="text-6xl opacity-20">🚀</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        {project.github && (
                          <Button size="sm" variant="secondary" className="glass">
                            <Github className="w-4 h-4" />
                          </Button>
                        )}
                        {project.live && (
                          <Button size="sm" className="bg-primary hover:bg-primary/90">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {project.category}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={`${
                            project.status === 'Live' ? 'border-accent/30 text-accent' :
                            project.status === 'Beta' ? 'border-chart-4/30 text-chart-4' :
                            'border-chart-5/30 text-chart-5'
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4" data-macaly={`project-title-${project.id}`}>
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed" data-macaly={`project-description-${project.id}`}>
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/5 rounded-full text-sm text-muted-foreground hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      {project.github && (
                        <Button variant="outline" className="border-primary/30 hover:border-primary text-primary">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      )}
                      {project.live && (
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-center mb-12">
              More <span className="text-gradient">Projects</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {otherProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="glass border-white/10 hover:border-white/20 transition-all duration-300 h-full group">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
                        <span className="text-4xl opacity-20">💻</span>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="flex space-x-2">
                            {project.github && (
                              <Button size="sm" variant="secondary" className="glass">
                                <Github className="w-4 h-4" />
                              </Button>
                            )}
                            {project.live && (
                              <Button size="sm" className="bg-primary hover:bg-primary/90">
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                            {project.category}
                          </Badge>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              project.status === 'Live' ? 'border-accent/30 text-accent' :
                              project.status === 'Beta' ? 'border-chart-4/30 text-chart-4' :
                              'border-chart-5/30 text-chart-5'
                            }`}
                          >
                            {project.status}
                          </Badge>
                        </div>
                        
                        <h4 className="text-lg font-semibold mb-2" data-macaly={`project-title-${project.id}`}>
                          {project.title}
                        </h4>
                        
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3" data-macaly={`project-description-${project.id}`}>
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-white/5 rounded text-xs text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 text-xs text-muted-foreground">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" className="border-primary/30 hover:border-primary text-primary group">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}