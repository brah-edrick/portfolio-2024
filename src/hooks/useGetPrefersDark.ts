import { useEffect, useState } from "react";

export const useGetPrefersDark = () => {
    const [prefersDark, setPrefersDark] = useState(false);
    useEffect(() => {
        if (window?.matchMedia) {
            // Check if the dark-mode Media-Query matches
            const isPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            setPrefersDark(isPrefersDark)
        }
    }, [])

    return prefersDark;
}