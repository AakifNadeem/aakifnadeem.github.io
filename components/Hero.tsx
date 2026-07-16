"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const words = ["beautiful", "scalable", "delightful"];

export function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb-a" aria-hidden="true" />
      <div className="hero-orb hero-orb-b" aria-hidden="true" />
      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } }
        }}
      >
        <motion.p className="eyebrow" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
          Lahore, Pakistan · Senior iOS Engineer
        </motion.p>
        <motion.h1 variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } }}>
          Building <span>{words[0]}</span><br />iOS experiences<br />that scale.
        </motion.h1>
        <motion.p className="hero-summary" variants={{ hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0 } }}>
          I design and engineer polished mobile products with thoughtful architecture, expressive motion and reliable delivery — currently supporting an app used by <strong>60,000+ people every day.</strong>
        </motion.p>
        <motion.div className="hero-actions" variants={{ hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0 } }}>
          <a className="button button-primary" href="#work">Explore selected work <ArrowDownRight size={18} /></a>
          <a className="button button-secondary" href="mailto:m.aakif.nadeem@gmail.com">Start a conversation</a>
        </motion.div>
      </motion.div>
      <motion.div
        className="hero-mark"
        initial={{ opacity: 0, scale: 0.86, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      >
        <span>AN</span>
        <small>Swift · SwiftUI · Architecture</small>
      </motion.div>
    </section>
  );
}
