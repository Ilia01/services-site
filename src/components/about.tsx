"use client";

import { motion } from "framer-motion";

/*
  Psychology: Parasocial trust.
  Service professionals buy from people they feel they know.
  A short, honest bio makes you a person, not a faceless service.
  No corporate language. First person. Specific details that feel real.
  Mentioning what you care about (quality, communication) maps to
  their fears (getting ghosted, getting a bad product).
*/

export function About() {
  return (
    <section className="py-24 sm:py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl text-heading mb-2">
              Who&apos;s building your site?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-body leading-relaxed text-lg">
              I&apos;m Ilia, a software engineer based in Europe. I build web
              applications for a living and ship open-source tools used by
              other developers.
            </p>
            <p className="text-muted leading-relaxed">
              I started offering web development services because I kept seeing
              talented coaches and consultants held back by websites that
              didn&apos;t match the quality of their work. You deserve a site
              that&apos;s as good as the service you provide.
            </p>
            <p className="text-muted leading-relaxed">
              I care about two things: building something you&apos;re genuinely
              proud of, and being straightforward to work with. Clear
              communication, honest timelines, no disappearing acts.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
