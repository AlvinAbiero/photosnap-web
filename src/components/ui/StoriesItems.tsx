"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Reveal from "./Reveal";
import { useEffect, useState } from "react";
import Image from "next/image";

type StoriesItemsProps = {
  imageDesktop: string;
  imageMobile: string;
  imageTablet?: string;
  title: string;
  author: string;
  date?: string;
  variants?: Variants;
};

const StoriesItems = ({
  imageDesktop,
  imageMobile,
  title,
  author,
  date,
  variants,
}: StoriesItemsProps) => {
  const [bgImage, setBgImage] = useState(imageDesktop);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 640) setBgImage(imageDesktop);
      else setBgImage(imageMobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imageDesktop, imageMobile]);

  // const bgImage =
  //   typeof window !== "undefined" && window.innerWidth >= 500
  //     ? imageDesktop
  //     : imageMobile;

  return (
    <motion.div
      className="group relative flex h-[90vh] cursor-pointer flex-col  justify-end text-white overflow-hidden px-16 lg:px-8"
      whileHover={{ translateY: "-3rem" }}
      variants={variants}
    >
      {/* Background Image using Next.js Image component */}
      <div className="absolute inset-0 z-1">
        <Image
          src={bgImage}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute left-0 top-0 h-full w-full bg-black/30 z-[1]"></div>

      {/* Hover gradient bar - Fixed version */}
      <div className="absolute bottom-0 left-0 h-[0.6rem] w-full bg-lin-grad opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[2]"></div>

      {/* content */}
      <div className="z-10 border-b-2 border-solid border-white/25 pb-8 relative -top-12">
        <Reveal>
          <p className="text-[1.3rem] opacity-60">{date}</p>
        </Reveal>
        <Reveal>
          <h3 className="text-[1.35rem] md:text-[1.5rem] lg:text-[1.65rem] font-bold leading-[2.5rem]">
            {title}
          </h3>
        </Reveal>
        <Reveal>
          <h4 className="text-[1.125rem] md:text-[1.25rem] lg:text-[1.35rem] leading-[normal] opacity-60">
            by {author}
          </h4>
        </Reveal>
      </div>

      <div className="z-10 pt-8 relative -top-12 flex items-center justify-between">
        <p className="text-[1.2rem] font-bold uppercase tracking-[0.2rem] text-white/70">
          Read Story
        </p>

        <svg className="h-[1.4rem] w-[4.5rem] stroke-white">
          <use xlinkHref="./shared/desktop/arrow.svg#arrow"></use>
        </svg>
      </div>
    </motion.div>
  );
};

export default StoriesItems;
