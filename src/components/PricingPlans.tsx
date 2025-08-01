"use client";
import { useState } from "react";
import PricingPlansItem from "./PricingPlansItem";

const PricingPlans = () => {
  const [type, setType] = useState("month");

  function changeType() {
    if (type === "month") {
      setType("year");
    } else {
      setType("month");
    }
  }

  return (
    <section className="lg:px-36 pb-64 lg:pt-48 md:px-20 md:pt-20 px-8 pt-24">
      <div
        className="flex items-center justify-center gap-[3.2rem] pb-20"
        onClick={changeType}
      >
        <span
          className={`text-[1.8rem] font-bold leading-[2.5rem] transition-all duration-300 ${
            type === "month" ? "opacity-100" : "opacity-60"
          }`}
        >
          Monthly
        </span>
        <div
          className={`relative h-[3.2rem] w-[6.4rem] cursor-pointer rounded-full bg-[#dfdfdf] transition-all duration-300 before:absolute before:left-[0.3rem] before:top-[0.3rem] before:h-[2.5rem] before:w-[2.5rem] before:rounded-full before:bg-black before:transition-all before:duration-300 hover:bg-black hover:before:bg-white ${
            type === "month"
              ? "before:translate-x-0"
              : "before:translate-x-[120%]"
          } before:transition-all before:duration-300`}
        ></div>
        <span
          className={`text-[1.8rem] font-bold leading-[2.5rem] transition-all duration-300 ${
            type === "year" ? "opacity-100" : "opacity-60"
          }`}
        >
          Yearly
        </span>
      </div>

      <section className="grid lg:grid-cols-3 items-center gap-12 grid-cols-1">
        <PricingPlansItem
          plan="Basic"
          text="Includes basic usage of our platform. Recommended for new and aspiring photographers."
          price={type === "month" ? "19.00" : "190.00"}
          type={type === "month" ? "month" : "year"}
        />
        <PricingPlansItem
          plan="Pro"
          text="More advanced features available. Recommended for photography veterans and professionals."
          price={type === "month" ? "39.00" : "390.00"}
          type={type === "month" ? "month" : "year"}
          color="black"
        />
        <PricingPlansItem
          plan="Business"
          text="Additional features available such as more detailed metrics. Recommended for business owners."
          price={type === "month" ? "99.00" : "990.00"}
          type={type === "month" ? "month" : "year"}
        />
      </section>
    </section>
  );
};

export default PricingPlans;
