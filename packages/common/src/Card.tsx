import { FC, ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-stone-200 p-6 text-stone-600 shadow-lg">{children}</div>
  );
};
