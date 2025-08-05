
"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Calendar, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Business Email",
    value: "hello@neuralflow.ai",
    href: "mailto:hello@neuralflow.ai",
    color: "text-blue-400"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) AI-FLOW",
    href: "tel:+15552435569",
    color: "text-purple-400"
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "San Francisco, CA",
    href: "https://maps.google.com/?q=San+Francisco,CA",
    color: "text-cyan-400"
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/company/neuralflow-ai",
    color: "hover:text-blue-400"
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/neuralflow_ai",
    color: "hover:text-purple-400"
  },
  {
    icon: Calendar,
    label: "Schedule",
    href: "https://calendly.com/neuralflow-ai",
    color: "hover:text-cyan-400"
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Business inquiry submitted:", formData);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
  };

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
      },
    },
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden" data-macaly="contact-section">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-purple-500/5" />
      <motion.div 
        className="absolute top-40 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity }}
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
              Ready to Transform Your Business?
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-macaly="contact-title">
              Let's <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Collaborate</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-macaly="contact-description">
              Ready to revolutionize your business with AI automation? Our team of experts is here to help you 
              unlock new levels of efficiency and growth. Let's discuss your vision and create something extraordinary.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Zap className="w-8 h-8 text-blue-400 mr-3" />
                  Get Started Today
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you're looking to automate complex processes, implement predictive analytics, 
                  or build custom AI solutions, we're here to guide you every step of the way. 
                  Our consultation is always free, and we'll provide you with a clear roadmap to success.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      variants={cardVariants}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-center p-4 glass rounded-lg hover:border-blue-500/30 transition-all duration-300 group"
                    >
                      <motion.div 
                        className={`p-3 rounded-lg bg-gradient-to-r from-white/5 to-white/10 ${info.color} mr-4`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium group-hover:text-white transition-colors">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              <div className="pt-8">
                <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 glass rounded-full hover:bg-white/10 transition-all duration-300 ${social.color}`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Business Hours */}
              <motion.div
                variants={cardVariants}
                className="glass p-6 rounded-lg border border-green-500/20"
              >
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse" />
                  <span className="text-green-400 font-semibold">Available for New Projects</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Business Hours:</strong> Mon-Fri, 9 AM - 6 PM PST
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Response Time:</strong> Within 4 hours during business hours
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="glass border-white/10 hover:border-blue-500/20 transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Start Your AI Journey</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="bg-white/5 border-white/10 focus:border-blue-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Business Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@company.com"
                          required
                          className="bg-white/5 border-white/10 focus:border-blue-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="bg-white/5 border-white/10 focus:border-blue-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Project Type *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="e.g., Process Automation, Predictive Analytics, Custom AI Solution"
                        required
                        className="bg-white/5 border-white/10 focus:border-blue-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your business challenges, goals, and how AI automation could help..."
                        required
                        rows={6}
                        className="bg-white/5 border-white/10 focus:border-blue-400 resize-none"
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 text-lg font-medium"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            Sending Request...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Send className="w-5 h-5 mr-2" />
                            Request Free Consultation
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs text-muted-foreground text-center">
                      🔒 Your information is secure and will never be shared. 
                      We'll respond within 4 hours during business hours.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-20"
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Ready to <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Transform Your Business?</span>
              </h3>
              <p className="text-muted-foreground mb-8">
                Join 200+ companies that have already revolutionized their operations with our AI solutions. 
                Let's discuss how we can help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:hello@neuralflow.ai"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg font-medium transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us Directly
                </motion.a>
                <motion.a
                  href="https://calendly.com/neuralflow-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 border border-blue-500/30 hover:border-blue-500 text-blue-400 hover:text-blue-300 rounded-lg font-medium transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Call
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
