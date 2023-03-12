/* eslint-disable react/no-unescaped-entities */
"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import DaylyImg from "./../../../public/assets/dayly-branding.png";
import TheusImg from "./../../../public/assets/theus-branding.png";

function Branding() {
  return (
    <div className=" border-black">
      <div className="px-12 py-16 xl:px-72 xl:py-32">
        <h1 className="text-2xl underline md:text-3xl xl:text-5xl text-curve-green-1">Branding</h1>
        <h1 className="mt-6 text-3xl md:text-4xl xl:text-5xl text-curve-grey-2">We make brands, or give the old ones a facelift</h1>
        <p className="mt-16 text text-base md:text-xl xl:mt-32 xl:text-2xl">
          We're in the business of building awesome digital products for tech companies and beyond, from creating
          <span> new brands</span> to <span>designing a killer website</span> and <span>user experience.</span>
        </p>
      </div>

      <div className="flex justify-between border-black px-1 py-8 xl:py-16  xl:px-72">
        <div className=" grid   w-1 grid-rows-6 gap-y-1.5 border-black">
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
        </div>
        <div className="flex flex-col gap-y-4 pb-8">
          <h1 className="text-lg md:text-xl xl:text-2xl text-curve-grey-5">Brand Name</h1>
          <h2 className="text-xs md:text-sm xl:text-base text-curve-grey-4">Brand Name Consultancy</h2>
          <h2 className="text-xs md:text-sm xl:text-base text-curve-grey-4">Brand Name Creation</h2>
          <h2 className="text-xs md:text-sm xl:text-base text-curve-grey-4">Brand Name Availability</h2>
        </div>
        <div className=" grid   w-1 grid-rows-6 gap-y-1.5 border-black">
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
        </div>
        <div className="flex flex-col gap-y-4 pb-8">
          <h1 className="text-lg md:text-xl xl:text-2xl text-curve-grey-5">Brand Name</h1>
          <h2 className="text-xs md:text-sm xl:text-base text-curve-grey-4">Brand Name Consultancy</h2>
          <h2 className="text-xs md:text-sm xl:text-base text-curve-grey-4">Brand Name Creation</h2>
          <h2 className="text-xs md:text-sm xl:text-base text-curve-grey-4">Brand Name Availability</h2>
        </div>
        <div className=" grid   w-1 grid-rows-6 gap-y-1.5 border-black">
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
        </div>

        <div className="hidden  flex-col gap-y-4 pb-8 xl:flex">
          <h1 className="text-lg md:text-xl xl:text-2xl text-curve-grey-5">Brand Name</h1>
          <h2 className="text-xs md:text-sm xl:text-base text-curve-grey-4">Brand Name Consultancy</h2>
          <h2 className="text-xs md:text-sm xl:text-base text-curve-grey-4">Brand Name Creation</h2>
          <h2 className="text-xs md:text-sm xl:text-base text-curve-grey-4">Brand Name Availability</h2>
        </div>
        <div className="hidden  w-1   grid-rows-6 gap-y-1.5 border-black xl:grid">
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
        </div>
        <div className="hidden flex-col gap-y-4 pb-8 xl:flex">
          <h1 className="text-lg md:text-xl xl:text-2xl text-curve-grey-5">Brand Name</h1>
          <h2 className="text-xs md:text-sm xl:text-base text-curve-grey-4">Brand Name Consultancy</h2>
          <h2 className="text-xs md:text-sm xl:text-base text-curve-grey-4">Brand Name Creation</h2>
          <h2 className="text-xs md:text-sm xl:text-base text-curve-grey-4">Brand Name Availability</h2>
        </div>
        <div className="hidden  w-1   grid-rows-6 gap-y-1.5 border-black xl:grid">
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
          <div className="rounded bg-black"></div>
        </div>
      </div>

      <Disclosure as={"div"} className="border-black px-12 py-8 xl:py-16 xl:px-72">
        <Disclosure.Button as="div" className="flex cursor-pointer items-center gap-x-8  border-black py-2">
          <span className="block text-base md:text-xl xl:text-2xl">A message from our branding team</span>
          <ChevronRightIcon width={20} height={20} className="ui-open:rotate-90 ui-open:transform" />
        </Disclosure.Button>
        <Disclosure.Panel as="div" className=" flex justify-between  border-black text-gray-500">
          <div className=" grid   w-1 grid-rows-6 gap-y-1.5 border-black">
            <div className="rounded bg-black"></div>
            <div className="rounded bg-black"></div>
            <div className="rounded bg-black"></div>
            <div className="rounded bg-black"></div>
            <div className="rounded bg-black"></div>
            <div className="rounded bg-black"></div>
          </div>
          <div className="px-4 py-4">
            <p className="text-sm xl:text-lg">Hello There,👋🏻</p>
            <p className="mt-8 text-sm xl:text-lg">
              Greetings from the branding team. We know there are a lot of branding companies out there, so why choose
              us? Well, for starters, we're not your average branding company.
            </p>
            <p className="mt-8 text-sm xl:text-lg">
              Your brand is more than just a fancy logo or a cool name. It's what makes your business stand out and sets
              you apart from everyone else. And that's why we're here to help. We'll sit down with you, get to know your
              unique idea and turn all of that into a brand that tells your story and makes you stand out.
            </p>
          </div>

          <div className=" grid   w-1 grid-rows-6 gap-y-1.5 border-black">
            <div className="rounded bg-black"></div>
            <div className="rounded bg-black"></div>
            <div className="rounded bg-black"></div>
            <div className="rounded bg-black"></div>
            <div className="rounded bg-black"></div>
            <div className="rounded bg-black"></div>
          </div>
        </Disclosure.Panel>
      </Disclosure>

      <div className="grid grid-cols-1  gap-y-8 px-12 xl:px-72 py-8 xl:py-16">
        <Image src={DaylyImg} alt="dayly branding" />
        <Image src={TheusImg} alt="theus branding" />
      </div>

      <div className="mt-8 flex flex-col items-center px-12 xl:px-72 py-16 gap xl:flex-row xl:justify-start xl:gap-8 xl:mt-16">
        <Link  href={"/pricing"} className="button-border-1 text-xl xl:text-4xl  rounded-2xl px-4 py-2">
          Pricing
        </Link>
        <button type="button" className="button-border-1 text-xl text-bg-3 xl:text-4xl xl:mt-0 rounded-2xl px-4 py-2 mt-4">
          Drop a message
        </button>
      </div>
    </div>
  );
}

export default Branding;
