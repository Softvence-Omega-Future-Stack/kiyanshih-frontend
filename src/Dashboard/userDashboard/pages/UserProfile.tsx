import CommonWrapper from "@/common/space/CommonWrapper"
import UserProfileTop from "../userComponents/UserProfile/UserProfileTop"
import AddressInformation from "../userComponents/UserProfile/AddressInformation";
import ProfileCompletation from "../userComponents/UserProfile/ProfileCompletation";

const UserProfile = () => {
    return (
        <div className="py-8 md:py-10">
            <CommonWrapper>
                <UserProfileTop />
                <ProfileCompletation percentage={70}/>
                <AddressInformation/>
            </CommonWrapper>
        </div>
    )
}

export default UserProfile;
