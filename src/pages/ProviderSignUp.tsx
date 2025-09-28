import CommonWrapper from "@/common/space/CommonWrapper";
import LargeTitle from "@/common/header/LargeTitle";
import PersonalInformation from "@/components/providerSignUp/PersonalInformation";
import LeftImage from "@/components/providerSignUp/LeftImage";
import LoginSubmit from "@/components/providerSignUp/LoginSubmit";
import { useState } from "react";
import BusinessInformation from "@/components/providerSignUp/BusinessInformation";
import SimpleInformation from "@/components/providerSignUp/SimpleInformation";

const ProviderSignUp = () => {
  const [steps, setSteps] = useState(1);
  return (
    <CommonWrapper>
      <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center bg-white w-full gap-10 lg:gap-20 py-6 ">
        <LeftImage />

        <div className="w-full lg:w-1/2">
          {steps == 3 && (
            <LargeTitle className="mb-6 text-left">
              Provider Registration
            </LargeTitle>
          )}

          {steps === 1 && <PersonalInformation />}
          {steps === 2 && <BusinessInformation />}
          {steps === 3 && <SimpleInformation />}
          <LoginSubmit step={steps} setSteps={setSteps} />
        </div>
      </div>
    </CommonWrapper>
  );
};

export default ProviderSignUp;
