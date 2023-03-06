/* eslint-disable react/no-unescaped-entities */
"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

function Services() {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    if (window.innerWidth > 1024) {
      setIsMobile(false);
    }
  }, []);

  if (isMobile) {
    return (
      <div className="min-h-screen border border-black py-8 xl:py-32">
        <h1 className="text-3xl xl:text-6xl">
          Our services / <span>what we do</span>
        </h1>
        <p className="mt-4 text-base xl:mt-32 xl:text-3xl">
          From crafting the perfect name, designing a killer website to making sure it's easy to use, we've got it all.
          We also focus on consistency across all mediums and touchpoints, so you can be sure your brand is always on
          point.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-y-2">
          <Disclosure as={"div"} className="border border-black">
            <Disclosure.Button
              as="div"
              className="flex items-center justify-between border-black py-2 ui-open:border-red-500"
            >
              <span className="block text-lg">Branding</span>
              <ChevronDownIcon width={18} height={18} />
            </Disclosure.Button>
            <Disclosure.Panel className="border border-black text-gray-500">
              Yes! You can purchase a license that you can share with your entire team.
            </Disclosure.Panel>
          </Disclosure>

          <Disclosure as={"div"} className="border border-black">
            <Disclosure.Button as="div" className="flex items-center justify-between border-black py-2">
              <span className="block text-lg">Web Development</span>
              <ChevronDownIcon width={18} height={18} />
            </Disclosure.Button>
            <Disclosure.Panel className="border border-black text-gray-500">
              Yes! You can purchase a license that you can share with your entire team.
            </Disclosure.Panel>
          </Disclosure>

          <Disclosure as={"div"} className="border border-black">
            <Disclosure.Button as="div" className="flex items-center justify-between border-black py-2">
              <span className="block text-lg">UX/UI</span>
              <ChevronDownIcon width={18} height={18} />
            </Disclosure.Button>
            <Disclosure.Panel className="border border-black text-gray-500">
              Yes! You can purchase a license that you can share with your entire team.
            </Disclosure.Panel>
          </Disclosure>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen border border-black py-8 xl:py-32">
      <h1 className="text-3xl xl:text-6xl">
        Our services / <span>what we do</span>
      </h1>
      <p className="mt-4 text-base xl:mt-32 xl:text-3xl">
        From crafting the perfect name, designing a killer website to making sure it's easy to use, we've got it all. We
        also focus on consistency across all mediums and touchpoints, so you can be sure your brand is always on point.
      </p>

      <div className="grid-cols-1-2 gap-x-16 mt-32 grid">
        <div className="flex flex-col gap-y-10">
          <div className="flex justify-end gap-x-4 cursor-pointer">
            <h1 className="text-4xl">Branding</h1>
            <div className="h-20 w-1 rounded border border-black bg-black"></div>
          </div>
          <div className="flex justify-end gap-x-4 cursor-pointer">
            <h1 className="text-4xl text-right">Web Development</h1>
            <div className="h-20 w-1 rounded border border-black bg-black"></div>
          </div>
          <div className="flex justify-end gap-x-4 cursor-pointer">
            <h1 className="text-4xl">UX/UI</h1>
            <div className="h-20 w-1 rounded border border-black bg-black"></div>
          </div>
        </div>
        <div className="border border-black rounded-lg">

        </div>
      </div>
    </div>
  );
}

export default Services;
