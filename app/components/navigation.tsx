"use client";
import { Bars2Icon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation({ handleMenuControlClick }: { handleMenuControlClick: () => void }) {

  const pathname = usePathname();
  const isDark = pathname === "/for-startups";

  
  return (
    <div className={clsx("fixed left-0 z-10 right-0 top-0 flex bg-white items-center justify-between border border-black  px-8 xl:px-16 py-4",{
      "bg-curve-grey-12 text-white":isDark,
    })}>
      <div></div>
      <div className="hidden xl:flex  gap-x-8 justify-between">
        <Link
          className="block text-right text-xl"
          href={"/"}
        >
          Work
        </Link>
        <Link
          className="block text-right text-xl"
          href={"/services"}
        >
          Services
        </Link>
        <Link
          className="block text-right text-xl"
          href={"/pricing"}
        >
          Pricing
        </Link>
        <Link
          className="block text-right text-xl"
          href={"/for-startups"}
        >
          For Startups
        </Link>
        <Link
          className="block text-right text-xl"
          href={"/contact-us"}
        >
          Contact Us
        </Link>
      </div>
      <Bars2Icon
        width={20}
        height={20}
        onClick={() => {
          handleMenuControlClick();
          window.onscroll = function () {
            window.scrollTo(0, 0);
          };
        }}
        className="xl:hidden block"
      />
    </div>
  );
}

export default Navigation;
