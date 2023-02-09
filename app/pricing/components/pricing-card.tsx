import { CheckIcon } from "@heroicons/react/20/solid";

function PricingCard() {
    return (
      <div className="flex flex-none flex-col justify-between px-2 py-2 w-60 h-60 rounded-lg border border-black">
        <h1 className="text-2xl">Branding</h1>
        <p className="text-xs mt-2">
          Essential branding services for new startups looking for a unique brand identity.perfect for those on a budget.
        </p>
        <div className="flex flex-col mt-2">
          <div className="flex items-center">
            <CheckIcon width={12} height={12} />
            <p className="text-xs mt-1 ml-2">Naming</p>
          </div>
          <div className="flex items-center">
            <CheckIcon width={12} height={12} />
            <p className="text-xs mt-1 ml-2">Logo Design</p>
          </div>
          <div className="flex items-center">
            <CheckIcon width={12} height={12} />
            <p className="text-xs mt-1 ml-2">Visual Identity</p>
          </div>
          <div className="flex items-center">
            <CheckIcon width={12} height={12} />
            <p className="text-xs mt-1 ml-2">Brand Strategy</p>
          </div>
        </div>
        <div className=" border-black flex justify-between">
          <button type="button" className="  button-border-1 text-xs rounded-lg px-4 py-2">
            More
          </button>
          <div className="flex items-end">
            <p className="text-xs">Starting From</p>
            <h1 className="text-2xl">$149</h1>
          </div>
        </div>
      </div>
    );
  }

  export default PricingCard;