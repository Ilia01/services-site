"use client";

import { motion } from "framer-motion";
import { Clock, Search, Smartphone } from "lucide-react";

/*
  Psychology: Loss aversion.
  People are 2x more motivated to avoid loss than to achieve gain.
  Frame the problem before the solution so they feel the pain,
  then offer the relief. Each point names something they already
  suspect but haven't articulated.
*/

const problems = [
  {
    icon: Clock,
    title: "Your website looks like 2019",
    description:
      "Outdated design signals outdated service. Visitors decide in 3 seconds whether to stay or leave. If your site looks old, they assume your business is too.",
  },
  {
    icon: Search,
    title: "Clients can't find you on Google",
    description:
      "If your site isn't built for search engines, potential clients are finding your competitors instead. Every day without proper SEO is money left on the table.",
  },
  {
    icon: Smartphone,
    title: "It barely works on phones",
    description:
      "Over 70% of your potential clients browse on their phone. If your site isn't fast and easy to use on mobile, you're losing the majority of your leads.",
  },
];

export function Problems() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl text-heading mb-4">
            Your website might be costing you clients
          </h2>
          <p className="text-muted text-lg">
            Most coaches and consultants know their website isn&apos;t great.
            Few realize how much business it&apos;s actively losing them.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8 sm:gap-12">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-action-soft flex items-center justify-center">
                <problem.icon className="w-5 h-5 text-action" />
              </div>
              <h3 className="font-display text-xl text-heading">
                {problem.title}
              </h3>
              <p className="text-muted leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
