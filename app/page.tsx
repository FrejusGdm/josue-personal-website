import ProblemSolverHero from "@/components/heroes/ProblemSolverHero";
import CurrentlySection from "@/components/sections/CurrentlySection";
import ExploreCards from "@/components/sections/ExploreCards";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero: "I like to solve hard problems" with typing animation */}
      <ProblemSolverHero />

      {/* Currently working on section - Lance Yan style */}
      <CurrentlySection />

      {/* Explore my work - 4 cards */}
      <ExploreCards />
    </main>
  );
}
