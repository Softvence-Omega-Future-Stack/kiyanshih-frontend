import CommonSpace from "@/common/space/CommonSpace";
import UserSectionHeader from "../reuseable/UserSectionHeader";

const MyJob = () => {
  return (
    <CommonSpace>
      <UserSectionHeader
        title="My Jobs"
        subtitle="View all your currently active job postings"
        text="See All"
      />
    </CommonSpace>
  );
};

export default MyJob;
