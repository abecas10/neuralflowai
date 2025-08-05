
"use client";

import { motion } from "framer-motion";
import { Zap, ArrowUp, Linkedin, Twitter, Mail, Phone, MapPin, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    icon: Mail,
    label: "Email",
    href: "mailto:hello@neuralflow.ai",
    color: "hover:text-cyan-400"
  }
];

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" }
];

const services = [
  { name: "Process Automation", href: "#services" },
  { name: "Predictive Analytics", href: "#services" },
  { name: "Custom AI Solutions", href: "#services" },
  { name: "Business Intelligence", href: "#services" }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900/50 to-transparent border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <motion.div 
                  className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  NeuralFlow AI
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Transforming businesses through cutting-edge AI automation solutions. 
                We help companies streamline operations, boost productivity, and achieve unprecedented growth.
              </p>
            </div>
            
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
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Company</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-muted-foreground hover:text-white transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-purple-400">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <motion.a
                    href={service.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(service.href);
                    }}
                    className="text-muted-foreground hover:text-white transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    {service.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <div className="glass p-6 rounded-lg text-center">
            <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h5 className="font-semibold mb-2">Email Us</h5>
            <p className="text-muted-foreground text-sm">hello@neuralflow.ai</p>
          </div>
          <div className="glass p-6 rounded-lg text-center">
            <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h5 className="font-semibold mb-2">Call Us</h5>
            <p className="text-muted-foreground text-sm">+1 (555) AI-FLOW</p>
          </div>
          <div className="glass p-6 rounded-lg text-center">
            <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h5 className="font-semibold mb-2">Visit Us</h5>
            <p className="text-muted-foreground text-sm">San Francisco, CA</p>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          variants={itemVariants}
          className="glass p-8 rounded-2xl mb-12 text-center border border-blue-500/20"
        >
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-8 h-8 text-blue-400 mr-3" />
            <h3 className="text-2xl font-bold">
              Stay <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Ahead</span>
            </h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get the latest insights on AI automation, industry trends, and success stories. 
            Join 1000+ business leaders who trust our expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your business email"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400 focus:outline-none"
            />
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6">
              Subscribe
            </Button>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10"
        >
          <div className="flex items-center text-muted-foreground mb-4 md:mb-0">
            <span>© {new Date().getFullYear()} NeuralFlow AI. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            <motion.button
              onClick={scrollToTop}
              className="p-2 glass rounded-full hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>
    </footer>
  );
}
