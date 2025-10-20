import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  color?: "default" | "yellow" | "white";
}

const h3ColorClasses = {
  default: "text-yellow-400",
  yellow: "text-yellow-400",
  white: "text-white",
};

const h4ColorClasses = {
  default: "text-yellow-200",
  yellow: "text-yellow-200",
  white: "text-white",
};

export const H1: React.FC<HeadingProps> = ({
  children,
  className = "",
  color = "default",
}) => (
  <h1
    className={`text-3xl font-bold ${
      color === "white" ? "text-white" : "text-yellow-400"
    } ${className}`}
  >
    {children}
  </h1>
);

export const H2: React.FC<HeadingProps> = ({
  children,
  className = "",
  color = "default",
}) => (
  <h2
    className={`text-2xl font-bold ${
      color === "white" ? "text-white" : "text-yellow-400"
    } ${className}`}
  >
    {children}
  </h2>
);

export const H3: React.FC<HeadingProps> = ({
  children,
  className = "",
  color = "default",
}) => (
  <h3 className={`text-lg font-bold ${h3ColorClasses[color]} ${className}`}>
    {children}
  </h3>
);

export const H4: React.FC<HeadingProps> = ({
  children,
  className = "",
  color = "default",
}) => (
  <h4
    className={`text-yellow-200 text-sm ${h4ColorClasses[color]} ${className}`}
  >
    {children}
  </h4>
);
