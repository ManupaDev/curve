/* eslint-disable react/no-unescaped-entities */
import HDecoration from "@/app/primitives/h-decoration";
import Link from "next/link";

function Service() {
  return (
    <div className="border border-black py-16 px-12 xl:px-72 xl:py-32">
      <h1 className="text-2xl md:text-3xl xl:text-5xl text-curve-blue-4 underline">Web Development</h1>
      <h1 className="mt-4 xl:mt-8 text-3xl md:text-4xl text-curve-grey-2 xl:text-6xl underline">Web Build Websites</h1>
      <p className="my-16 text-xs md:text-base xl:text-2xl xl:my-32">
        We're in the business of building awesome digital products for tech companies and beyond, from creating new
        brands to designing a killer website and user experience.
      </p>
      <HDecoration />
      <div className="py-8 grid grid-cols-1 xl:grid-cols-2">
        <div className="py-8">
          <h3 className="text-sm md:text-lg xl:text-2xl text-curve-grey-5">Hello World!</h3>
          <p className="mt-8 text-xs md:text-base xl:text-xl text-curve-grey-4">
            At curve, we're all about "Beautiful outside, performance inside." We're old-school developers who still
            believe in writing code that's efficient and fast – not just pretty. For us, every project is an opportunity
            to make the user experience even better. We're all about the little details that make a big difference. And,
            once the development is done, we don't just leave you hanging – we're here to help plan, set up, and manage
            your too.
          </p>
        </div>
        <div></div>
      </div>
      <HDecoration />
      <div className="mt-8 flex flex-col items-center gap xl:flex-row xl:justify-start xl:gap-8 xl:mt-16">
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

export default Service;
