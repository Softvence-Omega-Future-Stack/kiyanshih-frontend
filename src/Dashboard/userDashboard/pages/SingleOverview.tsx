import SingleProviderInformation from "@/components/service/SingleProvider/SingleProviderInformation";
import SingleProviderRelatedServices from "@/components/service/SingleProvider/SingleProviderRelatedServices";
import SingleProviderReview from "@/components/service/SingleProvider/SingleProviderReview";
import { useParams } from "react-router-dom";

const SingleOverview = () => {
  const { title } = useParams();

  console.log("title", title);
  return (
    <div>
      <SingleProviderInformation />
      <SingleProviderReview />
      <SingleProviderRelatedServices />
    </div>
  );
};

export default SingleOverview;
