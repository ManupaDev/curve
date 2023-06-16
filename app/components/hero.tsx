import Image from "next/image";
import JSLogo from "./../../public/assets/js-logo.svg";
import FigmaLogo from "./../../public/assets/figma-logo.svg";
import FlutterLogo from "./../../public/assets/flutter-logo.svg";
import ReactLogo from "./../../public/assets/react-logo.svg";
import SwiftLogo from "./../../public/assets/swift-logo.svg";
import TailwindLogo from "./../../public/assets/tailwindcss-logo.svg";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [text, setText] = useState("all that we do");
  const strings = useMemo(() => ["Ux/Ui", "development", "branding"], []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % strings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [strings.length]);

  useEffect(() => {
    setText(strings[index]);
  }, [index, strings]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex min-h-screen flex-col  justify-between border-black py-16 lg:justify-start xl:justify-between xl:gap-y-16 xl:py-32"
    >
      <div>
        <h1 className="text-5xl lg:mt-16 xl:mt-0 xl:text-7xl ">
          <span className="text-bg-1">Introducing the newest player in town, delivering top-notch quality </span>
          <span className="text-bg-2">{text}.</span>
        </h1>
        <Link
          href="/services"
          className="mt-4 block cursor-pointer text-3xl text-curve-grey-18 underline transition delay-100 hover:no-underline lg:mt-8 xl:mt-16 xl:text-4xl"
        >
          More about our services
        </Link>
      </div>

      <div>
        <h1 className="mt-16 text-base md:text-2xl  xl:text-4xl">tools we use</h1>
        <div className="mt-2 grid grid-cols-3 place-items-center gap-x-4 gap-y-8 px-2  lg:mt-4 lg:grid-cols-6 xl:mt-8">
          <Image width={20} className="sm:scale-125 xl:scale-175" src={JSLogo} alt="js-logo" />
          <Image width={72} className="sm:scale-125 xl:scale-175" src={FigmaLogo} alt="figma-logo" />
          <Image width={72} className="sm:scale-125 xl:scale-175" src={FlutterLogo} alt="flutter-logo" />
          <Image width={60} className="sm:scale-125 xl:scale-175" src={ReactLogo} alt="react-logo" />
          <Image width={64} className="sm:scale-125 xl:scale-175" src={SwiftLogo} alt="swift-logo" />
          <Image width={96} className="sm:scale-125 xl:scale-175" src={TailwindLogo} alt="tailwindcss-logo" />
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
