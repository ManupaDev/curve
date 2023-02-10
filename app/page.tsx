import Hero from "./components/hero";
import Showcase from "./components/showcase";
import Services from "./components/services";
import CTA from "./components/cta";

function Home() {
  return (
    <div className="px-12 font-sans xl:px-72">
      <Hero />
      <Showcase />
      <Services />
      <CTA />
    </div>
  );
}

export default Home;
