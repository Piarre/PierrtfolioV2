"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";
import { Link as LinkT } from "@/lib/types";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl, link }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      {/* sm:group-even:pl-8 */}
      <section className="cursor-pointer bg-gray-100 min-w-[26rem] max-w-[30rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[18rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 hover:scale-105 hover:-translate-y-2">
        <div
          className={clsx(
            // sm:group-even:ml-[18rem]
            "pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col h-full",
            imageUrl ? "sm:max-w-[60%]" : "sm:max-w-[100%]"
          )}
        >
          <h3 className="text-3xl font-semibold">{title}</h3>
          <p className="mt-2 text-lg leading-relaxed text-gray-800 dark:text-white/70">
            {description}
          </p>

          <ul className="flex flex-wrap justify-center gap-3 mt-4 sm:mt-auto group/text">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.4] font-semibold group-hover/text:hover:font-extrabold px-3 py-1 text-[0.85rem] uppercase tracking-wider cursor-pointer group-hover/text:hover:text-white hover:scale-110 transition-all duration-150 text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          {link && (
            <div className="flex flex-wrap justify-center group/text gap-4 mt-4">
              {typeof link === "string" ? (
                <LinkEl link={link} />
              ) : (
                (link as LinkT[]).map((link, index) => <LinkEl key={index} link={link} />)
              )}
            </div>
          )}
        </div>

        {/* {imageUrl && (
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={80}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
          />
        )} */}
      </section>
    </motion.div>
  );
}

const LinkEl = ({ link }: { link: LinkT }) => {
  return (
    <>
      <Link
        href={link.hash}
        target="_blank"
        className="group/btn bg-gray-900 text-white px-6 py-3 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
      >
        {link.name}
        <FiExternalLink className="opacity-80 group-hover/btn:translate-x-1 transition" />
      </Link>
    </>
  );
};
