import Image from "next/image";
import TheusImage from "./../../public/assets/theus-branding.png";
import DailyImage from "./../../public/assets/dayly-branding.png";

function Showcase() {
  
  return (
    <div className="py-4 xl:py-32 lg:py-8 border border-black min-h-screen">
      <h1 className="text-3xl xl:text-6xl">
        New to the scene, but already making a <span className="text-curve-blue-3">big impact</span>
      </h1>
      <div className="grid mt-8 grid-cols-1 lg:grid-cols-2 place-items-center gap-y-8">
        <Image src={TheusImage} alt="theus branding" />
        <Image src={DailyImage} alt="daily branding" />
      </div>
    </div>
  );
}

export default Showcase;
