import CommonButton from "@/common/button/CommonButton";
import CommonHeader from "@/common/header/CommonHeader";
import { Link } from "react-router-dom";

interface LoginSubmitProps {
  setSteps: React.Dispatch<React.SetStateAction<number>>;
  step: number;
}

const LoginSubmit: React.FC<LoginSubmitProps> = ({ setSteps, step }) => {
  return (
    <div>
      <div className="pt-5">
        <CommonButton
          type={step === 3 ? "submit" : "button"}
          onClick={() =>
            setSteps((pre) => {
              if (pre < 3) return pre + 1;
              return pre;
            })
          }
          className="mb-5 !w-[180px] bg-[#18181B] text-white  transition"
        >
          Next
        </CommonButton>

        <CommonHeader className=" text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </CommonHeader>
      </div>
    </div>
  );
};

export default LoginSubmit;
