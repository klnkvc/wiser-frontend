// src/components/MateriCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MateriCard = ({ image, title, description, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div
      className="relative cursor-pointer bg-[#2E85C8] rounded-lg overflow-hidden shadow-lg"
      style={{ width: '300px', height: '500px' }}
      onClick={handleClick}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-[258px] h-[200px] object-cover mx-auto rounded-lg mt-8"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-center text-[#ffffff]">{title}</h3>
        <p className="text-sm text-[#ffffff] mt-3">{description}</p>
      </div>
    </div>
  );
};

export default MateriCard;
