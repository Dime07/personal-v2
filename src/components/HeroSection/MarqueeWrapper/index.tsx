import clsx from "clsx";
import { motion } from "framer-motion";
import "@styles/text.css";

const marqueeLeft = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

const marqueeRight = {
  animate: {
    x: [-1035, 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

const Marquee = ({
  text,
  className,
  textClassName,
  direction = "left",
}: {
  text: string;
  className?: string;
  textClassName?: string;
  direction?: "left" | "right";
}) => {
  return (
    <div
      className={clsx(
        "bg-white py-2 relative w-full max-w-screen overflow-x-hidden h-11 md:h-[86px] shadow-md",
        className,
      )}
    >
      <motion.div
        className="absolute whitespace-nowrap"
        variants={direction === "left" ? marqueeLeft : marqueeRight}
        animate="animate"
      >
        <h1
          className={clsx(
            "uppercase md:text-[60px]/[70px] text-2xl font-semibold",
            textClassName,
          )}
        >
          {Array(10).fill(text).join(" ")}
        </h1>
      </motion.div>
    </div>
  );
};

const MarqueeWrapper = () => {
  return (
    <div className="pt-11 relative">
      <Marquee text="Dimas Rafi Frontend Developer" className="z-[3]" />
      <div className="absolute left-0 rotate-[3deg] -bottom-11 md:-bottom-[80px] z-[2] w-full ">
        <Marquee
          text="Welcome to my website"
          textClassName="text-stroke text-white"
          direction="right"
        />
      </div>
    </div>
  );
};

export default MarqueeWrapper;
