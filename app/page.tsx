
import HeroPage from "./components/HeroPage";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className=" min-h-screen w-full pt-16">
      <div className="absolute top-0 left-0 w-full z-10 flex items-center justify-center">
        <Navbar />
      </div>
      <HeroPage />
      
    </main>
  );
}
