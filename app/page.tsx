import Hero from "./components/hero";
import Showcase from "./components/showcase";
import Services from "./components/services";
import CTA from "./components/cta";

function Home() {
  return (
    <div className="px-12 font-sans">
      <Hero />
      <Showcase />
      <Services/>
      <CTA/>

    </div>
  );
}

export default Home;
