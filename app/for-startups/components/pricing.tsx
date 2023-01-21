import { CheckIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { MdOutlineInfo } from "react-icons/md";

function Pricing() {
  return (
    <div className="lg:px-32 lg:py-32 bg-gradient-3">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl">
          <span className="text-white">Packages and</span>
          <span className="text-curve-grey"> Pricing</span>
        </h1>
        <h1 className="text-4xl mt-16 text-center">
          <span className="text-white">
            From sparking of branding to a full blast of website development and UI/UX design,
          </span>
          <span className="text-curve-green-light"> we&apos;ve got you covered.</span>
          <span className="text-curve-grey">
            Our pricing is transparent and simple to understand, making the selection process a breeze.
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-12 mt-16 border-white">
        
        {/* Pricing Box 1 */}
        <div className="border border-gradient-1  relative rounded-3xl px-5 py-4">
          <div className="flex justify-end">
            <div className="flex border-gradient-1 rounded-2xl h-12 w-12  justify-center items-center">
              <MdOutlineInfo size={24} color="#ffffff" />
            </div>
          </div>
          <h1 className="text-6xl">
            <span className="text-white">Launch</span>
            <span className={`text-curve-blue`}>Pad</span>
          </h1>
          <p className="text-white text-xl mt-8">
            Essential branding services for new startups looking for a unique brand identity. perfect for those on a
            budget.
          </p>
          <div className="mt-8">
            <div className="flex items-center px-9 text-white">
              <CheckIcon className="h-5 w-5" />
              <p className="text-xl ml-4">Branding</p>
            </div>
            <div className="flex items-center px-9 text-curve-grey-darker">
              <CheckIcon className="h-5 w-5" />
              <p className="text-xl ml-4">Web Development</p>
            </div>
            <div className="flex items-center px-9 text-curve-grey-darker">
              <CheckIcon className="h-5 w-5" />
              <p className="text-xl ml-4">UX/UI Design</p>
            </div>
            <div className={`flex items-start px-9 text-curve-grey-darker`}>
              <CheckIcon className="h-5 w-5 mt-1" />
              <p className="text-xl ml-4">7-10 Days Quick & Easy Delivery</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <button type="button" className="border-gradient-1 text-white  px-5 py-1 text-xl rounded-xl">
              Start Now
            </button>
            <h1 className="text-white">
              <span className="text-5xl">99$</span>
              <span className="text-xl">/fixed</span>
            </h1>
          </div>
        </div>

        {/* Pricing Box 2 */}
        <div className="border border-gradient-1  relative rounded-3xl px-5 py-4">
          <div className="flex justify-end">
            <div className="flex border-gradient-1 rounded-2xl h-12 w-12  justify-center items-center">
              <MdOutlineInfo size={24} color="#ffffff" />
            </div>
          </div>
          <h1 className="text-6xl">
            <span className="text-white">Launch</span>
            <span className="text-curve-green-light">X</span>
          </h1>
          <p className="text-white text-xl mt-8">
            Essential branding services for new startups looking for a unique brand identity. perfect for those on a
            budget.
          </p>
          <div className="mt-8">
            <div className="flex items-center px-9 text-white">
              <CheckIcon className="h-5 w-5" />
              <p className="text-xl ml-4">Branding</p>
            </div>
            <div className="flex items-center px-9 text-white">
              <CheckIcon className="h-5 w-5" />
              <p className="text-xl ml-4">Web Development</p>
            </div>
            <div className="flex items-center px-9 text-curve-grey-darker">
              <CheckIcon className="h-5 w-5" />
              <p className="text-xl ml-4">UX/UI Design</p>
            </div>
            <div className={clsx(`flex items-start px-9 text-curve-grey-darker`)}>
              <CheckIcon className="h-5 w-5 mt-1" />
              <p className="text-xl ml-4">7-10 Days Quick & Easy Delivery</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <button type="button" className="border-gradient-1 text-white  px-5 py-1 text-xl rounded-xl">
              Start Now
            </button>
            <h1 className="text-white">
              <span className="text-5xl">199$</span>
              <span className="text-xl">/fixed</span>
            </h1>
          </div>
        </div>

        {/* Pricing Box 3 */}
        <div className="border border-gradient-1  relative rounded-3xl px-5 py-4">
          <div className="flex justify-end">
            <div className="flex border-gradient-1 rounded-2xl h-12 w-12  justify-center items-center">
              <MdOutlineInfo size={24} color="#ffffff" />
            </div>
          </div>
          <h1 className="text-6xl">
            <span className="text-white">Launch</span>
            <span className="text-curve-grey-lighter">X Pro</span>
          </h1>
          <p className="text-white text-xl mt-8">
            Essential branding services for new startups looking for a unique brand identity. perfect for those on a
            budget.
          </p>
          <div className="mt-8">
            <div className="flex items-center px-9 text-white">
              <CheckIcon className="h-5 w-5" />
              <p className="text-xl ml-4">Branding</p>
            </div>
            <div className="flex items-center px-9 text-white">
              <CheckIcon className="h-5 w-5" />
              <p className="text-xl ml-4">Web Development</p>
            </div>
            <div className="flex items-center px-9 text-white">
              <CheckIcon className="h-5 w-5" />
              <p className="text-xl ml-4">UX/UI Design</p>
            </div>
            <div className={clsx(`flex items-start px-9 text-white`)}>
              <CheckIcon className="h-5 w-5 mt-1" />
              <p className="text-xl ml-4">7-10 Days Quick & Easy Delivery</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <button type="button" className="border-gradient-1 text-white  px-5 py-1 text-xl rounded-xl">
              Start Now
            </button>
            <h1 className="text-white">
              <span className="text-5xl">349$</span>
              <span className="text-xl">/fixed</span>
            </h1>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
