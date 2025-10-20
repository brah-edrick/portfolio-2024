import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type AnimatedTitleElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface AnimatedTitleProps<T extends AnimatedTitleElement = "h1"> {
  as?: T;
  children: string;
  className?: string;
}

export const AnimatedTitle = <T extends AnimatedTitleElement = "h1">({
  as,
  children,
  className = "",
}: AnimatedTitleProps<T>) => {
  const Component = as || ("h1" as T);

  const baseClasses = "font-bold text-xl text-yellow-400";

  return (
    <Component className={`${baseClasses} ${className}`} {...({} as any)}>
      <AnimatePresence mode="popLayout">
        <motion.span
          className="inline-block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.333, ease: "backInOut" }}
        >
          {children}
        </motion.span>
      </AnimatePresence>
    </Component>
  );
};
