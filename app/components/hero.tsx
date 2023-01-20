import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-col lg:px-32 lg:py-32 min-h-screen justify-between">
      <h1 className="font-sans text-7xl">
        <span className="text-gradient-2">Introducing the newest player in town, delivering top-notch quality in</span>
        <span className="text-gradient-3"> branding.</span>
      </h1>
      <div>
        <h1 className="text-5xl">tools we use</h1>
        <div className="flex mt-14 border-black justify-between flex-wrap">
          <Image src={"/assets/js-logo.svg"} width={48} height={48} alt={"Javascript Logo"} />
          <Image src={"/assets/figma-logo.svg"} width={160} height={48} alt={"Javascript Logo"} />
          <Image src={"/assets/flutter-logo.svg"} width={160} height={48} alt={"Javascript Logo"} />
          <Image src={"/assets/react-logo.svg"} width={160} height={48} alt={"Javascript Logo"} />
          <Image src={"/assets/swift-logo.svg"} width={160} height={48} alt={"Javascript Logo"} />
          <Image src={"/assets/tailwindcss-logo.svg"} width={300} height={48} alt={"Javascript Logo"} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
