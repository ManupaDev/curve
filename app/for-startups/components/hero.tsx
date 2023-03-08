function Hero() {
  return (
    <div className="flex min-h-screen flex-col  justify-center px-12 font-sans xl:px-72 border border-black">
      <h1 className="text-left text-4xl md:text-5xl xl:text-6xl">Startup launch made simple.</h1>
      <h1 className="text-left text-4xl md:text-5xl xl:text-6xl">Ready, Set, Launch.</h1>
      <h2 className="mt-4 text-2xl xl:text-4xl">Our pre-made packages dedicated for startups.</h2>
      <div className="mt-2 flex gap-x-4">
        <span className="block text-lg xl:text-3xl">#Branding</span>
        <span className="block text-lg xl:text-3xl">#Development</span>
        <span className="block text-lg xl:text-3xl">#UX/UI</span>
      </div>
    </div>
  );
}

export default Hero;
