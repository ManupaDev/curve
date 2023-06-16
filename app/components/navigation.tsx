"use client";
import { Bars2Icon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation({ handleMenuControlClick }: { handleMenuControlClick: () => void }) {
  const pathname = usePathname();
  const isDark = pathname === "/for-startups";

  return (
    <div
      className={clsx(
        "shadow-1 fixed left-0 right-0 top-0 z-10 flex items-center justify-between border-black  bg-white  px-8 py-4 lg:py-6 xl:px-16",
        {
          "bg-curve-grey-12 text-white": isDark,
        }
      )}
    >
      <div></div>
      <div className="hidden justify-between  gap-x-8 xl:flex">
        <Link className="block py-1 px-2 rounded-md hover:bg-curve-grey-19 transition-all ease-in-out text-right text-xl" href={"/"}>
          Work
        </Link>
        <Link className="block py-1 px-2 rounded-md hover:bg-curve-grey-19 transition-all ease-in-out text-right text-xl" href={"/services"}>
          Services
        </Link>
        <Link className="block py-1 px-2 rounded-md hover:bg-curve-grey-19 transition-all ease-in-out text-right text-xl" href={"/pricing"}>
          Pricing
        </Link>
        <Link className="block py-1 px-2 rounded-md hover:bg-curve-grey-19 transition-all  text-right text-xl for-startups-nav-link ease-in-out" href={"/for-startups"}>
          For Startups
        </Link>
        <Link className="block py-1 px-2 rounded-md hover:bg-curve-grey-19 transition-all ease-in-out text-right text-xl" href={"/contact-us"}>
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
        className="block xl:hidden"
      />
    </div>
  );
}

export default Navigation;
