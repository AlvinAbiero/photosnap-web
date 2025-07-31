"use client";
import {
  RiInstagramFill,
  RiPinterestFill,
  RiTwitterFill,
  RiYoutubeFill,
  RiFacebookFill,
} from "react-icons/ri";
import Link from "next/link";
import Cta from "./Cta";
import { motion } from "framer-motion";
import Image from "next/image";
import Reveal from "./ui/Reveal";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white flex md:flex-row flex-col  px-24 py-20 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:gap-36 md:gap-16 gap-12 max-w-7xl">
        <div className="flex flex-col items-center md:items-start md:justify-between gap-8">
          <Image
            src="./shared/desktop/footer-logo.svg"
            alt="logo"
            width={200}
            height={200}
            className="w-auto h-auto"
          />
          <Reveal>
            <div className="flex gap-4 md:gap-6">
              <div className="flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full hover:bg-white bg-fb transition-all duration-300">
                <RiFacebookFill size="2rem" color="black" />
              </div>
              <div className="flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full hover:bg-white bg-yt">
                <RiYoutubeFill size="1.5rem" color="black" />
              </div>
              <div className="flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full hover:bg-white bg-x">
                <RiTwitterFill size="2rem" color="black" />
              </div>
              <div className="flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full hover:bg-white bg-pin">
                <RiPinterestFill size="2rem" color="black" />
              </div>
              <div className="flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full hover:bg-white bg-ig">
                <RiInstagramFill size="2rem" color="black" />
              </div>
            </div>
          </Reveal>
        </div>
        <div className="">
          <ul className="flex flex-col md:items-start gap-7  items-center">
            <Reveal>
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="lg:text-[1.2rem] text-[1rem] font-bold uppercase tracking-[0.2rem] text-white transition-all duration-300 hover:text-white/30"
              >
                <Link href="/">Home</Link>
              </motion.li>
            </Reveal>
            <Reveal>
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="lg:text-[1.2rem] text-[1rem] font-bold uppercase tracking-[0.2rem] text-white transition-all duration-300 hover:text-white/30"
              >
                <Link href="/stories">Stories</Link>
              </motion.li>
            </Reveal>

            <Reveal>
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="lg:text-[1.2rem] text-[1rem] font-bold uppercase tracking-[0.2rem] text-white transition-all duration-300 hover:text-white/30"
              >
                <Link href="/features">Features</Link>
              </motion.li>
            </Reveal>

            <Reveal>
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="lg:text-[1.2rem] text-[1rem] font-bold uppercase tracking-[0.2rem] text-white transition-all duration-300 hover:text-white/30"
              >
                <Link href="/pricing">Pricing</Link>
              </motion.li>
            </Reveal>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex flex-col md:justify-between items-center gap-8 mt-12 md:mt-0">
        <Reveal>
          <Cta color="white" text="Get an invite" to="#" />
        </Reveal>

        <Reveal>
          <p className="lg:text-[1.2rem] text-[1rem] opacity-50">
            Copyright {year}. All Rights Reserved
          </p>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
