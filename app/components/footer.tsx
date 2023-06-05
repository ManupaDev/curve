/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import Image from "next/image";

import IconFB from "./../../public/assets/icons8-facebook.svg";
import IconLinkedIn from "./../../public/assets/icons8-linkedin-circled.svg";
import IconInstagram from "./../../public/assets/icons8-instagram.svg";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { MdFacebook } from "react-icons/md";
import { BsLinkedin, BsInstagram } from "react-icons/bs";

function Footer() {
  const pathname = usePathname();
  const isDark = pathname === "/for-startups";

  return (
    <div
      className={clsx("border-black px-8 py-8 xl:px-16", {
        "bg-curve-grey-6": isDark,
        "bg-[#eeeeee]": !isDark,
      })}
    >
      <div className="md:grid md:grid-cols-2 md:gap-x-4">
        <div>
          <h1 className={clsx("text-lg xl:text-3xl", { "text-white": isDark })}>Psst...wanna know a secret ?</h1>
          <h1 className="text-base text-curve-grey-17 xl:mt-4 xl:text-2xl   ">
            We love to brag about ourselves and keep you in the loop on all the awesome things we're doing.
          </h1>
        </div>
        <div
          className={clsx(
            "mt-4 flex justify-between rounded-lg border-black p-2 md:mt-0 md:h-fit xl:rounded-2xl xl:p-4",
            {
              "bg-[#fafafa]": !isDark,
              "bg-[#353535]": isDark,
            }
          )}
        >
          <input
            type="text"
            className={clsx("w-3/4 focus:outline-none  xl:text-xl", {
              "bg-[#353535] text-curve-grey-17": isDark,
              "bg-[#FAFAFA] text-curve-grey-17": !isDark,
            })}
            placeholder="That's why we need your email."
          />
          <button className="text-lg text-curve-green-4 xl:text-2xl">Join</button>
        </div>
      </div>
      <div className="mt-4 bg-[#E8E8E8] pt-0.5 "></div>
      <div className="mt-4 ">
        <div></div>
        <div>
          <div className="grid grid-cols-3 gap-4">
            <Link href="/services" className="text-curve-grey-17 xl:text-xl">
              Services
            </Link>
            <Link href="/" className="text-curve-grey-17 xl:text-xl">
              Work
            </Link>
            <Link href="/pricing" className="text-curve-grey-17 xl:text-xl">
              Pricing
            </Link>
          </div>
          <div className="grid-cols-1-2 mt-2 grid xl:mt-4">
            <Link href="/for-startups" className="text-curve-grey-17 xl:text-xl">
              For Startups
            </Link>
            <Link href="/" className="text-curve-grey-17 xl:text-xl">
              Contract Policy
            </Link>
          </div>
        </div>
        <Link href="/" className="mt-2 block rounded text-curve-grey-17  xl:text-xl">
          Apply for partnership program
        </Link>
        <div className="mt-2  flex items-center gap-x-8 xl:mt-4">
          <MdFacebook size={32} className={"text-[#9E9E9E]"} />
          <BsLinkedin size={24} className={"text-[#9E9E9E]"} />
          <BsLinkedin size={24} className={"text-[#9E9E9E]"} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
