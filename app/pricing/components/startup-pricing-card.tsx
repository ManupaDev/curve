"use client";

import { CheckIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { usePathname } from "next/navigation";

function StartupPricingCard({ name }: { name: string }) {

  const pathname = usePathname();
  const isDark = pathname === "/for-startups";

  return (
    <div className="button-border-1 flex h-[350px] w-80 flex-none flex-col justify-between rounded-2xl px-4 py-4 xl:h-[390px] xl:w-96 xl:rounded-3xl">
      <div className="flex justify-end">
        <div className="button-border-1 rounded-xl p-2">
          <InformationCircleIcon width={20} height={20} className={clsx("text-curve-grey-14")}/>
        </div>
      </div>
      <h1 className={clsx("text-3xl text-white xl:text-4xl",{"text-curve-grey-9":!isDark})}>
        Launch
        <span
          className={clsx({
            "text-curve-blue-1": name === "Pad",
            "text-curve-green-3": name === "X",
            "text-curve-grey-8": name === "X Pro",
          })}
        >
          {name}
        </span>
      </h1>
      <p className={clsx("mt-2 text-sm xl:mt-4 text-white xl:text-base",{"text-curve-grey-9":!isDark})}>
        Essential branding services for new startups looking for a unique brand identity.perfect for those on a budget.
      </p>
      <div className="mt-2 flex flex-col xl:mt-4">
        <div className="mt-0.5 flex items-center xl:mt-1">
          <CheckIcon width={14} height={14}  className={clsx({"text-white":(name==="Pad" || name === "X"  || name ==="X Pro") && isDark})}/>
          <p className={clsx("mt-1 text-sm xl:ml-2 xl:text-base ",{"text-white":(name==="Pad" || name === "X" || name ==="X Pro") && isDark} )}>Branding</p>
        </div>
        <div className="mt-0.5 flex items-center xl:mt-1">
          <CheckIcon width={14} height={14} className={clsx({"text-white": (name === "X" || name ==="X Pro") && isDark})}/>
          <p className={clsx("mt-1 text-sm xl:ml-2 xl:text-base ",{"text-white": (name === "X" || name ==="X Pro") && isDark})}>Web Development</p>
        </div>
        <div className="mt-0.5 flex items-center xl:mt-1">
          <CheckIcon width={14} height={14} className={clsx({"text-white": (name === "X Pro") && isDark})}/>
          <p className={clsx("mt-1 text-sm xl:ml-2 xl:text-base ",{"text-white": (name === "X Pro") && isDark})}>UX/UI Design</p>
        </div>
        <div className="mt-0.5 flex items-center xl:mt-1">
          <CheckIcon width={14} height={14} className={clsx({"text-white":(name === "X Pro") && isDark})}/>
          <p className={clsx("mt-1 text-sm xl:ml-2 xl:text-base ",{"text-white":(name === "X Pro") && isDark})}>7 - 10 days quick delivery</p>
        </div>
      </div>
      <div className="mt-1 flex justify-between border-black xl:mt-2">
        <button type="button" className={clsx("  text-white button-border-1 rounded-xl px-4 py-2 text-sm xl:text-base",{"text-curve-grey-9":!isDark})}>
          Start Now
        </button>
        <div className="flex items-end">
          <h1 className={clsx("text-3xl xl:text-4xl text-white",{"text-curve-grey-9":!isDark})}>$149</h1>
          <p className={(clsx("text-sm xl:text-base text-white",{"text-curve-grey-9":!isDark}))}>/fixed</p>
        </div>
      </div>
    </div>
  );
}

export default StartupPricingCard;
