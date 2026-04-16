"use client";

import { motion } from "framer-motion";

/*
  Psychology: Lead with the outcome, not the service.
  "I build websites" is about me. "That bring you clients" is about them.
  The subtext validates the pain — they already know their site isn't working.
  Single CTA reduces decision paralysis.
*/

export function Hero() {
  return (
    <section className="min-h-[90dvh] flex items-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-green font-medium text-sm tracking-wide uppercase mb-6"
          >
            Web development for service businesses
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl text-heading leading-[1.1] mb-8"
          >
            I build websites that
            <br />
            <span className="text-green">bring you clients.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted leading-relaxed max-w-xl mb-10"
          >
            Your website should be your best salesperson. Working 24/7, making
            a great first impression, and turning visitors into paying clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#pricing"
              className="inline-block text-white bg-action font-medium px-8 py-3.5 rounded-lg hover:bg-action-hover transition-colors duration-200 text-sm"
            >
              See Pricing
            </a>
            <a
              href="#process"
              className="inline-block text-body border border-border font-medium px-8 py-3.5 rounded-lg hover:border-green/40 hover:text-green transition-colors duration-200 text-sm"
            >
              How It Works
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
