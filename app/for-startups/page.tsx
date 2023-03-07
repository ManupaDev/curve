import Hero from "./components/hero";
import Pricing from "./components/pricing";

function ForStartups() {
  return (
    <div className="font-sans">
      <Hero />
      <Pricing />
      <div className="border border-black px-12 py-16 xl:px-72 xl:py-32">
        <h1 className="text-6xl xl:text-8xl">Sometimes it’s entirely free.</h1>
        <h2 className="text-2xl xl:text-4xl mt-8">
          Yes you heard it right.Apply for our start-up partnership program and get 100% off for all our services !
          Apply now
        </h2>
      </div>
    </div>
  );
}

export default ForStartups;
