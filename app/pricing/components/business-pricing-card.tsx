import { CheckIcon } from "@heroicons/react/20/solid";

function BusinessPricingCard({ size }: { size: string }) {
  if (size === "m") {
    return (
      <div className="flex w-80 h-w-80 flex-none flex-col justify-between rounded-xl border border-black px-4 py-4">
        <h1 className="text-3xl">Branding</h1>
        <p className="mt-4 text-sm">
          Essential branding services for new startups looking for a unique brand identity.perfect for those on a
          budget.
        </p>
        <div className="mt-4 flex flex-col">
          <div className="mt-1 flex items-center">
            <CheckIcon width={14} height={14} />
            <p className=" ml-2 text-sm">Naming</p>
          </div>
          <div className="mt-1 flex items-center">
            <CheckIcon width={14} height={14} />
            <p className=" ml-2 text-sm">Logo Design</p>
          </div>
          <div className="mt-1 flex items-center">
            <CheckIcon width={14} height={14} />
            <p className=" ml-2 text-sm">Visual Identity</p>
          </div>
          <div className="mt-1 flex items-center">
            <CheckIcon width={14} height={14} />
            <p className=" ml-2 text-sm">Brand Strategy</p>
          </div>
        </div>
        <div className=" mt-2 flex justify-between border-black">
          <button type="button" className="  button-border-1 rounded-lg px-4 py-2 text-sm">
            More
          </button>
          <div className="flex items-end">
            <p className="text-sm">Starting From</p>
            <h1 className="text-3xl">$149</h1>
          </div>
        </div>
      </div>
    );
  }
  else if (size === "l") {
    return (
      <div className="flex w-96 h-96 flex-none flex-col justify-between rounded-xl border border-black px-4 py-4">
        <h1 className="text-4xl">Branding</h1>
        <p className="mt-4 text-base">
          Essential branding services for new startups looking for a unique brand identity.perfect for those on a
          budget.
        </p>
        <div className="mt-4 flex flex-col">
          <div className="mt-1 flex items-center">
            <CheckIcon width={14} height={14} />
            <p className=" ml-2 text-base">Naming</p>
          </div>
          <div className="mt-1 flex items-center">
            <CheckIcon width={14} height={14} />
            <p className=" ml-2 text-base">Logo Design</p>
          </div>
          <div className="mt-1 flex items-center">
            <CheckIcon width={14} height={14} />
            <p className=" ml-2 text-base">Visual Identity</p>
          </div>
          <div className="mt-1 flex items-center">
            <CheckIcon width={14} height={14} />
            <p className=" ml-2 text-base">Brand Strategy</p>
          </div>
        </div>
        <div className=" mt-2 flex justify-between border-black">
          <button type="button" className="  button-border-1 rounded-lg px-4 py-2 text-base">
            More
          </button>
          <div className="flex items-end">
            <p className="text-base mb-2">Starting From</p>
            <h1 className="text-4xl">$149</h1>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-60 w-60 flex-none flex-col justify-between rounded-lg border border-black px-2 py-2">
      <h1 className="text-2xl">Branding</h1>
      <p className="mt-2 text-xs">
        Essential branding services for new startups looking for a unique brand identity.perfect for those on a budget.
      </p>
      <div className="mt-2 flex flex-col">
        <div className="flex mt-1 items-center">
          <CheckIcon width={12} height={12} />
          <p className=" ml-2 text-xs">Naming</p>
        </div>
        <div className="flex mt-1 items-center">
          <CheckIcon width={12} height={12} />
          <p className=" ml-2 text-xs">Logo Design</p>
        </div>
        <div className="flex mt-1 items-center">
          <CheckIcon width={12} height={12} />
          <p className=" ml-2 text-xs">Visual Identity</p>
        </div>
        <div className="flex mt-1 items-center">
          <CheckIcon width={12} height={12} />
          <p className=" ml-2 text-xs">Brand Strategy</p>
        </div>
      </div>
      <div className="mt-1 flex justify-between border-black">
        <button type="button" className="  button-border-1 rounded-lg px-4 py-2 text-xs">
          More
        </button>
        <div className="flex items-end">
          <p className="text-xs mb-1">Starting From</p>
          <h1 className="text-2xl">$149</h1>
        </div>
      </div>
    </div>
  );
}

export default BusinessPricingCard;