"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

/*
  Psychology: Commitment + scarcity.
  By this point they've scrolled the entire page — high intent.
  The CTA is warm and personal ("let's talk") not transactional ("buy now").
  Mentioning limited capacity creates gentle urgency without sleaze.
  The email fallback reduces friction — no forms to fill, no accounts to make.
*/

export function Cta() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-6 bg-green text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl mb-6">
            Ready to get a website that works for you?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            I take on a limited number of projects each month to give every
            client my full attention. Send me a message and let&apos;s see if
            we&apos;re a good fit.
          </p>

          <a
            href="mailto:iliagoginashvili16@gmail.com"
            className="inline-flex items-center gap-2.5 bg-white text-green font-medium px-8 py-4 rounded-lg hover:bg-white/90 transition-colors duration-200"
          >
            <Mail className="w-4.5 h-4.5" />
            iliagoginashvili16@gmail.com
          </a>

          <p className="text-white/50 text-sm mt-6">
            Based in Europe, available across time zones. I usually reply
            within a few hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
