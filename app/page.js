import AboutUsSection from "@/components/AboutSection";
import AboutUsSection2 from "@/components/AboutSection2";
import CallToActionSection from "@/components/CallToAction";
import HomeSection from "@/components/HomeSection";
import PartnerCarousel from "@/components/PartnerCorousel";

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutUsSection />
      <AboutUsSection2 />
      <PartnerCarousel />
      <CallToActionSection />
    </>
  );
}
