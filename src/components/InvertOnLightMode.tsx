import { useDarkMode } from '@/contexts/darkModeContext';
import React from 'react';

// polymorphic component type setup
type BaseProps<C extends React.ElementType> = {
    as?: C;
    className?: string;
};

type InvertOnLightModeProps<C extends React.ElementType> = React.PropsWithChildren<
    BaseProps<C>
> &
    Omit<React.ComponentPropsWithoutRef<C>, keyof BaseProps<C>>;


export const InvertOnLightMode = <C extends React.ElementType = "span">({ children, className, as, ...restProps }: InvertOnLightModeProps<C>) => {
    const { isDark } = useDarkMode();
    const Component = as || "span";
    return <Component {...restProps} className={`${className} ${isDark ? '' : 'invert'}`}>
        {children}
    </Component>
};
