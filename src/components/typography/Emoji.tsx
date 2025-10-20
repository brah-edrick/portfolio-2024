import React from "react";
import { InvertOnLightMode } from "../atoms/InvertOnLightMode";

interface EmojiProps {
  label?: string;
  children: React.ReactNode;
  className?: string;
}

export const Emoji: React.FC<EmojiProps> = ({ label, children, className }) => {
  return (
    <InvertOnLightMode
      role="img"
      aria-label={label || ""}
      aria-hidden={label ? "false" : "true"}
      className={className}
    >
      {children}
    </InvertOnLightMode>
  );
};
