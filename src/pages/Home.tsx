import FixList from "@/components/home/FixList";
import Hero from "@/components/home/Hero";
import Price from "@/components/home/Price";
import Service from "@/components/home/Service";
import Footer from "@/layout/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <FixList />
      <Price />
      <Footer />
    </div>
  );
};

export default Home;
