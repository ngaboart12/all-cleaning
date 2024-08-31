import DownloadApp from "@/components/Homepage/DownloadApp";
import FrequentlyQuestion from "@/components/Homepage/FrequentlyQuestion";
import HeroSection from "@/components/Homepage/HeroSection";
import JoinOurNetwork from "@/components/Homepage/JoinOurNetwork";
import OurMobileApp from "@/components/Homepage/OurMobileApp";
import PopularService from "@/components/Homepage/PopularService";
import Services from "@/components/Homepage/Services";
import Testimonials from "@/components/Homepage/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full ">
      <HeroSection/>
      <Services/>
      <DownloadApp/>
      <PopularService/>
      <JoinOurNetwork/>
      <Testimonials/>
      <OurMobileApp/>
      <FrequentlyQuestion/>
      
    </div>
  );
}
