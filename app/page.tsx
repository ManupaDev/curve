import Hero from "./components/hero";
import Showcase from "./components/showcase";
import Contact from "./components/contact-cta";

function Home() {
  return (
    <div className="border border-black">
      <Hero />
      <Showcase/>
      <Contact/>
    </div>
  );
}

export default Home;
