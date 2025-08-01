"use client";
import Link from "next/link";
import { motion } from "framer-motion";

function Cta({ color, text, to }: { color: string; text: string; to: string }) {
  return (
    <motion.div
      className="group flex w-full cursor-pointer items-center gap-12 text-[1.2rem] font-bold uppercase tracking-[0.2rem]"
      initial={{ columnGap: "3rem" }}
      whileHover={{ columnGap: "1rem" }}
      transition={{ type: "spring", duration: 0.3, bounce: 0.5 }}
    >
      <Link
        className="transition-all duration-300 group-hover:underline"
        href={to}
      >
        {text}
      </Link>

      <svg
        className={`h-[1.4rem] w-[4.5rem] ${
          color === "black" ? "stroke-black" : "stroke-white"
        }`}
      >
        <use xlinkHref="./shared/desktop/arrow.svg#arrow"></use>
      </svg>
    </motion.div>
  );
}

export default Cta;
