import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
  color?: "default" | "yellow" | "white";
  marginBottom?:
    | "mb-0"
    | "mb-1"
    | "mb-2"
    | "mb-3"
    | "mb-4"
    | "mb-5"
    | "mb-6"
    | "mb-8"
    | "mb-10"
    | "mb-12"
    | "mb-16"
    | "mb-20"
    | "mb-24"
    | "mb-32";
}

const colorClasses = {
  default: "text-white-300",
  yellow: "text-yellow-200",
  white: "text-white",
};

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className = "",
  color = "default",
  marginBottom = "mb-4",
}) => {
  return (
    <p
      className={`${colorClasses[color]} text-sm leading-relaxed ${marginBottom} font-light ${className}`}
    >
      {children}
    </p>
  );
};
