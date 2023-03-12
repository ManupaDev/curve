import Link from "next/link";

function CTA() {
  return (
    <div className="py-10 xl:py-64    border-black">
      <h1 className="text-2xl text-center xl:text-5xl">
        Interested in getting the deets or pricing info?
        <br />
        <span className="text-curve-blue-1 mt-4 block">Just click away</span>
      </h1>
      <div className="mt-8 flex flex-col items-center gap xl:flex-row xl:justify-center xl:gap-8 xl:mt-16">
        <Link  href={"/pricing"} className="button-border-1 text-xl xl:text-4xl  rounded-2xl px-4 py-2">
          Pricing
        </Link>
        <button type="button" className="text-bg-3 button-border-1 text-xl xl:text-4xl xl:mt-0 rounded-2xl px-4 py-2 mt-4">
          Drop a message
        </button>
      </div>
    </div>
  );
}

export default CTA;
