import Reveal from "./ui/Reveal";
import Image from "next/image";

type PricingComparisonItemProps = {
  feature: string;
  basic: boolean;
  pro: boolean;
  business: boolean;
};

const PricingComparisonItem = ({
  feature,
  basic,
  pro,
  business,
}: PricingComparisonItemProps) => {
  return (
    <Reveal>
      <div className="grid md:grid-cols-[4fr_1fr_1fr_1fr] md:justify-items-center   border-b border-solid border-[#dfdfdf] pb-9 text-[1.2rem] font-bold uppercase tracking-[0.2rem] grid-cols-3 justify-items-start gap-y-6">
        <h4 className="md:justify-self-start md:pl-4 md:col-span-1 col-span-full pl-0">
          {feature}
        </h4>
        <div>
          <h3 className="md:hidden pb-2 text-[1rem] font-bold uppercase tracking-[0.1667rem] opacity-50 block">
            Basic
          </h3>
          <Image
            src="/pricing/desktop/check.svg"
            alt="check icon"
            width={24}
            height={20}
            className={`${basic === true ? "opacity-100" : "opacity-0"}`}
          />
        </div>
        <div>
          <h3 className="md:hidden pb-2 text-[1rem] font-bold uppercase tracking-[0.1667rem] opacity-50 block">
            Pro
          </h3>
          <Image
            src="/pricing/desktop/check.svg"
            alt="check icon"
            width={24}
            height={20}
            className={`${pro === true ? "opacity-100" : "opacity-0"}`}
          />
        </div>
        <div>
          <h3 className="md:hidden pb-2 text-[1rem] font-bold uppercase tracking-[0.1667rem] opacity-50 block">
            Business
          </h3>
          <Image
            src="/pricing/desktop/check.svg"
            alt="check icon"
            width={24}
            height={20}
            className={`${business === true ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </div>
    </Reveal>
  );
};

export default PricingComparisonItem;
