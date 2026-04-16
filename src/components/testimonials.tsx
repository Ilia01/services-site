"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

/*
  Psychology: Social proof.
  This section is a placeholder for when you land your first client.
  For now it shows a single "founding client" offer which serves double duty:
  1. Creates urgency (limited spots)
  2. Acknowledges honestly that you're building your portfolio
  3. Turns a weakness (no testimonials yet) into a strength (discounted rate)

  Replace this with real testimonials as soon as you have them.
*/

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-action text-action"
              />
            ))}
          </div>

          <h2 className="font-display text-3xl sm:text-4xl text-heading mb-4">
            Founding client offer
          </h2>
          <p className="text-muted text-lg leading-relaxed max-w-xl mx-auto mb-6">
            I&apos;m building my services portfolio and offering a limited
            number of projects at reduced rates. You get the same quality at a
            better price, and I get a case study and testimonial to grow with.
          </p>
          <p className="text-green font-medium">
            First 3 clients get 20% off any tier.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
