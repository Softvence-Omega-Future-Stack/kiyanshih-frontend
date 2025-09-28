import FixList from "@/components/home/FixList";
import HeroSection from "@/components/home/HeroSection";
import Price from "@/components/home/Price";
import Service from "@/components/home/Service";
import Footer from "@/layout/Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Service />
      <div></div>
      <FixList className="!py-40" title="How Fixlist works?" />
      <Price />
      <Footer />
    </div>
  );
};

export default Home;
