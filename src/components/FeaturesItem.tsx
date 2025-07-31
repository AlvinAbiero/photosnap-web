import { motion, Variants } from "framer-motion";
import Reveal from "./ui/Reveal";
import Image from "next/image";

type FeaturesItemProps = {
  img: string;
  title: string;
  text: string;
  variants: Variants;
};
const FeaturesItem = ({ img, title, text, variants }: FeaturesItemProps) => {
  return (
    <motion.div className="flex flex-col items-center" variants={variants}>
      <Reveal>
        <Image
          src={img}
          width={100}
          height={100}
          alt={title}
          className="w-[7.2rem] pb-20"
        />
      </Reveal>
      <div className="mt-auto text-center">
        <Reveal>
          <h3 className="pb-7 text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-bold leading-[2.5rem]">
            {title}
          </h3>
        </Reveal>
        <Reveal>
          <p className=" text-[1.25rem] md:text-[1.35rem] lg:text-[1.2rem] leading-[2.5rem] font-medium text-black/80">
            {text}
          </p>
        </Reveal>
      </div>
    </motion.div>
  );
};

export default FeaturesItem;
