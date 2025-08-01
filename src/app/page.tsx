"use client";
import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import "./globals.css";

const Page = lazy(() => import("@/components/Home"));

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loader />}>
        <Page />
      </Suspense>
    </AnimatePresence>
  );
}
