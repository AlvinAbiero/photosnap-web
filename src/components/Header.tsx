"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 700;

  function handleClick() {
    setIsMenuOpen((prevState) => !prevState);
  }
  return (
    <motion.header
      initial={{ opacity: 0, scaleY: 0.5 }}
      animate={{ opacity: 1, scaleY: 1 }}
      exit={{ opacity: 0, scaleY: 0.5 }}
      className="flex items-center justify-between md:px-20 lg:px-24 lg:py-10 md:py-11 py-8 relative px-8 max-w-8xl mx-auto"
    >
      <Link href="/">
        <Image
          src="./shared/desktop/logo.svg"
          width={200}
          height={200}
          alt="logo of photosnap"
          className="hidden lg:hidden md:block w-auto h-auto"
        />
        <Image
          src="./shared/desktop/logo.svg"
          width={200}
          height={200}
          alt="logo of photosnap"
          className="hidden lg:block md:hidden w-auto h-auto"
        />
        <Image
          src="./shared/desktop/logo.svg"
          width={200}
          height={80}
          alt="logo of photosnap"
          className="block lg:hidden md:hidden w-auto h-auto"
        />
      </Link>
      <AnimatePresence>
        {isMenuOpen && isMobile && <Navbar handleClick={handleClick} />}
      </AnimatePresence>
      {!isMobile && (
        <nav className={`w-full bg-transparent hidden md:block`}>
          <ul className="flex items-center justify-center uppercase gap-[3.7rem]">
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="lg:text-[1.2rem] text-[1rem] font-bold tracking-[0.2rem] transition-all duration-300 hover:text-black/30"
              onClick={handleClick}
            >
              <Link href="/stories">Stories</Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="lg:text-[1.2rem] text-[1rem] font-bold tracking-[0.2rem] transition-all duration-300 hover:text-black/30"
              onClick={handleClick}
            >
              <Link href="/features">features</Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="lg:text-[1.2rem] text-[1rem] font-bold tracking-[0.2rem] transition-all duration-300 hover:text-black/30"
              onClick={handleClick}
            >
              <Link href="/pricing">pricing</Link>
            </motion.li>
          </ul>
        </nav>
      )}
      <motion.button
        className="bg-black px-5 py-5 lg:text-[1.2rem] text-[1rem] font-bold tracking-[0.2rem] text-white transition-all duration-300 hover:bg-black/30 hover:text-black hidden md:flex lg:w-1/4 w-1/3 cursor-pointer iteks-center justify-center"
        whileHover={{ scale: 1.2 }}
      >
        <Link href="/">Get an invite</Link>
      </motion.button>

      <div className="block md:hidden cursor-pointer" onClick={handleClick}>
        <motion.img
          src="./shared/mobile/menu.svg"
          alt="menu icon"
          className={isMenuOpen ? "hidden" : "block"}
          whileTap={{ rotate: 180 }}
        />
        <motion.img
          src="./shared/mobile/close.svg"
          alt="close icon"
          className={isMenuOpen ? "block" : "hidden"}
          whileTap={{ rotate: -180 }}
        />
      </div>
    </motion.header>
  );
};

export default Header;
