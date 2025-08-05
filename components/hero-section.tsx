"use client";

import { motion } from "framer-motion";
import { ChevronDown, Zap, Brain, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" data-macaly="hero-section">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
      <motion.div 
        className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        variants={pulseVariants}
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        variants={pulseVariants}
        animate="animate"
        transition={{ delay: 1.5 }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl"
        variants={pulseVariants}
        animate="animate"
        transition={{ delay: 3 }}
      />
      
      <motion.div
        className="container mx-auto px-6 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Revolutionizing Business with AI
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          data-macaly="hero-title"
        >
          <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            NeuralFlow AI
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
          data-macaly="hero-subtitle"
        >
          Transform your business with cutting-edge AI automation solutions. We build intelligent systems that streamline operations, boost productivity, and drive exponential growth.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 text-lg glow group">
            Start Your AI Journey
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="border-blue-500/30 hover:border-blue-500 text-blue-400 hover:text-blue-300 px-8 py-3 text-lg">
            View Case Studies
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-8 mb-16"
        >
          <motion.div
            className="flex flex-col items-center p-4 glass rounded-xl hover:bg-blue-500/10 transition-colors"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Brain className="w-8 h-8 text-blue-400 mb-2" />
            <span className="text-sm text-muted-foreground">AI Intelligence</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center p-4 glass rounded-xl hover:bg-purple-500/10 transition-colors"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-8 h-8 text-purple-400 mb-2" />
            <span className="text-sm text-muted-foreground">Automation</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center p-4 glass rounded-xl hover:bg-cyan-500/10 transition-colors"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-8 h-8 text-cyan-400 mb-2" />
            <span className="text-sm text-muted-foreground">Innovation</span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="flex justify-center"
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce" />
        </motion.div>
      </motion.div>

      {/* Floating AI Code Snippets */}
      <motion.div
        className="absolute top-1/4 left-10 glass p-4 rounded-lg hidden lg:block"
        variants={floatingVariants}
        animate="animate"
      >
        <code className="text-sm text-blue-400">const ai = new NeuralFlow();</code>
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/3 right-10 glass p-4 rounded-lg hidden lg:block"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      >
        <code className="text-sm text-purple-400">{"{ automation: 'enabled' }"}</code>
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-16 glass p-4 rounded-lg hidden xl:block"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 4 }}
      >
        <code className="text-sm text-cyan-400">ai.optimize(business)</code>
      </motion.div>
    </section>
  );
}