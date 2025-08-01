"use client";
import Reveal from "./ui/Reveal";

type PricingPlansItemProps = {
  plan: string;
  text: string;
  price: string;
  type: string;
  color?: "white" | "black";
};
const PricingPlansItem = ({
  plan,
  text,
  price,
  type,
  color,
}: PricingPlansItemProps) => {
  return (
    <div
      className={`${
        color === "black"
          ? `relative bg-black pb-[7rem] pt-[8rem] text-white`
          : `bg-[#f5f5f5] pb-16 pt-[5.6rem] text-black`
      } grid px-16 text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:text-start lg:text-center`}
    >
      {/*Fixed version */}
      {color === "black" && (
        <div className="absolute top-0 left-0 h-[0.6rem] w-full md:h-full md:w-[0.6rem] lg:h-[0.6rem] lg:w-full bg-lin-grad duration-300 z-[2]"></div>
      )}

      <Reveal>
        <div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[2.5rem]">
            {plan}
          </h3>
          <p className="pb-16 pt-8 text-xl md:text-xl lg:text-[1.3rem] leading-[2.5rem] opacity-60">
            {text}
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="md:justify-self-end lg:justify-self-center justify-self-center">
          <p className="text-3xl md:text-4xl font-bold uppercase leading-[2.5rem] tracking-wider">
            ${price}
          </p>
          <p className="pb-16 text-xl leading-[2.5rem]">per {type}</p>
        </div>
      </Reveal>

      <Reveal>
        <button
          className={`${
            color === "black"
              ? "bg-white text-black hover:bg-gray-300/70 hover:text-white"
              : "bg-black text-white"
          } w-full py-[1.2rem] text-[1.2rem] font-bold uppercase tracking-[0.2rem] transition-all duration-300 hover:bg-[#dfdfdf] hover:text-black cursor-pointer`}
        >
          Pick plan
        </button>
      </Reveal>
    </div>
  );
};

export default PricingPlansItem;
