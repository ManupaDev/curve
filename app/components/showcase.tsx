import Image from "next/image";
import TheusImage from "./../../public/assets/theus-branding.png";
import DailyImage from "./../../public/assets/dayly-branding.png";
import { motion } from "framer-motion";

function Showcase() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
      className="min-h-screen border-black py-4  lg:py-8 xl:py-32"
    >
      <h1 className="text-3xl xl:text-6xl">
        New to the scene, but already making a <span className="text-curve-blue-3">big impact</span>
      </h1>
      <div className="mt-8 grid grid-cols-1 place-items-center gap-y-8 lg:grid-cols-2">
        <Image src={TheusImage} alt="theus branding" />
        <Image src={DailyImage} alt="daily branding" />
      </div>
    </motion.div>
  );
}

export default Showcase;
