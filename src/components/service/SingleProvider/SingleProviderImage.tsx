import w1 from "@/assets/images/w1.png";
import w2 from "@/assets/images/w2.png";
import w3 from "@/assets/images/w3.png";
const SingleProviderImage = () => {
  return (
    <div className="w-full flex items-stretch gap-6 py-10">
      <div
        className="w-3/2 bg-[linear-gradient(0deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.10)_100%)]
 overflow-hidden rounded-3xl"
      >
        <img
          className="rounded-3xl max-h-[576px] w-full object-cover"
          src={w1}
          alt=""
        />
      </div>
      <div className="w-1/2 flex flex-col gap-6">
        <img
          className="max-h-[273px] rounded-3xl bg-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%)]"
          src={w2}
          alt=""
        />
        <img
          className="max-h-[273px] rounded-3xl bg-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%)]"
          src={w3}
          alt=""
        />
      </div>
    </div>
  );
};

export default SingleProviderImage;
