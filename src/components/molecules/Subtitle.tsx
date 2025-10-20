import React from "react";

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
  color?: "default" | "yellow" | "white";
}

const colorClasses = {
  default: "text-yellow-200",
  yellow: "text-yellow-400",
  white: "text-white",
};

export const Subtitle: React.FC<SubtitleProps> = ({
  children,
  className = "",
  color = "default",
}) => {
  return (
    <h2 className={`text-sm ${colorClasses[color]} ${className}`}>
      {children}
    </h2>
  );
};
