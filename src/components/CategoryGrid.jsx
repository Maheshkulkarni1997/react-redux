// src/components/CategoryGrid.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

// src/components/CategoryGrid.jsx

const categories = [
  { name: "ELECTRONICS", image: "https://via.placeholder.com/150?text=Electronics" },
  { name: "FURNITURE", image: "https://via.placeholder.com/150?text=Furniture" },
  { name: "CLOTHING", image: "https://via.placeholder.com/150?text=Clothing" },
  { name: "TOYS", image: "https://via.placeholder.com/150?text=Toys" },
];

export default function CategoryGrid() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="cursor-pointer border p-2 rounded hover:shadow-lg text-center"
          onClick={() => navigate(`/products-by-category?category=${cat.name}`)}
        >
          <img src={cat.image} alt={cat.name} className="w-full h-24 object-cover mb-2 rounded" />
          <span className="font-semibold">{cat.name}</span>
        </div>
      ))}
    </div>
  );
}
