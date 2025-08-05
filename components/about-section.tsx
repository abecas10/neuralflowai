"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Target, Users, TrendingUp, Shield, Cpu, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    category: "AI Automation",
    icon: Bot,
    technologies: ["Process Automation", "Workflow Optimization", "Task Scheduling", "Data Processing", "Smart Routing"],
    color: "text-blue-400"
  },
  {
    category: "Machine Learning",
    icon: Brain,
    technologies: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Systems", "Pattern Recognition"],
    color: "text-purple-400"
  },
  {
    category: "Business Intelligence",
    icon: TrendingUp,
    technologies: ["Data Analytics", "Performance Metrics", "Real-time Dashboards", "Reporting Systems", "KPI Tracking"],
    color: "text-cyan-400"
  },
  {
    category: "Integration",
    icon: Zap,
    technologies: ["API Development", "System Integration", "Cloud Migration", "Legacy Modernization", "Third-party Connectors"],
    color: "text-green-400"
  },
  {
    category: "Security & Compliance",
    icon: Shield,
    technologies: ["Data Protection", "GDPR Compliance", "Audit Trails", "Access Control", "Encryption"],
    color: "text-red-400"
  },
  {
    category: "Custom Solutions",
    icon: Cpu,
    technologies: ["Bespoke AI Models", "Custom Algorithms", "Specialized Tools", "Industry-specific Solutions", "Scalable Architecture"],
    color: "text-yellow-400"
  }
];

export default function AboutSection() {
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
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  return (
    <section id="about" className="py-20 relative" data-macaly="about-section">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-macaly="about-title">
              About <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">NeuralFlow AI</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-macaly="about-description">
              We are pioneers in AI automation, transforming businesses through intelligent solutions that eliminate manual processes, 
              reduce costs, and unlock unprecedented growth opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Target className="w-8 h-8 text-blue-400 mr-3" />
                Our Mission
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded by a team of AI researchers and business strategists, NeuralFlow AI emerged from a simple belief: 
                  every business deserves access to cutting-edge artificial intelligence, regardless of size or industry.
                </p>
                <p>
                  We specialize in creating bespoke AI automation solutions that seamlessly integrate with existing workflows, 
                  delivering measurable results from day one. Our approach combines deep technical expertise with business acumen 
                  to ensure every solution drives real value.
                </p>
                <p>
                  From Fortune 500 companies to innovative startups, we've helped organizations across industries harness the 
                  power of AI to automate complex processes, make data-driven decisions, and stay ahead of the competition.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="glass p-8 rounded-2xl border border-blue-500/20">
                <div className="space-y-6">
                  <motion.div variants={statsVariants} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Clients Served
                    </span>
                    <span className="text-blue-400 font-bold text-xl">200+</span>
                  </motion.div>
                  <motion.div variants={statsVariants} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Bot className="w-4 h-4 mr-2" />
                      AI Solutions Deployed
                    </span>
                    <span className="text-purple-400 font-bold text-xl">500+</span>
                  </motion.div>
                  <motion.div variants={statsVariants} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Average ROI Increase
                    </span>
                    <span className="text-cyan-400 font-bold text-xl">340%</span>
                  </motion.div>
                  <motion.div variants={statsVariants} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Process Efficiency Gain
                    </span>
                    <span className="text-green-400 font-bold text-xl">85%</span>
                  </motion.div>
                </div>
              </div>
              
              {/* Enhanced floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.2, 1], 
                  opacity: [0.5, 1, 0.5],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Brain className="w-6 h-6 text-blue-400" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.3, 1], 
                  opacity: [0.3, 0.8, 0.3],
                  y: [-5, 5, -5]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <Zap className="w-5 h-5 text-cyan-400" />
              </motion.div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center mb-12">
              Our <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Capabilities</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.category}
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      rotateY: 5,
                    }}
                    transition={{ duration: 0.3, type: "spring" }}
                  >
                    <Card className="glass border-white/10 hover:border-blue-500/30 transition-all duration-300 h-full group">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <motion.div 
                            className={`p-3 rounded-lg bg-gradient-to-r from-white/5 to-white/10 ${service.color} mr-4`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <IconComponent className="w-6 h-6" />
                          </motion.div>
                          <h4 className="text-lg font-semibold group-hover:text-white transition-colors">{service.category}</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              className="px-3 py-1 bg-white/5 rounded-full text-sm text-muted-foreground hover:text-white hover:bg-white/10 transition-all cursor-default"
                              whileHover={{ scale: 1.05 }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: techIndex * 0.1 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

