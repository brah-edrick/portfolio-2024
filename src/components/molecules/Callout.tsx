import React from "react";

interface CalloutProps {
  children: React.ReactNode;
  className?: string;
}

export const Callout: React.FC<CalloutProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`-mx-4 p-4 bg-yellow-200/5 rounded-lg ${className}`}>
      {children}
    </div>
  );
};
