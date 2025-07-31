import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <motion.nav
      className={`z-10 absolute left-0 top-[5rem] w-full bg-white lg:hidden`}
      initial={{ opacity: 0, scaleY: 0.5 }}
      animate={{ opacity: 1, scaleY: 1 }}
      exit={{ opacity: 0, scaleY: 0.5 }}
    >
      <ul className="flex items-center uppercase flex-col  gap-0 px-8 pb-8 pt-12">
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="text-[1.2rem] font-bold tracking-[0.2rem] transition-all duration-300 hover:text-black/30 pb-[2rem]"
          onClick={handleClick}
        >
          <Link href="/stories">Stories</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="text-[1.2rem] font-bold tracking-[0.2rem] transition-all duration-300 hover:text-black/30 pb-[2rem]"
          onClick={handleClick}
        >
          <Link href="/features">features</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="text-[1.2rem] font-bold tracking-[0.2rem] transition-all duration-300 hover:text-black/30  pb-[2rem] text-center"
          onClick={handleClick}
        >
          <Link href="/pricing">pricing</Link>
        </motion.li>
        <div className="w-full h-[.5] bg-black"></div>
        <li
          className="lg:hidden bg-black px-10 py-5 text-[1.2rem] font-bold tracking-[0.2rem] text-white mt-4 block hover:bg-black/30 hover:text-black cursor-pointer text-center"
          onClick={handleClick}
        >
          <Link href="/">Get an invite</Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
