"use client";
import StoriesSection from "./StoriesSection";
import StoriesHero from "./StoriesHero";

const Stories = () => {
  return (
    <div className="overflow-hidden">
      <StoriesHero />
      <StoriesSection />
    </div>
  );
};

export default Stories;
