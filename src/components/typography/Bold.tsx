import React from 'react';

interface BoldProps {
    children: React.ReactNode;
    className?: string;
}

export const Bold: React.FC<BoldProps> = ({ children, className }) => {
    return (
        <span className={`font-semibold text-slate-50 ${className}`}>{children}</span>
    );
}