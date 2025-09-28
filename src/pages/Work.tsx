import CommonWrapper from "@/common/space/CommonWrapper";
import FixList from "@/components/home/FixList";
import Price from "@/components/home/Price";
import ReadyToHelp from "@/components/service/ReadyToHelp";
import CurveProvider from "@/components/Work/CurveProvider";
import MiniCard from "@/components/Work/MiniCard";
import Trust from "@/components/Work/Trust";
import WorkHeroSection from "@/components/Work/WorkHeroSection";
import Footer from "@/layout/Footer";

const Work = () => {
  return (
    <div>
      <WorkHeroSection />
      <FixList
        title="For Clients"
        subtitle="Getting help has never been easier"
      />
      <MiniCard />
      <CurveProvider />
      <Trust />
      <Price />
      <CommonWrapper className="py-20">
        <ReadyToHelp />
      </CommonWrapper>
      <Footer />
    </div>
  );
};

export default Work;
