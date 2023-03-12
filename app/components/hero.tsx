import Image from "next/image";
import JSLogo from "./../../public/assets/js-logo.svg";
import FigmaLogo from "./../../public/assets/figma-logo.svg";
import FlutterLogo from "./../../public/assets/flutter-logo.svg";
import ReactLogo from "./../../public/assets/react-logo.svg";
import SwiftLogo from "./../../public/assets/swift-logo.svg";
import TailwindLogo from "./../../public/assets/tailwindcss-logo.svg";


function Hero() {
  return (
    <div className="flex min-h-screen flex-col justify-between border-black py-16 xl:gap-y-16 xl:py-32">
      <div>
        <h1 className="text-5xl xl:text-6xl ">
          <span className="text-bg-1">Introducing the newest player in town, delivering top-notch quality </span>
          <span className="text-bg-2">in all that we do.</span>
        </h1>
        <h3 className="mt-2 text-2xl underline lg:mt-4 xl:mt-4 xl:text-3xl">More about our services</h3>
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
    </div>
  );
}

export default Hero;
