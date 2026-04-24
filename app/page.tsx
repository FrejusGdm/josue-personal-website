import { getAllEssays } from "@/lib/essays";
import { HomeModeSwitcher } from "@/components/mode/HomeModeSwitcher";

export default async function Home() {
  const essays = await getAllEssays();
  return (
    <main className="w-full pb-32">
      <HomeModeSwitcher essays={essays} />
    </main>
  );
}
