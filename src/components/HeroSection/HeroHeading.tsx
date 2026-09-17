import { motion, useReducedMotion } from "framer-motion";

const HeroHeading = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="max-w-[1200px] text-center md:text-left"
      initial={reduceMotion ? false : { opacity: 0, clipPath: "inset(0 100% 0 0)" }}
      animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
      transition={{ duration: reduceMotion ? 0.2 : 0.72, ease: [0.16, 1, 0.3, 1], delay: reduceMotion ? 0 : 0.12 }}
    >
      <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-white selection:bg-white selection:text-black sm:text-6xl md:text-8xl">
        <span className="block">An Aspiring</span>
        <span className="inline-block bg-white px-2 text-black">Frontend Engineer</span>
        <span className="block">On A Mission To</span>
        <span className="block">Master The Craft.</span>
      </h1>
    </motion.div>
  );
};

export default HeroHeading;
