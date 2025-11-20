import ModernHero from "@/components/heroes/ModernHero";
import DeepBio from "@/components/sections/DeepBio";
import FeaturedWork from "@/components/sections/FeaturedWork";
import SelectedWriting from "@/components/sections/SelectedWriting";

export default function Home() {
  return (
    <main className="w-full">
      <ModernHero />
      <DeepBio />
      <FeaturedWork />
      <SelectedWriting />
    </main>
  );
}
