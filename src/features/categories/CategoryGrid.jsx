// src/components/CategoryGrid.jsx
import React from "react";

const categories = [
  "ELECTRONICS",
  "ELECTRICAL",
  "FURNITURE",
  "MOBILE",
  "TV",
  "APPLIANCES",
  "CAMERA",
];

export default function CategoryGrid({ onCategorySelect, activeCategory }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {categories.map((cat) => (
        <div
          key={cat}
          onClick={() => onCategorySelect(cat)}
          className={`cursor-pointer p-4 border rounded text-center font-bold ${
            activeCategory === cat
              ? "bg-blue-600 text-white"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {cat}
        </div>
      ))}
    </div>
  );
}
