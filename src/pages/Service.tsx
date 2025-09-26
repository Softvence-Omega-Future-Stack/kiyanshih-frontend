import CommonWrapper from "@/common/space/CommonWrapper";
import FeaturedSection from "@/components/service/FeaturedSection";
import ReadyToHelp from "@/components/service/ReadyToHelp";
import ServiceCardSection from "@/components/service/ServiceCardSection";
import ServiceTopSection from "@/components/service/ServiceTopSection";
import Footer from "@/layout/Footer";

const Service = () => {
  return (
    <div>
      <CommonWrapper>
        <ServiceTopSection />
        <ServiceCardSection />
        <FeaturedSection />
        <ReadyToHelp />
      </CommonWrapper>
      <Footer />
    </div>
  );
};

export default Service;
