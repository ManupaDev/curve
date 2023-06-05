import StartupPricingCard from "./startup-pricing-card";

function StartupPricingCards() {
  return (
    <div className="startup-pricing-cards mt-4 grid grid-cols-1 place-items-center gap-4 overflow-x-scroll   xl:mt-32 lg:px-4 lg:grid-cols-3">
      <StartupPricingCard name="Pad" />
      <StartupPricingCard name="X" />
      <StartupPricingCard name="X Pro" />
    </div>
  );
}

export default StartupPricingCards;
