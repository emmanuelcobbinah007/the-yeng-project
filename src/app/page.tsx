import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Priorities from "./components/Priorities";
import Gallery from "./components/Gallery_new";
import CTASection from "./components/CTASection";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Michael Yeng",
    "jobTitle": "UGSRC Presidential Candidate",
    "affiliation": {
      "@type": "EducationalOrganization",
      "name": "University of Ghana"
    },
    "description": "UGSRC Presidential candidate and Evandy Hall President with a passion for advocacy, service, and impact.",
    "url": "https://www.michaelyeng.com",
    "image": "https://www.michaelyeng.com/assets/images/HeroImg.jpg",
    "sameAs": [
      "https://www.facebook.com/michaelyeng",
      "https://www.twitter.com/michaelyeng",
      "https://www.instagram.com/michaelyeng"
    ]
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Michael Yeng for UGSRC President",
    "description": "Official campaign for Michael Yeng's UGSRC Presidential bid at the University of Ghana.",
    "url": "https://www.michaelyeng.com",
    "logo": "https://www.michaelyeng.com/assets/images/logo1nobg.png",
    "foundingDate": "2025",
    "founder": {
      "@type": "Person",
      "name": "Michael Yeng"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
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
    </>
  );
}
