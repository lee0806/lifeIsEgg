import EarthScene from "@/components/3d/moonScene";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-black text-white">
        <EarthScene />
      </main>
    </>
  );
}
