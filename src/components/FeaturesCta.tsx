"use client";
import Cta from "./Cta";
import Reveal from "./ui/Reveal";
import { useEffect, useState } from "react";

const FeaturesCta = () => {
  const [bgImage, setBgImage] = useState("none");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setBgImage("url(./shared/desktop/bg-beta.jpg)");
      } else if (width >= 700) {
        setBgImage("url(./shared/tablet/bg-beta.jpg)");
      } else {
        setBgImage("url(./shared/mobile/bg-beta.jpg)");
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
      style={{ backgroundImage: bgImage }}
      className="relative flex md:items-center items-start md:flex-row flex-col md:justify-between gap-10 bg-repeat-round xl:py-36 lg:py-36 text-white px-8 py-[7rem] md:px-16 lg:px-24 xl:px-36 h-full"
    >
      <Reveal>
        <h2 className="lg:text-[4rem] font-bold uppercase leading-[4.8rem] tracking-[0.4167rem] text-[3.2rem] ">
          We’re in beta. <br />
          Get your invite <br /> today!
        </h2>
      </Reveal>
      <Reveal>
        <Cta color="white" text="Get an invite" to="#" />
      </Reveal>

      <div className="bg-lin-grad absolute left-0 h-[28rem] w-[0.6rem]"></div>
    </section>
  );
};

export default FeaturesCta;
