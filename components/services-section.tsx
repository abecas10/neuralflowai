"use client";

import { motion } from "framer-motion";
import { Bot, Brain, Zap, Target, TrendingUp, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Intelligent Process Automation",
    description: "Transform repetitive tasks into smart, self-managing workflows that adapt and optimize over time.",
    icon: Bot,
    features: ["Workflow Automation", "Smart Decision Making", "Error Handling", "Performance Monitoring"],
    color: "from-blue-500 to-cyan-500",
    delay: 0
  },
  {
    title: "Predictive Analytics & AI",
    description: "Harness machine learning to predict trends, optimize operations, and make data-driven decisions.",
    icon: Brain,
    features: ["Predictive Modeling", "Pattern Recognition", "Anomaly Detection", "Real-time Insights"],
    color: "from-purple-500 to-pink-500",
    delay: 0.2
  },
  {
    title: "Custom AI Solutions",
    description: "Bespoke artificial intelligence systems tailored to your specific business needs and challenges.",
    icon: Target,
    features: ["Custom Models", "API Integration", "Scalable Architecture", "24/7 Support"],
    color: "from-green-500 to-emerald-500",
    delay: 0.4
  },
  {
    title: "Business Intelligence",
    description: "Convert raw data into actionable insights with advanced analytics and visualization tools.",
    icon: TrendingUp,
    features: ["Data Visualization", "KPI Dashboards", "Automated Reports", "Trend Analysis"],
    color: "from-orange-500 to-red-500",
    delay: 0.6
  },
  {
    title: "AI Security & Compliance",
    description: "Ensure your AI systems are secure, compliant, and aligned with industry best practices.",
    icon: Shield,
    features: ["Security Audits", "Compliance Monitoring", "Data Protection", "Risk Assessment"],
    color: "from-indigo-500 to-purple-500",
    delay: 0.8
  },
  {
    title: "Optimization & Performance",
    description: "Continuously improve your AI systems for maximum efficiency and return on investment.",
    icon: Zap,
    features: ["Performance Tuning", "Cost Optimization", "Scalability Planning", "Continuous Learning"],
    color: "from-yellow-500 to-orange-500",
    delay: 1.0
  }
];

export default function ServicesSection() {
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
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.3,
      },
    },
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden" data-macaly="services-section">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.span 
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Our Services
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-macaly="services-title">
              AI Solutions That <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Transform</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-macaly="services-description">
              From intelligent automation to predictive analytics, we deliver cutting-edge AI solutions 
              that drive measurable business results and competitive advantage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  custom={index}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    rotateY: 5,
                  }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <Card className="glass border-white/10 hover:border-blue-500/30 transition-all duration-500 h-full group overflow-hidden relative">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <CardContent className="p-6 relative z-10">
                      <motion.div 
                        className="flex items-center mb-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div 
                          className={`p-3 rounded-xl bg-gradient-to-r ${service.color} bg-opacity-10 mr-4`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-lg font-semibold group-hover:text-white transition-colors">
                          {service.title}
                        </h3>
                      </motion.div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            className="flex items-center text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                          >
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span className="text-muted-foreground group-hover:text-white transition-colors">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button 
                          variant="ghost" 
                          className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-0 h-auto font-medium group/btn"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 text-lg glow group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <p className="text-muted-foreground mt-4">
              Ready to transform your business with AI? Let's discuss your needs.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}