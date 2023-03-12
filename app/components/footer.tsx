/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import Image from "next/image";

import IconFB from "./../../public/assets/icons8-facebook.svg";
import IconLinkedIn from "./../../public/assets/icons8-linkedin-circled.svg";
import IconInstagram from "./../../public/assets/icons8-instagram.svg";
import { usePathname } from "next/navigation";
import clsx from "clsx";

function Footer() {
  const pathname = usePathname();
  const isDark = pathname === "/for-startups";

  return (
    <div
      className={clsx("border-black   px-8 py-8 xl:px-16 xl:py-16", {
        "bg-curve-grey-6": isDark,
        "bg-[#eeeeee]": !isDark,
      })}
    >
      <div className="md:grid md:grid-cols-2 md:gap-x-4">
        <div>
          <h1 className={clsx("text-lg xl:text-4xl", { "text-white": isDark })}>Psst...wanna know a secret ?</h1>
          <h1 className="text-base xl:mt-4 text-curve-grey-17 xl:text-3xl   ">
            We love to brag about ourselves and keep you in the loop on all the awesome things we're doing.
          </h1>
        </div>
        <div
          className={clsx(
            "mt-4 flex items-center justify-between  rounded-lg  border-black p-2 md:mt-0 md:h-fit xl:rounded-2xl xl:p-4",
            { "bg-[#fafafa]": !isDark, "bg-[#353535]": isDark }
          )}
        >
          <input
            type="text"
            className={clsx("block  focus:outline-none  xl:text-2xl", { "bg-[#353535] text-curve-grey-17": isDark, "bg-[#FAFAFA] text-curve-grey-17":!isDark })}
            placeholder="That's why we need your email."
          />
          <button className="text-lg text-curve-green-4 xl:text-3xl">Join</button>
        </div>
      </div>
      <div className="mt-4 bg-[#E8E8E8] pt-0.5 xl:mt-16"></div>
      <div className="mt-4 xl:mt-16">
        <div></div>
        <div>
          <div className="grid grid-cols-3 gap-4">
            <Link href="/services" className="text-curve-grey-17 xl:text-2xl">
              Services
            </Link>
            <Link href="/" className="text-curve-grey-17 xl:text-2xl">
              Work
            </Link>
            <Link href="/pricing" className="text-curve-grey-17 xl:text-2xl">
              Pricing
            </Link>
          </div>
          <div className="grid-cols-1-2 mt-2 grid xl:mt-4">
            <Link href="/for-startups" className="text-curve-grey-17 xl:text-2xl">
              For Startups
            </Link>
            <Link href="/" className="text-curve-grey-17 xl:text-2xl">
              Contract Policy
            </Link>
          </div>
        </div>
        <Link href="/" className="mt-2 block rounded text-curve-grey-17  xl:text-2xl">
          Apply for partnership program
        </Link>
        <div className="mt-2 flex gap-x-4 xl:mt-4">
          <Image src={IconFB} alt="facebook icon" width={24} height={24} color={"#9E9E9E"} />
          <Image
            src={IconLinkedIn}
            alt="linkedin icon"
            width={24}
            height={24}
            color={"#9E9E9E"}
            className="text-curve-grey-17"
          />
          <Image
            src={IconInstagram}
            alt="linkedin icon"
            width={24}
            height={24}
            color={"#9E9E9E"}
            className="text-curve-grey-17"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
