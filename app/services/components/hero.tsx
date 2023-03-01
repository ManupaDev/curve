/* eslint-disable react/no-unescaped-entities */
function Hero() {
  return (
    <div className="px-12 xl:px-72 xl:py-32 min-h-screen flex flex-col justify-center border border-black">
      <h1 className="text-4xl xl:text-7xl">Our bread and butter</h1>
      <p className="text-base mt-8 xl:text-3xl">
        We're in the business of building awesome digital products for tech companies and beyond, from creating{" "}
        <span>new brands</span> to <span>designing a killer website</span> and <span>user experience.</span>
      </p>
      <div className="flex justify-between xl:justify-start xl:gap-x-4 mt-8">
        <h1 className="text-base underline xl:text-5xl">Branding</h1>
        <h1 className="text-base underline xl:text-5xl">Web Development</h1>
        <h1 className="text-base underline xl:text-5xl">UX/UI</h1>
      </div>
      <div className="w-full h-48 xl:h-96 border border-black mt-8"></div>
    </div>
  );
}

export default Hero;
