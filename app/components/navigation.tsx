"use client";
import { Bars2Icon } from "@heroicons/react/20/solid";

function Navigation({handleMenuControlClick}:{handleMenuControlClick:() => void}) {
  return (
    <div className="fixed left-0 right-0 top-0 flex items-center justify-between border border-black bg-white px-8 py-4 ">
      <div></div>
      <Bars2Icon width={20} height={20} onClick={()=>{
        handleMenuControlClick();
        window.onscroll = function() {
            window.scrollTo(0, 0);
        };
      }}/>
    </div>
  );
}

export default Navigation;
