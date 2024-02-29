import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';

export const name = "Brandon Hedrick";
export const shortName = "brah.dev";




export const AnimatedTitle = () => {
    const [short, setShort] = useState(false);
    const [scrollAmt, setScrollAmt] = useState(0);
    const { scrollY } = useScroll();

    const [scrollTarget, setScrollTarget] = React.useState<number | undefined>();

    useEffect(() => {
        if (window) {
            setScrollTarget(window.innerHeight / 4);
        }
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (!short && scrollTarget && latest > scrollTarget) {
            setShort(true);
        }
        if (short && scrollTarget && latest <= scrollTarget || latest < scrollAmt) {
            setShort(false);
        }
        setScrollAmt(latest);
    });
    const formattedName = short ? shortName : name;

    if (!scrollTarget) return null;

    return <h1 className="font-bold text-xl text-yellow-400">
        <AnimatePresence mode="popLayout">
            <motion.span
                className="inline-block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.333, ease: 'backInOut' }}
                key={formattedName}
            >
                {formattedName}
            </motion.span>
        </AnimatePresence>
    </h1>
};
