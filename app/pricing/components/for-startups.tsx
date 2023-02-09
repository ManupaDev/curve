import PricingCard from "./pricing-card";

function ForStartups() {
  return (
    <div className="py-8 border border-black">
      <div className="mt-4">
        <h1 className="text-xl">For Startups</h1>
        <h1 className="text-3xl">Thinking of giving your business a makeover?</h1>
      </div>
      <h1 className="mt-16 text-lg">
        Want to launch a new digital product? or ready to create a website for your business?
      </h1>
      <div className="flex overflow-x-scroll gap-x-4 mt-4">
        {/* Cards */}
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
      <h1 className="text-lg mt-4">Learn more about Start-up Packages and Pricing+</h1>
    </div>
  );
}

export default ForStartups;
