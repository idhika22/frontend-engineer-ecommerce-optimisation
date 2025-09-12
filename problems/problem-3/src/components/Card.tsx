import React from 'react';
import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-3xl shadow-md hover:shadow-lg transition ${className}`}>
      {children}
    </div>
  );
};

export default Card;
