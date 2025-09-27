import CommonWrapper from "@/common/space/CommonWrapper";
import Hero from "@/components/home/Hero";
import AllProvider from "@/components/service/SingleService.tsx/AllProvider";
import SubCategorySection from "@/components/service/SingleService.tsx/SubCategorySection";
import Footer from "@/layout/Footer";
import heroImage from "@/assets/images/service1.png";
import { useParams } from "react-router-dom";
import { originalTitle } from "@/help/help";

const SingleService = () => {
  const { category } = useParams();
  return (
    <div>
      <Hero
        title={`Professional ${originalTitle(
          category ?? ""
        )}, Just a Click Away.`}
        subtitle="We'll tackle your entire to-do list, big or small. Book your trusted local handyman today."
        image={heroImage}
        subColor="!text-white"
      />
      <CommonWrapper>
        <SubCategorySection />
        <AllProvider />
      </CommonWrapper>
      <Footer />
    </div>
  );
};

export default SingleService;
