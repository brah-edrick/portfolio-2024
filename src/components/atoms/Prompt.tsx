export const Prompt = ({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => {
    return (
        <button onClick={onClick} className={`p-2 px-3 text-xs border border-yellow-50  m-1 rounded-xl inline-block ${className}`}>{children}</button>
    );
}