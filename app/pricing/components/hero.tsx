function Hero() {
  return (
    <div className="flex min-h-screen flex-col justify-center border border-black">
      <div>
        <h1 className="text-center text-4xl xl:text-7xl">Our pricing is clear as a sunny day.☀️</h1>
        <h1 className="text-center text-2xl font-normal xl:text-5xl">No hidden fees. No surprises.</h1>
      </div>
      <div className="mt-16 flex flex-col items-center border-black xl:flex-row xl:items-center xl:justify-center xl:gap-x-4 ">
        <button
          type="button"
          className="  button-border-1 w-44 rounded-2xl  px-4 py-2 text-xl  xl:w-80 xl:px-8 xl:py-4 xl:text-4xl"
        >
          For Businesses
        </button>
        <button
          type="button"
          className="  button-border-1 mt-4 w-44 rounded-2xl px-4 py-2 text-xl xl:mt-0 xl:w-80 xl:px-8 xl:py-4 xl:text-4xl"
        >
          For Start-ups
        </button>
      </div>
    </div>
  );
}

export default Hero;
