import Hero from "./components/hero";
import ForBusinesses from "./components/for-businesses";
import ForStartups from "./components/for-startups";

function Pricing() {
  return (
    <div className="px-12 font-sans">
      <Hero />
      <ForBusinesses />
      <ForStartups />
    </div>
  );
}

export default Pricing;
