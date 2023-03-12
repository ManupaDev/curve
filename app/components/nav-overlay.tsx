import { XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Link from "next/link";
import { useEffect } from "react";

function NavOverlay({ isOpen, handleMenuControlClick }: { isOpen: boolean; handleMenuControlClick: () => void }) {
  
    return (
    <div
      className={clsx("fixed top-0 left-0 right-0 bottom-0  z-10 border border-red-500 bg-gradient-5", {
        hidden: !isOpen,
      })}
    >
      <div className="fixed left-0 right-0 top-0 flex justify-between border border-black py-4 px-8">
        <div></div>
        <XMarkIcon width={20} height={20} onClick={()=>{
            handleMenuControlClick();
            window.onscroll = function() {};
        }} />
      </div>
      <div className="flex min-h-screen flex-col items-end justify-center border border-black px-12">
        <div className="grid grid-cols-1 gap-y-4">
          <Link className="block text-right text-4xl" onClick={()=>{
            handleMenuControlClick();
            window.onscroll = function() {};
          }} href={"/"}>
            Work
          </Link>
          <Link className="block text-right text-4xl" onClick={()=>{
            handleMenuControlClick();
            window.onscroll = function() {};
          }} href={"/services"}>
            Services
          </Link>
          <Link className="block text-right text-4xl" onClick={()=>{
            handleMenuControlClick();
            window.onscroll = function() {};
          }} href={"/pricing"}>
            Pricing
          </Link>
          <Link className="block text-right text-4xl" onClick={()=>{
            handleMenuControlClick();
            window.onscroll = function() {};
          }} href={"/for-startups"}>
            For Startups
          </Link>
          <Link className="block text-right text-4xl" onClick={()=>{
            handleMenuControlClick();
            window.onscroll = function() {};
          }} href={"/contact-us"}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavOverlay;
