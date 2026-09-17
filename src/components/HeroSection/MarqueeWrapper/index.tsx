import clsx from "clsx";
import "@styles/text.css";

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
      <div
        className={clsx(
          "marquee-track",
          direction === "right" && "marquee-track--reverse",
        )}
        aria-hidden="true"
      >
        {Array.from({ length: 2 }, (_, groupIndex) => (
          <div className="marquee-group" key={groupIndex}>
            <span
              className={clsx(
                "uppercase md:text-[60px]/[70px] text-2xl font-semibold",
                textClassName ?? "text-black",
              )}
            >
              {Array(6).fill(text).join(" · ")}
            </span>
          </div>
        ))}
      </div>
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
