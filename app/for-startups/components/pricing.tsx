/* eslint-disable react/no-unescaped-entities */
import StartupPricingCards from "@/app/pricing/components/startup-pricing-cards";

function Pricing() {
  return (
    <div className="py-16 xl:py-32 bg-curve-grey-6">
      <div className="px-12 xl:px-72">
        <h1 className="text-center text-4xl xl:text-6xl text-white">Packages <span className="text-curve-grey-7">and Pricing</span></h1>
        <p className="mt-8 text-center lg:text-lg text-base xl:mt-16 xl:text-3xl text-white">
          From sparking of branding to a full blast of website development and UI/UX design, <span className="text-curve-green-3">we've got you covered</span>. 
          <span className="text-curve-grey-7">Our pricing is transparent and simple to understand, making the selection process a breeze.</span>
        </p>
      </div>
      <StartupPricingCards />
      <h1 className="mt-16  px-12 lg:text-xl  text-lg xl:px-72 xl:text-4xl"><span className="text-curve-grey-7">Learn more about Start-up Packages and</span> <span className="text-curve-grey-11">Pricing+</span></h1>
    </div>
  );
}

export default Pricing;
