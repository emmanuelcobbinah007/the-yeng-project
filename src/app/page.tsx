import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Priorities from "./components/Priorities";
import Gallery from "./components/Gallery";
import CTASection from "./components/CTASection";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
     <Header />
     <HeroSection />
     <About />
     <VisionMission />
     <Priorities />
     <Gallery />
     <CTASection />
     <PreFooter />
     <Footer />
    </div>
  );
}
