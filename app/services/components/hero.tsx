/* eslint-disable react/no-unescaped-entities */
function Hero() {
  return (
    <div className="px-12 min-h-screen flex flex-col justify-center border border-black">
      <h1 className="text-4xl">Our bread and butter</h1>
      <p className="text-base mt-8">
        We're in the business of building awesome digital products for tech companies and beyond, from creating{" "}
        <span>new brands</span> to <span>designing a killer website</span> and <span>user experience.</span>
      </p>
      <div className="flex justify-between mt-8">
        <h1 className="text-base underline">Branding</h1>
        <h1 className="text-base underline">Web Development</h1>
        <h1 className="text-base underline">UX/UI</h1>
      </div>
      <div className="w-full h-48 border border-black mt-8"></div>
    </div>
  );
}

export default Hero;
