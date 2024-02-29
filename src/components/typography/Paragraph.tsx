import React from 'react';

interface ParagraphProps {
    children: React.ReactNode;
    className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
    return (
        <p className={`text-white-300 text-sm leading-relaxed mb-4 font-light ${className}`}>
            {children}
        </p>
    );
}