"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import FeaturesItem from "./FeaturesItem";

const items = [
  {
    img: "/features/desktop/responsive.svg",
    title: "100% Responsive",
    text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
  },
  {
    img: "/features/desktop/no-limit.svg",
    title: "No Photo Upload Limit",
    text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
  },
  {
    img: "/features/desktop/embed.svg",
    title: "Available to Embed",
    text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
  },
  {
    img: "/features/desktop/custom-domain.svg",
    title: "Custom Domain",
    text: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
  },
  {
    img: "/features/desktop/boost-exposure.svg",
    title: "Boost Your Exposure",
    text: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
  },
  {
    img: "/features/desktop/drag-drop.svg",
    title: "Drag & Drop Image",
    text: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
  },
];

const FeaturesDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const listItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -50 },
    visible: { opacity: 1, scale: 1, y: 0 },
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300,
      duration: 1,
      bounce: 0.5,
    },
  };

  const staggerContainerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const staggeredChildrenTransition = {
    variants: staggerContainerVariants,
    initial: "hidden",
    animate: mainControls,
  };

  return (
    <motion.section
      className="grid lg:grid-cols-3 gap-12 lg:px-36 py-48 grid-cols-1 md:px-24 px-8"
      ref={ref}
      {...staggeredChildrenTransition}
    >
      {items.map((item) => (
        <FeaturesItem key={item.title} {...item} variants={listItemVariants} />
      ))}
    </motion.section>
  );
};

export default FeaturesDetails;
