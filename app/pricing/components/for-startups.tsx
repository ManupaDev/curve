import StartupPricingCards from "./startup-pricing-cards";


function ForStartups() {
  return (
    <div className="  border-black py-8 xl:py-32">
      <div className="px-12 xl:px-72">
        <div className="mt-4">
          <h1 className="text-xl text-curve-blue-2 xl:text-4xl">For Startups</h1>
          <h1 className="mt-4 text-3xl xl:text-6xl text-curve-grey-2">Thinking of giving your business a makeover?</h1>
        </div>
        <h1 className="mt-4 text-lg xl:mt-32 text-curve-grey-4 xl:text-4xl">
          Want to launch a new digital product? or ready to create a website for your business?
        </h1>
      </div>
      <StartupPricingCards />
      <h1 className="mt-4 text-lg  xl:text-4xl px-12 xl:px-72 text-curve-grey-4 xl:mt-16">Learn more about Start-up <span className="text-curve-grey-16">Packages and Pricing+</span></h1>
    </div>
  );
}

export default ForStartups;
