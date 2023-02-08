import PricingSplash from "./components/pricing-splash";
import ForBusinesses from "./components/for-businesses";
import ForStartups from "./components/for-startups";

function Pricing() {
  return (
    <div className="px-12 font-sans">
      <PricingSplash />
      <ForBusinesses />
      <ForStartups />
    </div>
  );
}

export default Pricing;
