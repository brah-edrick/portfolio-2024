import React from "react";

type SkillPillElement = "span" | "div" | "button" | "a";

interface SkillPillProps<T extends SkillPillElement = "span"> {
  as?: T;
  children: React.ReactNode;
  className?: string;
  color?: "default" | "yellow" | "white";
  href?: T extends "a" ? string : never;
  onClick?: T extends "button" ? () => void : never;
  type?: T extends "button" ? "button" | "submit" | "reset" : never;
}

const colorClasses = {
  default: "bg-yellow-200/10 text-yellow-200",
  yellow: "bg-yellow-200/20 text-yellow-400",
  white: "bg-white/10 text-white",
};

export const SkillPill = <T extends SkillPillElement = "span">({
  as,
  children,
  className = "",
  color = "default",
  ...props
}: SkillPillProps<T>) => {
  const Component = as || ("span" as T);

  const baseClasses =
    "inline-block px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105";
  const colorClass = colorClasses[color];

  return (
    <Component
      className={`${baseClasses} ${colorClass} ${className}`}
      {...(props as any)}
    >
      {children}
    </Component>
  );
};
