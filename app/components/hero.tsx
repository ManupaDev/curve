import Image from "next/image";
import JSLogo from "./../../public/assets/js-logo.svg";
import FigmaLogo from "./../../public/assets/figma-logo.svg";
import FlutterLogo from "./../../public/assets/flutter-logo.svg";
import ReactLogo from "./../../public/assets/react-logo.svg";
import SwiftLogo from "./../../public/assets/swift-logo.svg";
import TailwindLogo from "./../../public/assets/tailwindcss-logo.svg";


function Hero() {
  return (
    <div className="py-16 min-h-screen flex flex-col justify-between border border-black">
      <h1 className="  text-5xl">
        Introducing the newest player in town, delivering top-notch quality <span>in all that we do.</span>
      </h1>
      <div>
        <h1 className="text-base  ">tools we use</h1>
        <div className="flex flex-wrap flex-row justify-center gap-4 mt-8">
          <Image width={20} src={JSLogo} alt="js-logo" />
          <Image width={72} src={FigmaLogo} alt="figma-logo" />
          <Image width={72} src={FlutterLogo} alt="flutter-logo" />
          <Image width={60} src={ReactLogo} alt="react-logo" />
          <Image width={64} src={SwiftLogo} alt="swift-logo" />
          <Image width={96} src={TailwindLogo} alt="tailwindcss-logo" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
