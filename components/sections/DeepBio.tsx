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
                I grew up in Benin, where I learned early on that talent is universal, but opportunity is not. Ranking first in my national high school diploma opened doors to an international education, but it also clarified my mission.
              </p>
              <p>
                Now, as a computer science student at Dartmouth, I bridge worlds. I speak four languages—English, French, Chinese, and Adja—and I see technology as the ultimate translator. Not just of words, but of ideas and potential.
              </p>
              <p>
                Whether I'm building <strong className="text-foreground font-medium">Echo</strong> to help people find their voice in a new language, or researching AI architectures for low-resource African languages, my goal is simple: <span className="text-foreground font-medium italic">engineering with empathy</span>.
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

