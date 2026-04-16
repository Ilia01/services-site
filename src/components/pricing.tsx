"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

/*
  Psychology: Anchoring + decoy effect.
  Show the most expensive tier first (or highlight the middle one)
  so the mid-tier feels like a deal by comparison. Use specific prices
  ($1,497 not $1,500) — precision signals that the price was calculated,
  not rounded up. The middle tier is labeled "Most Popular" to trigger
  social proof / conformity bias.
*/

const tiers = [
  {
    name: "Starter",
    price: "$497",
    description: "A single-page website that makes a strong first impression.",
    features: [
      "Single-page responsive design",
      "Mobile-first layout",
      "Contact form or booking link",
      "Basic SEO setup",
      "SSL certificate",
      "2 rounds of revisions",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$1,497",
    description: "A complete website that ranks on Google and converts visitors.",
    features: [
      "Up to 5 pages",
      "Custom design matching your brand",
      "Advanced SEO optimization",
      "Google Analytics setup",
      "Contact forms + integrations",
      "Speed optimization",
      "Unlimited revisions",
      "30 days of free support",
    ],
    cta: "Most Popular",
    highlighted: true,
  },
  {
    name: "Growth",
    price: "$2,497",
    suffix: "+ $97/mo",
    description: "Everything in Professional, plus ongoing care so you never worry about your site again.",
    features: [
      "Everything in Professional",
      "Blog or content section",
      "Monthly performance reports",
      "Ongoing updates and changes",
      "Priority support",
      "Hosting included",
      "Quarterly design refresh",
    ],
    cta: "Let's Talk",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl text-heading mb-4">
            Straightforward pricing
          </h2>
          <p className="text-muted text-lg">
            Every project includes source code, hosting setup, and a site you
            fully own. No lock-in, no hidden fees.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-8 flex flex-col ${
                tier.highlighted
                  ? "bg-green text-white ring-2 ring-green shadow-lg shadow-green/10 relative"
                  : "bg-bg border border-border"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-medium bg-action text-white px-4 py-1 rounded-full">
                  Recommended
                </span>
              )}

              <div className="mb-6">
                <h3
                  className={`font-display text-xl mb-2 ${
                    tier.highlighted ? "text-white" : "text-heading"
                  }`}
                >
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`font-display text-4xl ${
                      tier.highlighted ? "text-white" : "text-heading"
                    }`}
                  >
                    {tier.price}
                  </span>
                  {tier.suffix && (
                    <span
                      className={`text-sm ${
                        tier.highlighted ? "text-white/70" : "text-muted"
                      }`}
                    >
                      {tier.suffix}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm mt-3 leading-relaxed ${
                    tier.highlighted ? "text-white/80" : "text-muted"
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        tier.highlighted ? "text-white/70" : "text-green"
                      }`}
                    />
                    <span
                      className={
                        tier.highlighted ? "text-white/90" : "text-body"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center text-sm font-medium py-3 rounded-lg transition-colors duration-200 ${
                  tier.highlighted
                    ? "bg-white text-green hover:bg-white/90"
                    : "bg-green text-white hover:bg-green-light"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
