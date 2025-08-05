"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow Solutions",
    company: "Fortune 500 Manufacturing",
    content: "NeuralFlow AI transformed our entire supply chain management. We've seen a 340% ROI increase and eliminated 85% of manual processes. Their AI solutions are simply revolutionary.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO, DataVision Corp",
    company: "Financial Services",
    content: "The predictive analytics platform they built for us has been a game-changer. We can now forecast market trends with 95% accuracy and make data-driven decisions in real-time.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Watson",
    role: "Operations Director, GreenTech Industries",
    company: "Renewable Energy",
    content: "Their custom AI automation solution reduced our operational costs by 60% while improving efficiency. The team's expertise and support throughout the implementation was exceptional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "David Kim",
    role: "Founder, StartupX",
    company: "E-commerce Platform",
    content: "As a startup, we needed AI solutions that could scale with us. NeuralFlow AI delivered beyond our expectations, helping us automate customer service and boost conversion rates by 200%.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Lisa Thompson",
    role: "VP of Innovation, MedTech Solutions",
    company: "Healthcare Technology",
    content: "The AI-powered diagnostic tools they developed have revolutionized our patient care process. We've improved diagnostic accuracy by 40% while reducing processing time significantly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "James Wilson",
    role: "Head of Digital Transformation, RetailMax",
    company: "Retail Chain",
    content: "Their intelligent inventory management system has transformed our operations. We've reduced waste by 45% and improved customer satisfaction through better stock availability.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
  }
];

export default function TestimonialsSection() {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.2,
      },
    },
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden" data-macaly="testimonials-section">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
      <motion.div 
        className="absolute top-40 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
          x: [0, 50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
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
              className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Client Success Stories
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-macaly="testimonials-title">
              Trusted by <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-macaly="testimonials-description">
              See how businesses across industries have transformed their operations and achieved remarkable results with our AI solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  rotateY: 2,
                }}
                transition={{ duration: 0.3, type: "spring" }}
              >
                <Card className="glass border-white/10 hover:border-purple-500/30 transition-all duration-500 h-full group relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-6 relative z-10">
                    {/* Quote Icon */}
                    <motion.div 
                      className="mb-4"
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Quote className="w-8 h-8 text-purple-400 opacity-50" />
                    </motion.div>
                    
                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Content */}
                    <p className="text-muted-foreground mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center">
                      <motion.div 
                        className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-purple-500/20"
                        whileHover={{ scale: 1.1, borderColor: "rgb(168 85 247 / 0.5)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-purple-400">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "200+", label: "Happy Clients" },
              { number: "500+", label: "AI Solutions" },
              { number: "340%", label: "Average ROI" },
              { number: "85%", label: "Efficiency Gain" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
                  whileInView={{ scale: [0.5, 1.1, 1] }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}