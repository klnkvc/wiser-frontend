import React from "react";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({ image, title, description, link }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(link)}
      className=" text-white cursor-pointer max-w-xs rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-article border border-iconig mb-10"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-5 text-center h-28 w-auto">{title}</h3>
        <p className=" text-[16px] text-justify leading-relaxed ">{description}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
