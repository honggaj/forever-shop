import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/layout/ProductCard";

export default function CollectionPage() {
  const { products, loading } = useContext(ShopContext);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
