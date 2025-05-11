import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Priorities from "./components/Priorities";
import Footer from "./components/Footer";
import GetInvolved from "./components/GetInvolved";

export default function Home() {
  return (
    <div>
     <Header />
     <HeroSection />
     <About />
     <VisionMission />
     <Priorities />
     {/* <GetInvolved /> */}
     <Footer />
    </div>
  );
}
