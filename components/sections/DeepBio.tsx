"use client";

import { motion } from "framer-motion";

export default function DeepBio() {
  return (
    <section className="w-full py-20 md:py-32 bg-white border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          
          {/* Left: Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-6 font-sans text-lg md:text-xl text-neutral-600 leading-relaxed">
              <p>
                I grew up in Benin, a tiny country in West Africa. I ranked first in my national high school diploma (baccalauréat) with the 2nd highest score in the history of the exam in my country. This allowed me to attend Dartmouth College, where I now study computer science and minor in Mandarin Chinese. I speak four languages—English, French, Chinese, and Adja. At Dartmouth, I am a King Scholar and a Stamps Scholar.
              </p>
              <p>
                I believe that technology, when used well and adapted to local contexts, can be powerful in solving problems and improving lives. That&apos;s what I want to do—build products that help people solve problems and improve their lives.
              </p>
              <p>
                I built Echo, a speech-focused language learning app where you get an AI tutor to help you practice the language through voice. I&apos;ve built a bunch of other projects during my time at Dartmouth. Currently, I&apos;m obsessed with AI in education and languages. I want to make AI understand the languages of the rest of the world—languages that my parents and millions of others across Asia and Africa speak. But I&apos;m also deeply interested in running AI models on the edge (devices like the Raspberry Pi) and mobile (like the iPhone). Why? Because it&apos;s amazing that you can package such a vast amount of knowledge in those small LLMs, and I think this is crucial for education, especially in under-resourced areas.
              </p>
            </div>
            
            {/* Signature or subtle element */}
            <div className="pt-4">
               <span className="font-display text-2xl text-neutral-900">Josué.</span>
            </div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl bg-neutral-100">
               {/* Placeholder for user photo - replacing the old circle photo */}
               <div className="absolute inset-0 flex items-center justify-center text-neutral-300">
                 {/* In a real scenario, use <Image /> here */}
                 <span className="font-display text-lg">Portrait</span>
               </div>
               {/* Texture overlay */}
               <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/5 to-transparent pointer-events-none" />
            </div>
            <p className="mt-4 text-xs font-sans text-neutral-400 text-right">
              Captured in Beijing, 2024
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

