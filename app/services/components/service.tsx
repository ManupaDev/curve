/* eslint-disable react/no-unescaped-entities */
import HDecoration from "@/app/primitives/h-decoration";
import Link from "next/link";

function Service() {
  return (
    <div className="border border-black py-16 px-12">
      <h1 className="text-2xl underline">Web Development</h1>
      <h1 className="mt-10 text-3xl underline">Web Build Websites</h1>
      <p className="py-16 text-xs">
        We're in the business of building awesome digital products for tech companies and beyond, from creating new
        brands to designing a killer website and user experience.
      </p>
      <HDecoration />
      <div className="py-8">
        <div className="py-8">
          <h3 className="text-sm">Hello World!</h3>
          <p className="mt-8 text-xs">
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
      <div className="mt-8 flex flex-col items-center">
        <Link href={"/pricing"} className="button-border-1 rounded-2xl px-4  py-2 text-xl">
          Pricing
        </Link>
        <button type="button" className="button-border-1 mt-4 rounded-2xl px-4 py-2 text-xl">
          Drop a message
        </button>
      </div>
    </div>
  );
}

export default Service;
