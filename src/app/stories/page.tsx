import React from "react";
import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";

const Page = lazy(() => import("@/components/Stories"));

const StoriesPage = () => {
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loader />}>
        <Page />
      </Suspense>
    </AnimatePresence>
  );
};

export default StoriesPage;
