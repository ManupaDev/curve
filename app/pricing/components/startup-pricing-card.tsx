import { CheckIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

function StartupPricingCard({ name }: { name: string }) {
  return (
    <div className="flex h-[350px] w-80 flex-none flex-col justify-between rounded-2xl border border-black px-4 py-4 xl:h-[390px] xl:w-96 xl:rounded-3xl">
      <div className="flex justify-end">
        <div className="rounded-xl border border-black p-2">
          <InformationCircleIcon width={20} height={20} />
        </div>
      </div>
      <h1 className="text-3xl xl:text-4xl">
        Launch<span>{name}</span>
      </h1>
      <p className="mt-2 text-sm xl:mt-4 xl:text-base">
        Essential branding services for new startups looking for a unique brand identity.perfect for those on a budget.
      </p>
      <div className="mt-2 flex flex-col xl:mt-4">
        <div className="mt-0.5 flex items-center xl:mt-1">
          <CheckIcon width={14} height={14} />
          <p className=" mt-1 text-sm xl:ml-2 xl:text-base">Naming</p>
        </div>
        <div className="mt-0.5 flex items-center xl:mt-1">
          <CheckIcon width={14} height={14} />
          <p className=" mt-1 text-sm xl:ml-2 xl:text-base">Logo Design</p>
        </div>
        <div className="mt-0.5 flex items-center xl:mt-1">
          <CheckIcon width={14} height={14} />
          <p className=" mt-1 text-sm xl:ml-2 xl:text-base">Visual Identity</p>
        </div>
        <div className="mt-0.5 flex items-center xl:mt-1">
          <CheckIcon width={14} height={14} />
          <p className=" mt-1 text-sm xl:ml-2 xl:text-base">Brand Strategy</p>
        </div>
      </div>
      <div className="mt-1 flex justify-between border-black xl:mt-2">
        <button type="button" className="  button-border-1 rounded-xl px-4 py-2 text-sm xl:text-base">
          Start Now
        </button>
        <div className="flex items-end">
          <h1 className="text-3xl xl:text-4xl">$149</h1>
          <p className="text-sm xl:text-base">/fixed</p>
        </div>
      </div>
    </div>
  );
}

export default StartupPricingCard;
