"use client";
import { useState, useEffect } from "react";
import BusinessPricingCard from "./business-pricing-card";

function BusinessPricingCards() {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    if (window.innerWidth > 1024) {
      setIsMobile(false);
    }
  }, []);

  if (isMobile) {
    return (
      <div className="mt-4 flex gap-x-4  overflow-x-scroll px-12 xl:mt-32 xl:px-0">
        {/* Cards */}
        <BusinessPricingCard size="m" />
        <BusinessPricingCard size="m" />
        <BusinessPricingCard size="m" />
      </div>
    );
  }

  return (
    <div className="grid-cols-1-2 grid gap-x-4 border-black  xl:mt-32 xl:px-32">
      <div className="flex flex-col  items-end justify-center">
        <BusinessPricingCard size="m" />
      </div>
      <div className="flex flex-col gap-y-4">
        <div className=" flex items-end gap-x-4 border-red-500">
          <BusinessPricingCard size="l" />
          <BusinessPricingCard size="s" />
        </div>
        <div className="flex  gap-x-4 border-red-500">
          <BusinessPricingCard size="m" />
          <BusinessPricingCard size="s" />
        </div>
      </div>
    </div>
  );
}

export default BusinessPricingCards;
