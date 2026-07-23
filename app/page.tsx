"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Menu, X, Mail, Phone, Code2, ChevronRight, 
  ArrowUpRight
} from 'lucide-react';

// Floating Dots Background Component
// Floating Dots Background Component
function FloatingDots() {
  // Increased from 25 to 75 floating particles
  const dots = Array.from({ length: 200 }, (_, i) => ({
    id: i,
    size: Math.random() * 3.5 + 1, // Size between 1px and 4.5px
    x: Math.random() * 100,        // Start horizontal percentage
    y: Math.random() * 100,        // Start vertical percentage
    duration: Math.random() * 14 + 8, // Smooth speed variance (8s to 22s)
    delay: Math.random() * 6,       // Staggered start delay
    drift: (Math.random() - 0.5) * 12, // Random horizontal sway amount
    maxOpacity: Math.random() * 0.5 + 0.3, // Varied opacity (30% to 80%)
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-indigo-300"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            boxShadow: dot.size > 3 ? "0 0 6px rgba(165, 180, 252, 0.6)" : "none",
          }}
          animate={{
            y: ["0vh", "-105vh"],
            x: ["0vw", `${dot.drift}vw`],
            opacity: [0, dot.maxOpacity, dot.maxOpacity, 0],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "linear",
            delay: dot.delay,
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null);
  const [projectFilter, setProjectFilter] = useState("all");

  const skills = [
    "Next.js", "React.js", "TypeScript", "JavaScript", "Tailwind CSS", 
    "Redux", "Zustand", "Node.js", "Express.js", "GraphQL", 
    "PostgreSQL", "MySQL", "AWS", "AEM", "Cypress"
  ];

  const projects = [
    {
      title: "Centerwell (HUMANA)",
      role: "Front-end Developer",
      tech: ["Next.js", "Node.js", "TypeScript", "AEM", "GraphQL", "Tailwind CSS"],
      desc: "Healthcare services platform providing senior-centered care through primary care clinics and pharmacy solutions.",
      category: "healthcare"
    },
    {
      title: "Spectrum Enterprise",
      role: "Front-end Developer",
      tech: ["React.js", "Node.js", "TypeScript", "Kite UI", "Redux"],
      desc: "Corporate website architecture managing enterprise networking, high-capacity internet, and managed service solutions.",
      category: "enterprise"
    },
    {
      title: "Cordelia Cruises (B2C & B2B)",
      role: "Full-Stack Developer",
      tech: ["React.js", "Node.js", "TypeScript", "AWS", "Tailwind CSS", "PostgreSQL"],
      desc: "E-commerce cruise booking engine for retail consumers and high-throughput B2B agency management portal.",
      category: "e-commerce"
    },
    {
      title: "Clicked App",
      role: "Full-Stack Developer",
      tech: ["Next.js", "Node.js", "TypeScript", "MySQL", "Cypress"],
      desc: "High-performance localized dating web application engineered for interactive real-time cross-user communications in Japan.",
      category: "social"
    },
    {
      title: "Lyvup & Shipwwt",
      role: "Front-end Developer",
      tech: ["React.js", "Node.js", "JavaScript", "Bootstrap", "AWS"],
      desc: "Enterprise task management application & data-driven logistics product tracking global shipping carrier updates.",
      category: "enterprise"
    }
  ];

  const experience = [
    {
      role: "Senior Consultant",
      company: "Emids",
      period: "June 2025 - Present",
      bullets: [
        "Architecting complex software systems and integrating scalable full-stack solutions.",
        "Managing complex application state for consistency across large platforms.",
        "Leading development teams, conducting strict code reviews, and maintaining high standards."
      ]
    },
    {
      role: "Senior Full Stack Developer",
      company: "Talentployer Pvt. Ltd.",
      period: "Jan 2025 - Apr 2025",
      bullets: [
        "Designed software architectures and managed data consistency across microservices.",
        "Drove agile development processes to deliver core features on tight schedules."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Tekit Software Solutions Pvt. Ltd.",
      period: "Jan 2024 - Sept 2024",
      bullets: [
        "Led team of engineers through technical blockages and architectural execution.",
        "Enforced clean code principles through detailed peer code reviews."
      ]
    },
    {
      role: "MERN Stack Developer",
      company: "We2code Technology Pvt Ltd",
      period: "Jan 2018 - Jan 2024",
      bullets: [
        "Built and maintained core frontend & backend architectures for client applications over 6 years.",
        "Engineered scalable UI using React, Next.js, Redux, Zustand, and Node.js."
      ]
    }
  ];

  const blogPosts = [
    {
      title: "Mastering State Management in Next.js: Redux vs. Zustand",
      date: "July 2026",
      readTime: "5 min read",
      excerpt: "An in-depth breakdown of when to choose lightweight Zustand over traditional Redux for modern Next.js architectures.",
      content: "When building scalable Next.js applications, choosing the right state management solution is critical. While Redux provides strong middleware ecosystems, Zustand offers zero-boilerplate simplicity with optimal performance in React Server Component setups."
    },
    {
      title: "Optimizing Full-Stack Performance with TypeScript and GraphQL",
      date: "June 2026",
      readTime: "7 min read",
      excerpt: "How to enforce strict end-to-end type safety between your GraphQL APIs and Next.js frontend interfaces.",
      content: "Type safety shouldn't stop at the frontend boundary. Integrating GraphQL Code Generator with TypeScript allows automatic type generation directly from your GraphQL schemas, reducing runtime bugs."
    },
    {
      title: "Key Takeaways from Leading Software Teams in Enterprise Projects",
      date: "May 2026",
      readTime: "4 min read",
      excerpt: "Lessons learned on maintaining strict code review quality, managing agile workflows, and steering architecture.",
      content: "Effective technical leadership goes beyond writing clean code. It requires clear architectural vision, constructive code reviews, and streamlining developer velocity through robust CI/CD pipelines."
    }
  ];

  const filteredProjects = projectFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === projectFilter);

  // Framer Motion Variants Definitions
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white scroll-smooth relative overflow-hidden">
      
      {/* Flying Dots Component */}
      <FloatingDots />

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-indigo-600/15 via-cyan-500/5 to-transparent blur-3xl pointer-events-none z-0" />

      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-slate-950/70 backdrop-blur-md z-50 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold tracking-wider text-indigo-400 flex items-center gap-2 group">
            <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 group-hover:bg-indigo-500/20 transition-all">
              <Code2 className="w-5 h-5 text-indigo-400" />
            </div>
            Vijendra.dev
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            {['About', 'Experience', 'Projects', 'Blog', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-indigo-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-400 hover:after:w-full after:transition-all"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            aria-label="Toggle Navigation Menu"
            className="md:hidden text-slate-300 hover:text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-col gap-4 text-slate-300 overflow-hidden"
            >
              {['About', 'Experience', 'Projects', 'Blog', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-indigo-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-36 pb-24 px-6 max-w-6xl mx-auto flex flex-col items-start gap-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold shadow-inner"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span> Available for Development & Consulting
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-300">Vijendra Patel</span>.
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl text-slate-400 font-medium max-w-2xl leading-relaxed"
        >
          Senior Consultant & Full Stack Developer with 7+ years of experience engineering scalable web platforms and leading dev teams.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <a 
            href="#projects" 
            className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2 group hover:-translate-y-0.5"
          >
            View Projects <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a 
            href="#blog" 
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold transition-all hover:-translate-y-0.5"
          >
            Read Articles
          </a>
        </motion.div>

        {/* Contact Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-6 pt-6 text-slate-400 border-t border-slate-800/60 w-full"
        >
          <a href="mailto:patelvijendra55@gmail.com" className="hover:text-indigo-400 transition-colors flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4 text-indigo-400" /> patelvijendra55@gmail.com
          </a>
          <a href="tel:+919179948396" className="hover:text-indigo-400 transition-colors flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4 text-indigo-400" /> +91 9179948396
          </a>
        </motion.div>
      </section>

      {/* Skills Section */}
      <motion.section 
        id="about" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-16 px-6 max-w-6xl mx-auto relative z-10"
      >
        <motion.h3 variants={fadeInUp} className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">Technical Expertise</motion.h3>
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-8">Core Stack & Tooling</motion.h2>
        
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span 
              key={index} 
              whileHover={{ scale: 1.05, translateY: -2 }}
              className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800/80 text-slate-300 text-sm font-medium hover:border-indigo-500/50 hover:text-white transition-all shadow-sm cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-16 px-6 max-w-6xl mx-auto bg-slate-900/40 rounded-3xl border border-slate-800/50 my-8 backdrop-blur-sm relative z-10"
      >
        <motion.h3 variants={fadeInUp} className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">Career Journey</motion.h3>
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-10">Professional Experience</motion.h2>

        <div className="space-y-10 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
          {experience.map((item, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="relative pl-10 group">
              <span className="absolute left-0 top-1.5 w-7 h-7 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {item.role} <span className="text-indigo-400">@ {item.company}</span>
                </h4>
                <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 w-fit">
                  {item.period}
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-slate-400 text-sm leading-relaxed">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-16 px-6 max-w-6xl mx-auto relative z-10"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <motion.h3 variants={fadeInUp} className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">Portfolio</motion.h3>
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white">Featured Projects</motion.h2>
          </div>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
            {["all", "healthcare", "enterprise", "e-commerce", "social"].map((cat) => (
              <button
                key={cat}
                onClick={() => setProjectFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                  projectFilter === cat 
                    ? "bg-indigo-600 text-white shadow-md" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((proj) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={proj.title} 
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{proj.title}</h4>
                    <span className="text-xs text-indigo-300 font-mono bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-800/40">{proj.role}</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{proj.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                  {proj.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800/50">
                      #{t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.section>

      {/* Blog Section */}
      <motion.section 
        id="blog" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-16 px-6 max-w-6xl mx-auto relative z-10"
      >
        <motion.h3 variants={fadeInUp} className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">Tech Articles</motion.h3>
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-8">Latest Blog Posts</motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <motion.article 
              key={idx} 
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedBlog(idx)}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3 font-mono">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">{post.excerpt}</p>
              </div>
              
              <div className="mt-6 text-sm font-semibold text-indigo-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Article <ChevronRight className="w-4 h-4" />
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Blog Article Popup Modal */}
      <AnimatePresence>
        {selectedBlog !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 max-w-2xl w-full relative shadow-2xl overflow-y-auto max-h-[85vh]"
            >
              <button 
                onClick={() => setSelectedBlog(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 text-xs text-indigo-400 font-mono mb-2">
                <span>{blogPosts[selectedBlog].date}</span>
                <span>•</span>
                <span>{blogPosts[selectedBlog].readTime}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {blogPosts[selectedBlog].title}
              </h3>

              <div className="prose prose-invert border-t border-slate-800 pt-4 text-slate-300 text-sm leading-relaxed">
                <p className="mb-4">{blogPosts[selectedBlog].excerpt}</p>
                <p>{blogPosts[selectedBlog].content}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-800 bg-slate-950/80 py-16 px-6 text-center text-slate-400 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          <h3 className="text-3xl font-bold text-white">Let's Build Something Exceptional</h3>
          <p className="max-w-md text-sm text-slate-400 leading-relaxed">
            Interested in collaboration, architecture reviews, or tech leadership? Feel free to reach out.
          </p>
          <a 
            href="mailto:patelvijendra55@gmail.com" 
            className="mt-2 px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-lg shadow-indigo-600/30 hover:scale-105"
          >
            Send an Email
          </a>
          <p className="text-xs text-slate-600 pt-8">
            © {new Date().getFullYear()} Vijendra Patel.
          </p>
        </div>
      </footer>

    </div>
  );
}