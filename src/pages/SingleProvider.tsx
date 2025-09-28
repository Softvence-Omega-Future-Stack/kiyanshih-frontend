import CommonWrapper from "@/common/space/CommonWrapper";
import Hero from "@/components/home/Hero";
import SingleProviderImage from "@/components/service/SingleProvider/SingleProviderImage";
import SingleProviderInformation from "@/components/service/SingleProvider/SingleProviderInformation";
import SingleProviderRelatedServices from "@/components/service/SingleProvider/SingleProviderRelatedServices";
import SingleProviderReview from "@/components/service/SingleProvider/SingleProviderReview";
import { originalTitle } from "@/help/help";
import Footer from "@/layout/Footer";
import { useParams } from "react-router-dom";
import heroImage from "@/assets/images/service2.png";

const SingleProvider = () => {
  const { name } = useParams();

  return (
    <div>
      <Hero
        title={`Professional ${originalTitle(name ?? "")}, Just a Click Away.`}
        subtitle="We'll tackle your entire to-do list, big or small. Book your trusted local handyman today."
        image={heroImage}
        subColor="!text-white"
      />

      <CommonWrapper>
        <SingleProviderImage />
        <SingleProviderInformation />
        <SingleProviderReview />
        <SingleProviderRelatedServices />
      </CommonWrapper>
      <Footer />
    </div>
  );
};

export default SingleProvider;
