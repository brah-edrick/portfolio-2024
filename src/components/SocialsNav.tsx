import { useDarkMode } from "@/contexts/darkModeContext";
import { faGithub, faLinkedin, faSpotify, faStrava } from "@fortawesome/free-brands-svg-icons"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AnimatePresence, motion } from "framer-motion";

interface SocialsNavProps {
    color?: string
}

export const SocialsNav: React.FC<SocialsNavProps> = ({ color = 'rgb(254 240 138)' }) => {
    const { isDark, toggle } = useDarkMode();
    return (
        <nav>
            <ul className="flex gap-4 align-self-end">
                <li><a href="https://github.com/brah-edrick" target="_blank"><FontAwesomeIcon size="lg" color={color} icon={faGithub} /></a></li>
                <li><a href="https://www.linkedin.com/in/blhedrick/" target="_blank"><FontAwesomeIcon size="lg" color={color} icon={faLinkedin} /></a></li>
                <li><a href="https://open.spotify.com/user/12138597312?si=7e5a9f0b1cfb4cd0" target="_blank"><FontAwesomeIcon size="lg" color={color} icon={faSpotify} /></a></li>
                <li><a href="https://www.strava.com/athletes/118707041" target="_blank"><FontAwesomeIcon size="lg" color={color} icon={faStrava} /></a></li>
                <li><button onClick={toggle}>
                    <AnimatePresence mode="popLayout">
                        <motion.span
                            className="inline-block"
                            initial={{ opacity: 0, y: isDark ? -20 : 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: isDark ? -20 : 20 }}
                            transition={{ duration: 0.333, ease: 'backInOut' }}
                            key={isDark ? 'light' : 'dark'}
                        >
                            <FontAwesomeIcon size="lg" color={color} icon={isDark ? faSun : faMoon} />
                        </motion.span>
                    </AnimatePresence>
                </button></li>
            </ul>
        </nav>
    );
}