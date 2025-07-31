"use client";
import Image from "next/image";
import Reveal from "./ui/Reveal";
import Cta from "./Cta";
import { useEffect, useState } from "react";

const StoriesHero = () => {
  const [bgImage, setBgImage] = useState("none");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setBgImage("url(./stories/desktop/moon-of-appalacia.jpg)");
      } else if (width <= 700) {
        setBgImage("none");
      } else {
        setBgImage("url(./stories/tablet/moon-of-appalacia.jpg)");
      }
    };

    // Set initial value
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        backgroundImage: bgImage,
      }}
      className="relative bg-repeat-round  lg:px-44 lg:py-0 text-white px-0 py-0"
    >
      <div className="relative z-[2] flex flex-col">
        <div className="sm:hidden block">
          <Image
            src="/stories/mobile/moon-of-appalacia.jpg"
            width={600}
            height={400}
            alt="moon of appalacia"
            className="w-full"
          />
        </div>
        <div className="text-white text-left  flex flex-col  justify-center items-start gap-6 md:gap-10 py-16 px-8 sm:py-36 md:py-24 md:px-16 lg:py-24 lg:px-0 bg-black sm:bg-transparent">
          <Reveal>
            <h2 className="text-lg md:text-xl uppercase font-bold tracking-wider leading-16 ">
              Last month&apos;s featured story
            </h2>
          </Reveal>
          <Reveal>
            <h1 className="text-3xl md:text-5xl uppercase font-bold tracking-wider leading-16 w-3/5 md:w-2/3 lg:w-3/5">
              Hazy full moon of Appalachia
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-gray-400 text-lg md:text-xl w-full  leading-10 font-medium">
              <span className="pr-4 opacity-75">March 2nd 2020</span>
              <span className="text-white">by John Appleseed</span>
            </p>
          </Reveal>
          <Reveal>
            <p className="text-gray-400 text-xl md:text-2xl w-full md:w-4/5 lg:w-3/5 leading-10 font-medium">
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called &quot;mountains,&quot;
              especially in eastern Kentucky and West Virginia, and while the
              ridges are not high, the terrain is extremely rugged.
            </p>
          </Reveal>
          <Reveal>
            <Cta color="white" text="read the story" to="#" />
          </Reveal>
        </div>
      </div>
      <div className="absolute left-0 top-0 h-full w-full bg-black/30"></div>
    </section>
  );
};

export default StoriesHero;
