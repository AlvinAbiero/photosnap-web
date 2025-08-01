import PricingComparisonItem from "./PricingComparisonItem";

const PricingComparison = () => {
  return (
    <section className="md:px-44 md:pb-64 lg:px-20 px-8 pb-28">
      <h2 className="pb-24 text-center text-[2rem] md:text-[3rem] font-bold uppercase leading-[4.8rem] tracking-[0.4167rem]">
        Compare
      </h2>

      <section className="mx-auto flex max-w-7xl flex-col justify-center gap-9">
        <div className="grid grid-cols-[4fr_1fr_1fr_1fr] justify-items-center border-b border-solid border-black pb-9 text-[1.2rem] font-bold uppercase tracking-[0.2rem]">
          <h3 className="justify-self-start">The features</h3>
          <h3 className="hidden md:block">basic</h3>
          <h3 className="hidden md:block">pro</h3>
          <h3 className="hidden md:block">business</h3>
        </div>
        <PricingComparisonItem
          feature={"Unlimited story posting"}
          basic={true}
          pro={true}
          business={true}
        />
        <PricingComparisonItem
          feature={"unlimited photo upload"}
          basic={true}
          pro={true}
          business={true}
        />
        <PricingComparisonItem
          feature={"embedding custom content"}
          basic={false}
          pro={true}
          business={true}
        />
        <PricingComparisonItem
          feature={"customize metadata"}
          basic={false}
          pro={true}
          business={true}
        />
        <PricingComparisonItem
          feature={"advanced metrics"}
          basic={false}
          pro={false}
          business={true}
        />
        <PricingComparisonItem
          feature={"photo downloads"}
          basic={false}
          pro={false}
          business={true}
        />
        <PricingComparisonItem
          feature={"search engine indexing"}
          basic={false}
          pro={false}
          business={true}
        />
        <PricingComparisonItem
          feature={"custom analytics"}
          basic={false}
          pro={false}
          business={true}
        />
      </section>
    </section>
  );
};

export default PricingComparison;
