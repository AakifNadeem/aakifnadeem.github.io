"use client";

import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.header
      className="nav-shell"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <a className="monogram" href="#top" aria-label="Go to top">AN</a>
      <nav aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="resume-link" href="/AakifResume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a>
    </motion.header>
  );
}
