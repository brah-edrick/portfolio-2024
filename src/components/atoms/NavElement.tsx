interface NavElementProps {
  isSelected: boolean;
  href: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const NavElement: React.FC<NavElementProps> = ({
  isSelected,
  href,
  children,
  onClick,
}) => {
  const baseClasses =
    "flex items-center my-3 before:block hover:before:w-12 before:transition-all before:ease-in before:origin-left before:h-[1px] before:mr-2 hover:before:bg-yellow-200 no-underline hover:text-yellow-200";
  const selectedClasses =
    "before:w-12 before:bg-yellow-200 text-yellow-200 font-semibold";
  const unselectedClasses = "before:w-6 before:bg-white text-white font-normal";
  return (
    <li>
      <a
        className={`${baseClasses} ${
          isSelected ? selectedClasses : unselectedClasses
        }`}
        href={href}
        onClick={onClick}
      >
        {children}
      </a>
    </li>
  );
};

export const MobileNavElement: React.FC<NavElementProps> = ({
  isSelected,
  href,
  children,
  onClick,
}) => {
  const baseClasses =
    "flex items-center hover:text-yellow-200 relative no-underline text-white font-normal";
  const selectedClasses = "text-white";
  const unselectedClasses = "text-gray-400 font-normal";
  return (
    <li>
      <a
        className={`${baseClasses} ${
          isSelected ? selectedClasses : unselectedClasses
        }`}
        href={href}
        onClick={onClick}
      >
        {children}
      </a>
    </li>
  );
};
