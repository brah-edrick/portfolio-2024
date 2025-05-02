import PropTypes from "prop-types";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const H3: React.FC<HeadingProps> = ({ children, className }) => (
  <h3 className={`text-lg text-yellow-400 font-bold ${className}`}>
    {children}
  </h3>
);

export const H4: React.FC<HeadingProps> = ({ children, className }) => (
  <h4 className={`text-yellow-200 text-sm ${className}`}>{children}</h4>
);
