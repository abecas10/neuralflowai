"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    company: "TechFlow Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    type: "Full-time",
    description: "Leading development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
    achievements: [
      "Reduced application load time by 40% through optimization",
      "Led migration to modern tech stack (React, Node.js, AWS)",
      "Mentored 5 junior developers and established code review processes"
    ],
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
    website: "https://techflow.com"
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "StartupLab Inc.",
    location: "Austin, TX",
    period: "2020 - 2022",
    type: "Full-time",
    description: "Developed MVP products for multiple startups, working closely with founders to bring ideas to life. Specialized in rapid prototyping and user-centric design.",
    achievements: [
      "Built 8 MVP products from concept to launch",
      "Implemented real-time features using WebSocket technology",
      "Collaborated with design team to create intuitive user experiences"
    ],
    technologies: ["Vue.js", "Express", "MongoDB", "Firebase", "Stripe"],
    website: "https://startuplab.com"
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Digital Innovations",
    location: "Remote",
    period: "2019 - 2020",
    type: "Contract",
    description: "Specialized in creating responsive, accessible web applications for enterprise clients. Focused on performance optimization and cross-browser compatibility.",
    achievements: [
      "Improved accessibility scores to 95+ across all projects",
      "Delivered 12 client projects on time and within budget",
      "Established component library used across multiple projects"
    ],
    technologies: ["React", "TypeScript", "Sass", "Webpack", "Jest"],
    website: "https://digitalinnovations.com"
  },
  {
    id: 4,
    title: "Junior Web Developer",
    company: "Creative Agency Pro",
    location: "New York, NY",
    period: "2018 - 2019",
    type: "Full-time",
    description: "Started my professional journey building websites for creative agencies and small businesses. Learned the fundamentals of web development and client communication.",
    achievements: [
      "Completed 25+ website projects for various clients",
      "Learned modern development workflows and best practices",
      "Contributed to agency's first mobile-responsive framework"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
    website: "https://creativeagencypro.com"
  }
];

export default function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 relative" data-macaly="experience-section">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-macaly="experience-title">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-macaly="experience-description">
              My professional journey through various roles and companies, each contributing to my growth as a developer.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              variants={timelineVariants}
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-0.5 origin-top"
            />

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform md:-translate-x-2 z-10 ${
                      index % 2 === 0 ? '' : 'md:translate-x-2'
                    }`}
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />

                  {/* Content Card */}
                  <motion.div
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="glass border-white/10 hover:border-white/20 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                                {experience.type}
                              </Badge>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4 mr-1" />
                                {experience.period}
                              </div>
                            </div>
                            <h3 className="text-xl font-bold mb-1" data-macaly={`experience-title-${experience.id}`}>
                              {experience.title}
                            </h3>
                            <div className="flex items-center text-primary mb-2">
                              <span className="font-semibold">{experience.company}</span>
                              {experience.website && (
                                <a
                                  href={experience.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ml-2 hover:text-primary/80 transition-colors"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              )}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground mb-4">
                              <MapPin className="w-4 h-4 mr-1" />
                              {experience.location}
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed" data-macaly={`experience-description-${experience.id}`}>
                          {experience.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="text-sm font-semibold mb-2 text-accent">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {experience.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start">
                                <span className="text-primary mr-2 mt-1">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-white/5 rounded text-xs text-muted-foreground hover:text-white transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Ready to <span className="text-gradient">Collaborate?</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in new opportunities and exciting projects. 
                Let's discuss how we can work together to bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary/30 hover:border-primary text-primary rounded-lg font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}