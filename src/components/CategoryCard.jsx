// src/components/CategoryCard.jsx
import React from "react";

const CategoryCard = ({ name, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer 
        bg-white 
        rounded-xl 
        shadow-md 
        overflow-hidden 
        hover:shadow-xl 
        hover:scale-105 
        transition 
        duration-300
      "
    >
      <img
        src={image}
        alt={name}
        className="w-full h-32 object-cover"
      />
      <h3 className="text-center py-3 text-lg font-semibold text-gray-700">
        {name}
      </h3>
    </div>
  );
};

export default CategoryCard;
