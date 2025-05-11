import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
     <Header />
     <HeroSection />
     <About />
     <VisionMission />
     <Footer />
    </div>
  );
}
