import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export const name = "Brandon Hedrick";
export const AnimatedTitle = () => {
  return (
    <h1 className="font-bold text-xl text-yellow-400">
      <AnimatePresence mode="popLayout">
        <motion.span
          className="inline-block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.333, ease: "backInOut" }}
        >
          {name}
        </motion.span>
      </AnimatePresence>
    </h1>
  );
};
