import { motion } from "framer-motion";
import { chatClasses, offscreenAmt } from "./shared";

export const UserText = ({ children }: { children: React.ReactNode }) =>
    <motion.div
        initial={{ opacity: 0, x: offscreenAmt }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.333, ease: 'backInOut' }} className={`${chatClasses} bg-yellow-200 bg-opacity-15 rounded-br-none self-end`}>{children}</motion.div>
