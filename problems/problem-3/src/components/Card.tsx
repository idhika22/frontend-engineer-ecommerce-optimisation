import React from 'react';

type CardProps = {
  image: string;
  title: string;
  price: number;
  actionButton?: React.ReactNode; 
};

const Card: React.FC<CardProps> = ({ image, title, price, actionButton }) => {
  return (
    <div className="bg-white p-4 rounded-3xl shadow-md hover:shadow-lg transition">
      <div className="w-full h-60 mb-4">
        <img
          src={image}
          alt={title}
          width={320}
          height={160}
          className="w-full h-full object-cover rounded-md"
          loading="lazy"
        />
      </div>

      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600 font-semibold">${price}</p>

      {actionButton && <div className="mt-4">{actionButton}</div>}
    </div>
  );
};

export default Card;
