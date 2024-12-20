import { FC, ReactNode } from 'react';

type NavBarProps = {
  children: ReactNode;
  logo?: ReactNode;
};

type MenuProps = {
  title: string;
  children: ReactNode;
};

export const NavBar: FC<NavBarProps> = ({ children, logo }) => {
  return (
    <nav className="bg-stone-800 p-4 text-stone-100 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {logo && <div className="flex-shrink-0">{logo}</div>}
        {children}
      </div>
    </nav>
  );
};

export const Menu: FC<MenuProps> = ({ title, children }) => {
  return (
    <div className="group relative">
      <button className="text-stone-100 hover:text-amber-400">{title}</button>
      <div className="invisible absolute left-0 mt-2 w-48 rounded-lg bg-stone-700 text-stone-100 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
        {children}
      </div>
    </div>
  );
};
