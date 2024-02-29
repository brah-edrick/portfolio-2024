import { useScroll, useMotionValueEvent } from "framer-motion";
import { RefObject } from "react";

export const useRefIsScrolledBy = (ref: RefObject<HTMLElement>, threshold = 0, onScrollThreshold: (...args: any[]) => void) => {
    const { scrollYProgress: refScrollPosition } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    });
    useMotionValueEvent(refScrollPosition, "change", (latest: number) => {
        if (latest > threshold) onScrollThreshold();
    });
}

