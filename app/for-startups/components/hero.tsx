function Hero() {
  return (
    <div className="bg-gradient-3 flex min-h-screen flex-col  justify-center  border border-black px-12 font-sans xl:px-72">
      <h1 className="text-left text-4xl md:text-5xl xl:text-6xl text-bg-5">Ready, Set, Launch.</h1>
      <h1 className="text-left text-4xl md:text-5xl xl:text-6xl text-[#625F5F]">Startup launch made simple.</h1>
      <h2 className="mt-4 text-2xl xl:text-4xl text-white">Our pre-made packages dedicated for startups.</h2>
      <div className="mt-2 flex gap-x-4">
        <span className="block text-lg xl:text-3xl text-curve-green-2">#Branding</span>
        <span className="block text-lg xl:text-3xl text-curve-green-2">#Development</span>
        <span className="block text-lg xl:text-3xl text-curve-green-2">#UX/UI</span>
      </div>
    </div>
  );
}

export default Hero;
