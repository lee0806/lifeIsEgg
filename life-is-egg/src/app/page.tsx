import MoonScene from "@/components/3d/moonScene";
import Moon from "@/components/3d/Moon";
import Desert from "@/components/3d/Desert";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-black text-white">
        <MoonScene />
        {/* 달 */}
        <Moon />
        {/* 사막 */}
        <Desert />
      </main>
    </>
  );
}
