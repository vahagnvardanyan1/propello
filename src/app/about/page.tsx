"use client";

import { TeamCards } from "@/components/TeamCards";
import {
  AboutHero,
  MissionVision,
  TimelineSection,
  ValuesSection,
  CultureSection,
  JoinUsCTA,
} from "@/components/about";

const AboutPage = () => {
  return (
    <div className="min-h-screen" id="main-content">
      <AboutHero />
      <MissionVision />
      <TimelineSection />
      <ValuesSection />

      {/* Leadership Team */}
      <section className="py-24 bg-[var(--ivory)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[var(--dusty-blue)] uppercase tracking-wider text-sm mb-3">
              Meet the Team
            </p>
            <h2
              className="text-[var(--midnight-blue)]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Led by Industry Experts
            </h2>
          </div>
          <TeamCards />
        </div>
      </section>

      <CultureSection />
      <JoinUsCTA />
    </div>
  );
};

export default AboutPage;
