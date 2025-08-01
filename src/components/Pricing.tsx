import FeaturesCta from "./FeaturesCta";
import PricingComparison from "./PricingComparison";
import PricingHero from "./PricingHero";
import PricingPlans from "./PricingPlans";

const Pricing = () => {
  return (
    <div>
      <PricingHero />
      <PricingPlans />
      <PricingComparison />
      <FeaturesCta />
    </div>
  );
};

export default Pricing;
