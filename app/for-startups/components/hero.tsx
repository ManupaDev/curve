function Hero() {
  return (
    <div className="lg:px-32 bg-gradient-2 min-h-screen flex flex-col justify-center">
      <div className="text-7xl">
        <h1>
          <span className="text-gradient-4">Ready,Set,</span>🚀
        </h1>
        <h1>
          <span className="text-gradient-4"> Launch.</span> <span className="text-white">Startup launch</span>
        </h1>
        <h1 className="text-white">made simple</h1>
      </div>
      <div className="text-5xl text-white mt-4">
        <h1>Our pre-made packages dedicated</h1>
        <h1>for startups</h1>
      </div>
      <h1 className="text-curve-green text-3xl mt-8">#Branding #Development #UX/UI</h1>
    </div>
  );
}

export default Hero;
