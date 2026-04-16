"use client";

import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Problems } from "@/components/problems";
import { Outcomes } from "@/components/outcomes";
import { Process } from "@/components/process";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { About } from "@/components/about";
import { Cta } from "@/components/cta";

/*
  Page flow follows a persuasion arc:
  1. Hero — hook with the outcome
  2. Problems — validate the pain (loss aversion)
  3. Outcomes — show the solution (gain framing)
  4. Process — remove uncertainty
  5. Pricing — anchor high, recommend middle
  6. Testimonials — social proof (founding offer for now)
  7. FAQ — handle remaining objections
  8. About — build personal trust
  9. CTA — convert
*/

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Problems />
        <Outcomes />
        <Process />
        <Pricing />
        <Testimonials />
        <Faq />
        <About />
        <Cta />
      </main>
    </div>
  );
}
