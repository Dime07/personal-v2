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
        "bg-white py-2 relative w-full max-w-screen overflow-x-hidden h-[86px] shadow-md",
        className,
      )}
    >
      <motion.div
        className="absolute whitespace-nowrap"
        variants={direction === "left" ? marqueeLeft : marqueeRight}
        animate="animate"
      >
        <p
          className={clsx(
            "uppercase text-[60px]/[70px] font-semibold",
            textClassName,
          )}
        >
          {Array(10).fill(text).join(" ")}
        </p>
      </motion.div>
    </div>
  );
};

const MarqueeWrapper = () => {
  return (
    <div className="pt-11">
      <Marquee text="Dimas Rafi Frontend Developer" className="z-[2]" />
      <Marquee
        text="Welcome to my website"
        className="rotate-[5deg] z-[1] w-[calc(100%+20px)]"
        textClassName="text-stroke text-white"
        direction="right"
      />
    </div>
  );
};

export default MarqueeWrapper;
