import { FC, ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export const Card: FC<CardProps> = ({ children }) => {
  return <div className="rounded-lg bg-white p-6 shadow-lg">{children}</div>;
};
