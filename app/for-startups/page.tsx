import Hero from "./components/hero";
import Pricing from "./components/pricing";

function ForStartups() {
  return (
    <div className="font-sans">
      <Hero />
      <Pricing />
      <div className="border border-black bg-curve-grey-10 px-12 py-16 xl:px-72 xl:py-32">
        <h1 className="text-6xl xl:text-8xl text-white">Sometimes it’s entirely <span className="text-curve-green-3">free.</span></h1>
        <h2 className="text-2xl xl:text-4xl mt-8 text-curve-grey-11">
          Yes you heard it right.Apply for our start-up partnership program and get 100% off for all our services !
          <span className="text-curve-grey-7">Apply now</span> 
        </h2>
      </div>
    </div>
  );
}

export default ForStartups;
