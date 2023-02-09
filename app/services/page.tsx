/* eslint-disable react/no-unescaped-entities */
import Hero from "./components/hero";

function Services() {
  return (
    <div className="font-sans">
      <Hero />
      <div className="px-12 py-16 border border-black">
        <h1 className="text-2xl underline">Branding</h1>
        <h1 className="text-3xl mt-8">We make brands, or give the old ones a facelift</h1>
        <p className="text-base mt-8">
          We're in the business of building awesome digital products for tech companies and beyond, from creating
          <span>new brands</span> to <span>designing a killer website</span> and <span>user experience.</span>
        </p>
      </div>
      <div className="px-1 flex"> 
        <div className="h-24 border-l-4 border-dashed border-black w-24"></div>
        <div>
          <h1 className="text-lg">Brand Name</h1>
          <h2 className="text-sm">Brand Name Consultancy</h2>
          <h2 className="text-sm">Brand Name Creation</h2>
          <h2 className="text-sm">Brand Name Availabbility</h2>
        </div>
        <div className="h-24 border-l-4 border-dashed border-black w-24"></div>
        <div>
          <h1 className="text-lg">Brand Book</h1>
          <h2 className="text-sm">Brand Name Consultancy</h2>
          <h2 className="text-sm">Brand Name Creation</h2>
          <h2 className="text-sm">Brand Name Availabbility</h2>
        </div>
      </div>
    </div>
  );
}

export default Services;
