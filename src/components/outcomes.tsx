"use client";

import { motion } from "framer-motion";
import { Zap, MonitorSmartphone, TrendingUp, Shield, Palette, Headphones } from "lucide-react";

/*
  Psychology: Outcome framing.
  Don't sell features ("responsive design"). Sell outcomes
  ("clients find you on their phone"). The client doesn't care
  about the technology — they care about what it does for their business.
  Six items: enough to feel comprehensive, not enough to overwhelm.
*/

const outcomes = [
  {
    icon: Zap,
    title: "Loads in under 2 seconds",
    description: "Fast sites rank higher on Google and keep visitors engaged. Slow sites lose 40% of visitors.",
  },
  {
    icon: MonitorSmartphone,
    title: "Perfect on every device",
    description: "Phone, tablet, desktop. Your site looks sharp and works everywhere your clients are.",
  },
  {
    icon: TrendingUp,
    title: "Built for Google",
    description: "Clean code, proper SEO structure, and fast loading so search engines rank you above competitors.",
  },
  {
    icon: Palette,
    title: "Design that builds trust",
    description: "A polished look that matches the quality of your service. First impressions happen in milliseconds.",
  },
  {
    icon: Shield,
    title: "Secure and reliable",
    description: "SSL, backups, and modern hosting. Your site stays up and your visitors' data stays safe.",
  },
  {
    icon: Headphones,
    title: "You're never alone after launch",
    description: "Questions, updates, small changes. I'm a message away. No call centers, no ticket queues.",
  },
];

export function Outcomes() {
  return (
    <section className="py-24 sm:py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl text-heading mb-4">
            What you actually get
          </h2>
          <p className="text-muted text-lg">
            Not tech jargon. Real results that make a difference for your
            business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-bg rounded-xl p-6 border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-green-soft flex items-center justify-center mb-4">
                <outcome.icon className="w-4.5 h-4.5 text-green" />
              </div>
              <h3 className="font-display text-lg text-heading mb-2">
                {outcome.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {outcome.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
