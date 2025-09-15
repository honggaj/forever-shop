import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

export default function RelatedProducts({ category, currentProductId }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!category) return;

    axios
      .get(`http://localhost:5000/api/products?category=${category}`)
      .then((res) => {
        // loại bỏ sản phẩm hiện tại ra khỏi list
        const filtered = res.data.filter((p) => p._id !== currentProductId);
        setProducts(filtered);
      })
      .catch((err) => console.error(err));
  }, [category, currentProductId]);

  if (products.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Sản phẩm tương tự</h2>
      <div className="grid grid-cols-2 sm:grid-cols:3 md:grid-cols-5 lg:grid-cols-6 gap-6">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}
