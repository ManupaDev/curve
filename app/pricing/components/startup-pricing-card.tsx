import { CheckIcon } from "@heroicons/react/20/solid";

function StartupPricingCard() {
  return (
    <div className="flex h-60 w-60 flex-none flex-col justify-between rounded-lg border border-black px-2 py-2">
      <h1 className="text-2xl">LaunchPad</h1>
      <p className="mt-2 text-xs">
        Essential branding services for new startups looking for a unique brand identity.perfect for those on a budget.
      </p>
      <div className="mt-2 flex flex-col">
        <div className="mt-1 flex items-center">
          <CheckIcon width={12} height={12} />
          <p className=" ml-2 text-xs">Naming</p>
        </div>
        <div className="mt-1 flex items-center">
          <CheckIcon width={12} height={12} />
          <p className=" ml-2 text-xs">Logo Design</p>
        </div>
        <div className="mt-1 flex items-center">
          <CheckIcon width={12} height={12} />
          <p className=" ml-2 text-xs">Visual Identity</p>
        </div>
        <div className="mt-1 flex items-center">
          <CheckIcon width={12} height={12} />
          <p className=" ml-2 text-xs">Brand Strategy</p>
        </div>
      </div>
      <div className="mt-1 flex justify-between border-black">
        <button type="button" className="  button-border-1 rounded-lg px-4 py-2 text-xs">
          Start now
        </button>
        <div className="flex items-end">
          <h1 className="text-2xl">$149</h1>
          <p className="text-xs mb-1">/fixed</p>
        </div>
      </div>
    </div>
  );
}

export default StartupPricingCard;
