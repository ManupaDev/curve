"use client";
import BusinessPricingCard from "./business-pricing-card";

function BusinessPricingCards() {
  if (window.innerWidth > 1280) {
    return (
      <div className="grid-cols-1-2 xl:px-32 grid gap-x-4  border-black xl:mt-32">
        <div className="flex flex-col  items-end justify-center">
          <BusinessPricingCard size="m" />
        </div>
        <div className="flex flex-col gap-y-4">
          <div className=" gap-x-4 flex items-end border-red-500">
            <BusinessPricingCard size="l" />
            <BusinessPricingCard size="s" />
          </div>
          <div className="gap-x-4  flex border-red-500">
            <BusinessPricingCard size="m" />
            <BusinessPricingCard size="s" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 flex gap-x-4  px-12 xl:px-0 overflow-x-scroll xl:mt-32">
      {/* Cards */}
      <BusinessPricingCard size="m" />
      <BusinessPricingCard size="m" />
      <BusinessPricingCard size="m" />
    </div>
  );
}

export default BusinessPricingCards;