/* eslint-disable react/no-unescaped-entities */
function Hero() {
  return (
    <div className="px-12 xl:px-72 bg-gradient-2 xl:py-32 min-h-screen flex flex-col justify-center border border-black">
      <h1 className="text-4xl md:text-5xl xl:text-7xl">Our bread and butter</h1>
      <p className="text-base md:text-xl mt-8 xl:text-3xl text-curve-grey-4">
        We're in the business of building awesome digital products for tech companies and beyond, from creating{" "}
        <span className="text-curve-grey-5">new brands</span> to <span className="text-curve-grey-5">designing a killer website</span> and <span className="text-curve-grey-5">user experience.</span>
      </p>
      <div className="flex justify-between xl:justify-start xl:gap-x-4 mt-8">
        <h1 className="text-base underline md:text-2xl xl:text-4xl">Branding</h1>
        <h1 className="text-base underline md:text-2xl xl:text-4xl">Web Development</h1>
        <h1 className="text-base underline md:text-2xl xl:text-4xl">UX/UI</h1>
      </div>
      <div className="w-full h-48 xl:h-96 border border-black mt-8"></div>
    </div>
  );
}

export default Hero;
