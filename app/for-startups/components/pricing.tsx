/* eslint-disable react/no-unescaped-entities */
import StartupPricingCards from "@/app/pricing/components/startup-pricing-cards";

function Pricing() {
  return (
    <div className="py-16 xl:py-32">
      <div className="px-12 xl:px-72">
        <h1 className="text-center text-4xl xl:text-6xl">Packages and Pricing</h1>
        <p className="mt-8 text-center lg:text-lg text-base xl:mt-16 xl:text-3xl">
          From sparking of branding to a full blast of website development and UI/UX design, we've got you covered. Our
          pricing is transparent and simple to understand, making the selection process a breeze.
        </p>
      </div>
      <StartupPricingCards />
      <h1 className="mt-16  px-12 lg:text-xl  text-lg xl:px-72 xl:text-4xl">Learn more about Start-up Packages and Pricing+</h1>
    </div>
  );
}

export default Pricing;
