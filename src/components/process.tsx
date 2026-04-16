"use client";

import { motion } from "framer-motion";

/*
  Psychology: Uncertainty reduction.
  The #1 reason people don't buy services is uncertainty about the process.
  "What do I need to do? How long will it take? What if I hate it?"
  Three steps is the magic number — simple enough to remember,
  structured enough to feel professional. Each step removes a specific fear.
*/

const steps = [
  {
    number: "01",
    title: "We talk",
    description:
      "A short call to understand what you do, who you serve, and what you need. No commitment, no pressure. Just a conversation.",
    detail: "30 minutes",
  },
  {
    number: "02",
    title: "I build",
    description:
      "I design and develop your site. You see progress along the way and give feedback before anything goes live. Unlimited revisions during this phase.",
    detail: "2-3 weeks",
  },
  {
    number: "03",
    title: "You grow",
    description:
      "Your site launches. Clients start finding you. I stick around for support, updates, and anything you need after launch.",
    detail: "Ongoing support",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl text-heading mb-4">
            Three steps, start to launch
          </h2>
          <p className="text-muted text-lg">
            You focus on your clients. I handle the build.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8 sm:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative"
            >
              <span className="font-display text-6xl text-green/10 leading-none">
                {step.number}
              </span>
              <div className="mt-2 space-y-3">
                <h3 className="font-display text-2xl text-heading">
                  {step.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {step.description}
                </p>
                <span className="inline-block text-xs font-medium text-green bg-green-soft px-3 py-1 rounded-full">
                  {step.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
