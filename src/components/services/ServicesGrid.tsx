"use client";

import { ServiceCard } from "./ServiceCard";
import { SERVICES_DETAILED } from "@/constants";

export const ServicesGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-32">
          {SERVICES_DETAILED.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
