"use client";

import { featuredHonors, featuredInvolvement } from "@/content/honors";
import { HonorsList } from "@/components/sections/HonorsList";

export default function EditorialHonors() {
  return (
    <section className="w-full bg-white text-[#1a1612] px-6 md:px-12 py-24 md:py-32 border-t border-[#1a1612]/15">
      <div className="max-w-[680px] mx-auto">
        <HonorsList
          honors={featuredHonors()}
          involvement={featuredInvolvement()}
          variant="editorial"
          showViewAll
        />
      </div>
    </section>
  );
}
