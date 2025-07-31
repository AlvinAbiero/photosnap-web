"use client";
import React from "react";
import Hero from "./Hero";
import HomeStories from "./HomeStories";
import HomeFeatures from "./HomeFeatures";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <HomeStories />
      <HomeFeatures />
    </div>
  );
};

export default Home;
