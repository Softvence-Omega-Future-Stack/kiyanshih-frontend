import CommonWrapper from "@/common/space/CommonWrapper";
import FixList from "@/components/home/FixList";
import PricingCards from "@/components/Provider/PricingCards";
import ProviderHeroSection from "@/components/Provider/ProviderHeroSection";
import TestimonialCarousel from "@/components/Provider/TestimonialCarousel";
import ReadyToHelp from "@/components/service/ReadyToHelp";
import CurveProvider from "@/components/Work/CurveProvider";
import MiniCard from "@/components/Work/MiniCard";
import Footer from "@/layout/Footer";
const Provider = () => {
  return (
    <div>
      <ProviderHeroSection />
      <FixList
        className="pt-10"
        title="Why Choose Fixlist?"
        subtitle="Everything you need to grow your service business"
      />
      <MiniCard />
      <CurveProvider />
      <PricingCards />
      <CommonWrapper>
        <TestimonialCarousel />
        <ReadyToHelp />
      </CommonWrapper>

      <Footer />
    </div>
  );
};

export default Provider;
