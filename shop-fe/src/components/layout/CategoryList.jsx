import React, { useEffect, useState } from "react";
import { fetchCategories } from "../../services/api";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        console.error("Lỗi lấy category:", err);
      }
    };
    getCategories();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {categories.map((cat) => (
        <div
          key={cat._id}
          className="relative w-48 h-48 overflow-hidden rounded shadow cursor-pointer group"
        >
          <img
  src={`http://localhost:5000${cat.image}`} // nếu chỉ 1 ảnh thì đúng
  alt={cat.name}
  className="w-full h-44 sm:h-64 object-cover"
/>

          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
            <span className="text-white text-lg font-semibold">{cat.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
