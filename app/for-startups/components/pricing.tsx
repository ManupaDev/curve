/* eslint-disable react/no-unescaped-entities */
import StartupPricingCards from "@/app/pricing/components/startup-pricing-cards";

function Pricing() {
  return (
    <div className="bg-curve-grey-6 py-16 xl:py-32">
      <div className="px-12 xl:px-72">
        <h1 className="text-center text-4xl text-white xl:text-6xl">
          Packages <span className="text-curve-grey-7">and Pricing</span>
        </h1>
        <p className="mt-8 text-center text-base text-white lg:text-lg xl:mt-16 xl:text-3xl">
          From sparking of branding to a full blast of website development and UI/UX design,{" "}
          <span className="text-curve-green-3">we've got you covered</span>.
          <span className="text-curve-grey-7">
            Our pricing is transparent and simple to understand, making the selection process a breeze.
          </span>
        </p>
      </div>
      <StartupPricingCards />
      <h1 className="mt-4 px-12  text-lg text-curve-grey-4 xl:mt-16 xl:px-72 xl:text-4xl">
        Learn more about Start-up <span className="text-curve-grey-16">Packages and Pricing+</span>
      </h1>
    </div>
  );
}

export default Pricing;
