"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
            <div>
                <h1 className="font-display text-6xl md:text-7xl mb-4">Research</h1>
                <p className="font-sans text-xl text-neutral-600 leading-relaxed max-w-2xl">
                    Building AI systems that bridge the gap between low-resource languages and modern technology.
                </p>
            </div>
            <div>
                <a 
                    href="https://scholar.google.com/citations?user=Se77iHUAAAAJ&hl=en&oi=ao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-lg transition-colors font-medium text-sm"
                >
                    <ExternalLink className="w-4 h-4" />
                    Google Scholar
                </a>
            </div>
          </div>

          <div className="space-y-20">
            
            {/* Publications */}
            <section>
                <h2 className="font-display text-2xl text-neutral-900 mb-8 border-b border-neutral-100 pb-4">
                    Publications
                </h2>
                <div className="space-y-8">
                    <div className="group">
                        <a 
                           href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Se77iHUAAAAJ&citation_for_view=Se77iHUAAAAJ:u5HHmVD_uO8C"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="block hover:bg-neutral-50 -mx-4 px-4 py-4 rounded-xl transition-colors"
                        >
                            <h3 className="font-sans text-lg font-medium text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors">
                                Artificial Allies: Validation of Synthetic Text for Peer Support Tools through Data Augmentation in NLP Model Development
                            </h3>
                            <p className="text-neutral-600 mb-2 text-sm leading-relaxed">
                                Godeme, J., Hill, J., Gaughan, S. P., Hirschbuhl, W. J., Emerson, A. J., Darabos, C., Bobak, C. A., & Fortuna, K. L. (2025).
                            </p>
                            <div className="flex items-center gap-3 text-sm text-neutral-500">
                                <span className="italic">Proceedings of the Pacific Symposium on Biocomputing, Hawaii, USA</span>
                                <span>•</span>
                                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-medium">Published</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Works in Progress */}
            <section>
                <h2 className="font-display text-2xl text-neutral-900 mb-8 border-b border-neutral-100 pb-4">
                    Works in Progress
                </h2>
                <div className="space-y-8">
                    <div className="group opacity-80">
                        <h3 className="font-sans text-lg font-medium text-neutral-900 mb-2">
                            Adja-French Neural Machine Translation: A Few-Shot Transfer Learning Approach
                        </h3>
                        <p className="text-neutral-600 mb-2 text-sm leading-relaxed">
                            Godeme, J. et al.
                        </p>
                        <div className="flex items-center gap-3 text-sm text-neutral-500">
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-medium">Submitted</span>
                        </div>
                    </div>
                    
                    <div className="group opacity-80">
                        <h3 className="font-sans text-lg font-medium text-neutral-900 mb-2">
                            Evaluating LLM Performance on Low-Resource West African Languages
                        </h3>
                        <p className="text-neutral-600 mb-2 text-sm leading-relaxed">
                            Godeme, J.
                        </p>
                        <div className="flex items-center gap-3 text-sm text-neutral-500">
                            <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs font-medium">In Preparation</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Talks */}
            <section>
                <h2 className="font-display text-2xl text-neutral-900 mb-8 border-b border-neutral-100 pb-4">
                    Talks & Presentations
                </h2>
                <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                        <div className="w-32 flex-shrink-0 text-sm text-neutral-500 font-medium">Jan 2025</div>
                        <div>
                            <h3 className="font-sans font-medium text-neutral-900">Pacific Symposium on Biocomputing</h3>
                            <p className="text-sm text-neutral-600 mt-1">Hawaii, USA</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                        <div className="w-32 flex-shrink-0 text-sm text-neutral-500 font-medium">Aug 2024</div>
                        <div>
                            <h3 className="font-sans font-medium text-neutral-900">Stamps Scholars National Convention</h3>
                            <p className="text-sm text-neutral-600 mt-1">Atlanta, GA</p>
                        </div>
                    </div>
                </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
