import PropTypes from 'prop-types';

interface HeadingProps {
    children: React.ReactNode;
    className?: string;
}

export const H2: React.FC<HeadingProps> = ({ children, className }) => (
    <h2 className={`text-md text-yellow-400 font-bold ${className}`}>{children}</h2>
);

export const H3: React.FC<HeadingProps> = ({ children, className }) => (
    <h3 className={`text-md text-yellow-200 text-sm ${className}`}>{children}</h3>
);


