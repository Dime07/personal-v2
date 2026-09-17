import { motion, useReducedMotion } from "framer-motion";
import ShareIcon from "@icons/shareIcon";
import FramerShape from "./FramerShape";

type Project = {
  title: string;
  thumbnail: string;
  category: string;
  link: string;
  description: string;
  role?: string;
  year: number;
  technologies: string[];
};

const cardHover = {
  hover: {
    y: -6,
    borderColor: "rgba(255, 255, 255, 0.65)",
    transition: { duration: 0.24, ease: [0.16, 1, 0.3, 1] },
  },
};

const shapeHover = {
  hover: (index: number) => ({
    scale: 1.14,
    rotate: index % 2 === 0 ? 14 : -14,
    color: "#FF7A3D",
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  }),
};

const decorativeHover = {
  hover: (position: number) => ({
    x: [10, -12, 8][position],
    y: [-10, 9, -7][position],
    rotate: [16, -12, 10][position],
    opacity: 0.9,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  }),
};

const decorationPositions = [
  ["left-[15%] top-[17%]", "right-[15%] bottom-[15%]", "right-[18%] top-[20%]"],
  ["left-[17%] bottom-[16%]", "right-[16%] top-[16%]", "left-[24%] top-[19%]"],
  ["left-[15%] top-[18%]", "right-[18%] top-[22%]", "right-[23%] bottom-[15%]"],
  ["left-[18%] bottom-[17%]", "right-[15%] bottom-[16%]", "left-[23%] top-[17%]"],
  ["left-[14%] top-[20%]", "right-[17%] top-[17%]", "left-[22%] bottom-[15%]"],
];

const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  const reduceMotion = useReducedMotion();

  return (
    <>
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          className="group flex flex-col rounded-xl border border-white bg-black p-2"
          variants={cardHover}
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0.15 : 0.38, ease: [0.16, 1, 0.3, 1], delay: reduceMotion ? 0 : Math.min(index * 0.06, 0.24) }}
          whileHover={reduceMotion ? undefined : "hover"}
        >
          <motion.div
            className="relative isolate flex aspect-video h-[200px] w-full items-center justify-center overflow-hidden rounded-md bg-black bg-grid-white/[0.2] md:h-[260px]"
            role="img"
            aria-label={`Placeholder preview of ${project.title}`}
            variants={{ hover: { backgroundColor: "rgba(255, 255, 255, 0.16)" } }}
          >
            {decorationPositions[index % decorationPositions.length].map((position, decorationIndex) => (
              <motion.div
                key={position}
                className={`pointer-events-none absolute ${position} text-white/60`}
                variants={decorativeHover}
                custom={decorationIndex}
              >
                <FramerShape
                  variant={index + decorationIndex + 1}
                  className="h-5 w-5 md:h-7 md:w-7"
                />
              </motion.div>
            ))}
            <motion.div
              className="relative z-10 text-[#F2672A]"
              variants={shapeHover}
              custom={index}
            >
              <FramerShape variant={index} />
            </motion.div>
          </motion.div>

          <div className="flex flex-1 flex-col px-1 pt-4 pb-2">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xl font-semibold md:text-2xl">{project.title}</p>
                <p className="inline-flex w-fit items-center justify-center rounded-sm bg-white px-2 py-1 text-xs font-medium capitalize text-black">
                  {project.category.replaceAll("_", " ")}
                </p>
              </div>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title}`}
                className="shrink-0 rounded-md p-1 transition-colors hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black focus-visible:outline-none"
                whileHover={reduceMotion ? undefined : { x: 2, y: -2 }}
                whileTap={{ scale: 0.94 }}
              >
                <ShareIcon />
              </motion.a>
            </div>

            <p className="mt-4 text-sm leading-6 text-white/70">{project.description}</p>

            <div className="mt-5 flex items-end justify-between gap-4 text-xs text-white/60">
              <div>
                {project.role && <p>{project.role}</p>}
                <time>{project.year}</time>
              </div>
              {project.technologies.length > 0 && (
                <ul className="flex flex-wrap justify-end gap-1.5" aria-label="Technologies used">
                  {project.technologies.map((technology) => (
                    <li key={technology} className="rounded-full border border-white/20 px-2 py-1 text-white/80">{technology}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </motion.article>
      ))}
    </>
  );
};

export default ProjectGrid;
