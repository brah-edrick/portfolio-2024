'use client'

import React, { useState, useCallback, PropsWithChildren, useEffect } from "react";
import { useGetPrefersDark } from "@/hooks/useGetPrefersDark";

// create a React context for dark mode
export const DarkModeContext = React.createContext<{
    isDark: boolean;
    toggle: () => void;
}>({
    isDark: false,
    toggle: () => { }
});

DarkModeContext.displayName = "DarkModeContext";

export const DarkModeProvider: React.FC<PropsWithChildren> = ({
    children
}) => {
    const prefersDark = useGetPrefersDark();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(prefersDark);
    }, [prefersDark]);

    const toggle = useCallback(() => {
        setIsDark(prevState => !prevState);
    }, []);

    return <DarkModeContext.Provider value={{
        isDark,
        toggle
    }}>
        {children}
    </DarkModeContext.Provider>;
};

export const useDarkMode = () => {
    const context = React.useContext(DarkModeContext);
    if (!context) {
        throw new Error("useDarkMode must be used within a DarkModeProvider");
    }
    return context;
}
