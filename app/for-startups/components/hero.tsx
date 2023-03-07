function Hero() {
  return (
    <div className="flex min-h-screen flex-col  justify-center px-12 font-sans xl:px-72">
      <h1 className="text-left text-4xl">Ready, Set, Launch.</h1>
      <h1 className="text-left text-4xl">Startup launch made simple.</h1>
      <h2 className="mt-4 text-2xl">Our pre-made packages dedicated for startups.</h2>
      <div className="mt-2 flex gap-x-4">
        <span className="block text-xl">#Branding</span>
        <span className="block text-xl">#Development</span>
        <span className="block text-xl">#UX/UI</span>
      </div>
    </div>
  );
}

export default Hero;
