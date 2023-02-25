/* eslint-disable react/no-unescaped-entities */
import Hero from "./components/hero";

function Services() {
  return (
    <div className="font-sans">
      <Hero />

      <div className="border border-black px-12 py-16">
        <h1 className="text-2xl underline">Branding</h1>
        <h1 className="mt-8 text-3xl">We make brands, or give the old ones a facelift</h1>
        <p className="mt-8 text-base">
          We're in the business of building awesome digital products for tech companies and beyond, from creating
          <span>new brands</span> to <span>designing a killer website</span> and <span>user experience.</span>
        </p>
      </div>
    </div>
  );
}

export default Services;
