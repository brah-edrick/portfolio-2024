import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  iconSize?: "xs" | "sm" | "lg" | "xl";
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  className = "",
  showIcon = true,
  iconSize = "xs",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center underline text-yellow-400 hover:text-yellow-300 transition-colors ${className}`}
    >
      {children}
      {showIcon && (
        <FontAwesomeIcon
          className="ml-1 opacity-40"
          size={iconSize}
          icon={faArrowUpRightFromSquare}
        />
      )}
    </a>
  );
};
