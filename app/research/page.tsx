"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Mail, FileText } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 mb-12 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header Block */}
          <div className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl text-neutral-900 mb-2 tracking-tight">Josué Godeme</h1>
            <div className="font-sans text-neutral-600 mb-4 text-sm leading-relaxed">
              <strong>Computer Science Student.</strong><br/>
              Dartmouth College<br/>
              King Scholar & Stamps Scholar
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
              <a 
                href="mailto:josue.c.godeme.25@dartmouth.edu" 
                className="inline-flex items-center gap-1 text-foreground border-b border-neutral-300 hover:border-foreground transition-colors"
              >
                [Email]
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="inline-flex items-center gap-1 text-foreground border-b border-neutral-300 hover:border-foreground transition-colors"
              >
                [CV]
              </a>
              <a 
                href="https://scholar.google.com/citations?user=Se77iHUAAAAJ&hl=en&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-foreground border-b border-neutral-300 hover:border-foreground transition-colors"
              >
                [Google Scholar]
              </a>
            </div>
          </div>

          <div className="space-y-12">
            {/* Bio & Focus */}
            <section className="prose prose-neutral prose-lg max-w-none font-sans text-neutral-800 leading-relaxed">
              <p>
                My research aims to build and improve language technologies for low-resource languages. I study methods that combine deep learning models with transfer learning techniques to bridge the gap between underrepresented languages and modern AI capabilities. I am particularly interested in applications in neural machine translation, edge computing for education, and evaluating LLM performance on West African languages.
              </p>
            </section>

            {/* Current Research Areas */}
            <section>
              <h2 className="font-display text-2xl text-neutral-900 mb-4">Current Research Areas</h2>
              <ul className="list-disc list-inside space-y-2 font-sans text-neutral-800 ml-4">
                <li>Neural Machine Translation for low-resource languages (specifically Adja-French).</li>
                <li>Few-shot and transfer learning approaches in NLP.</li>
                <li>Edge computing and running AI models on constrained devices for educational use.</li>
                <li>Evaluating and adapting Large Language Models for West African languages.</li>
              </ul>
            </section>

            {/* Publications */}
            <section>
              <h2 className="font-display text-2xl text-neutral-900 mb-6">Publications</h2>
              <div className="space-y-6">
                <div className="font-sans text-neutral-800 text-sm md:text-base">
                  <a 
                    href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Se77iHUAAAAJ&citation_for_view=Se77iHUAAAAJ:u5HHmVD_uO8C"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground border-b border-neutral-300 hover:border-foreground transition-colors"
                  >
                    Artificial Allies: Validation of Synthetic Text for Peer Support Tools through Data Augmentation in NLP Model Development
                  </a>.
                  <br />
                  Godeme, J., Hill, J., Gaughan, S. P., Hirschbuhl, W. J., Emerson, A. J., Darabos, C., Bobak, C. A., & Fortuna, K. L. (2025).
                  <br />
                  <span className="italic text-neutral-600">Proceedings of the Pacific Symposium on Biocomputing, Hawaii, USA.</span>
                </div>
              </div>
            </section>

            {/* Works in Progress */}
            <section>
              <h2 className="font-display text-2xl text-neutral-900 mb-6">Works in Progress</h2>
              <div className="space-y-6">
                <div className="font-sans text-neutral-800 text-sm md:text-base">
                  <span className="font-medium text-neutral-900">
                    Adja-French Neural Machine Translation: A Few-Shot Transfer Learning Approach
                  </span>.
                  <br />
                  Godeme, J. et al.
                  <br />
                  <span className="italic text-neutral-600">Under Review.</span>
                </div>
                
                <div className="font-sans text-neutral-800 text-sm md:text-base">
                  <span className="font-medium text-neutral-900">
                    Evaluating LLM Performance on Low-Resource West African Languages
                  </span>.
                  <br />
                  Godeme, J.
                  <br />
                  <span className="italic text-neutral-600">In Preparation.</span>
                </div>
              </div>
            </section>

            {/* Talks */}
            <section>
              <h2 className="font-display text-2xl text-neutral-900 mb-6">Talks & Presentations</h2>
              <ul className="list-disc list-inside space-y-2 font-sans text-neutral-800 ml-4">
                <li><span className="font-medium">Pacific Symposium on Biocomputing</span> — Hawaii, USA (Jan 2025)</li>
                <li><span className="font-medium">Stamps Scholars National Convention</span> — Atlanta, GA (Aug 2024)</li>
              </ul>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
