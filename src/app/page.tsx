
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



export const metadata = {
  title: "Pan Youth Association (PYA)",
  description: "A dynamic Association dedicated to uplifting and empowering young people from diverse backgrounds",
  alternates: {
    canonical: "https://www.pyaabuja.com/",
  },
  openGraph: {
    title: "Pan Youth Association (PYA)",
    description: "A dynamic Association dedicated to uplifting and empowering young people from diverse backgrounds",
    url: "https://www.pyaabuja.com/",
    images: [
      {
        url: "/Newpanlogo.jpeg",
        width: 800,
        height: 600,
        alt: "Pan Abuja Logo",
      },
    ],
    siteName: "Pan Youth Association",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pan Youth Association (PYA)",
    description: "A dynamic Association dedicated to uplifting and empowering young people from diverse backgrounds",
    images: ["/Newpanlogo.jpeg"],
  },
};


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

