import Hero from "./components/hero";
import Showcase from "./components/showcase";

function Home() {
  return (
    <div className="border border-black">
      <Hero />
      <Showcase/>
    </div>
  );
}

export default Home;
