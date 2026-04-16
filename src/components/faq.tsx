"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/*
  Psychology: Objection handling.
  Every unanswered question is a reason not to buy.
  FAQs preemptively handle the fears they'd never ask directly:
  "What if it's too expensive?" "What if I'm stuck with something I hate?"
  "What if you disappear after I pay?" Address each one honestly.
*/

const faqs = [
  {
    question: "How long does it take?",
    answer:
      "Most projects are done in 2-3 weeks. A simple landing page can be ready in under a week. I'll give you a clear timeline before we start.",
  },
  {
    question: "What if I don't like the design?",
    answer:
      "You see the design before any code is written. We iterate until you're happy. The Professional and Growth tiers include unlimited revisions during the design phase.",
  },
  {
    question: "Do I need to provide content?",
    answer:
      "If you have text and photos ready, great. If not, I can help write copy and source quality imagery. We'll figure out the best approach during our initial call.",
  },
  {
    question: "What about hosting and the domain?",
    answer:
      "I'll set everything up for you. The Growth tier includes hosting. For other tiers, I'll recommend affordable, reliable hosting (usually $5-15/month) and handle the setup.",
  },
  {
    question: "Can I update the site myself?",
    answer:
      "Yes. I'll set up a simple way for you to make basic updates like text changes, new photos, and blog posts. For anything bigger, I'm a message away.",
  },
  {
    question: "What happens after launch?",
    answer:
      "The Professional tier includes 30 days of free support. The Growth tier includes ongoing support and updates. For the Starter tier, I'm still available at my standard hourly rate.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-center justify-between gap-4"
      >
        <span className="font-display text-lg text-heading">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-48 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-muted leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl text-heading mb-4">
            Questions you might have
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border-t border-border"
        >
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
