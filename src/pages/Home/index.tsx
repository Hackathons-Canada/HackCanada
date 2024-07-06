import About from "../../components/About";
import Hero from "../../components/Hero";
import Sponsors from "../../components/Sponsors";

const HomePage = () => {
  return (
    <main className="bg-[#c2cc59]">
      <Hero />
      <About />
      <Sponsors />
    </main>
  );
};

export default HomePage;
