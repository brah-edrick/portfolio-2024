//create a component called SkillPill that accepts children and className as props
//export SkillPill as a React functional component
//return a span element with the class name equal to the className prop and children
interface SkillPillProps {
    children: React.ReactNode;
    className?: string;
}

export const SkillPill: React.FC<SkillPillProps> = ({ children, className }) => {
    return (
        <span className={`rounded-full bg-yellow-200 bg-opacity-5 text-yellow-400 py-1 px-3 text-xs ${className}`}>{children}</span>
    );
}
