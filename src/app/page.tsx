
import About from "@/components/aboutus";
import Hero from "@/components/hero";
import Mission from "@/components/mission-section";
import { Navbar } from "@/components/navbar";
import PresidentSpeech from "@/components/president-speech";
import StatsSection from "@/components/stats-section";


export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="">
        <Navbar />
        <Hero />
        <StatsSection/>
        <PresidentSpeech/>
        <Mission/>
        <About/>
      </div>
    </div>
  );
}

