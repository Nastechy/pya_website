
import About from "@/components/aboutus";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import LogoExplanation from "@/components/logoExplanation";
import MembersCarousel from "@/components/members-carousel";
import Mission from "@/components/mission-section";
import { Navbar } from "@/components/navbar";
import PresidentSpeech from "@/components/president-speech";
import StatsSection from "@/components/stats-section";
import SupportSection from "@/components/support-section";


export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="">
        <Navbar />
        <Hero />
        <StatsSection />
        <PresidentSpeech />
        <Mission />
        <SupportSection />
        <LogoExplanation />
        <About />
        <MembersCarousel />
        <Footer/>
      </div>
    </div>
  );
}

