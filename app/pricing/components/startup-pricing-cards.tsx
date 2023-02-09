import StartupPricingCard from "./startup-pricing-card";

function StartupPricingCards() {
  return (
    <div className="mt-4 flex gap-x-4  overflow-x-scroll  xl:mt-32">
      <StartupPricingCard />
      <StartupPricingCard />
      <StartupPricingCard />
    </div>
  );
}

export default StartupPricingCards;
