import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/layout/ProductCard";

export default function Collection() {
  const { slug } = useParams(); // slug từ URL
  const { products, loading, setSortBy, setOrder, sortBy, order, setCategory } =
    useContext(ShopContext);

  useEffect(() => {
    // chỉ cần set category → ShopProvider tự fetch
    setCategory(slug || "");
  }, [slug, setCategory]);

  if (loading) return <p>Loading...</p>;

  const handleSortChange = (e) => {
    const value = e.target.value;
    switch (value) {
      case "price-asc":
        setSortBy("price");
        setOrder("asc");
        break;
      case "price-desc":
        setSortBy("price");
        setOrder("desc");
        break;
      case "name-asc":
        setSortBy("name");
        setOrder("asc");
        break;
      case "name-desc":
        setSortBy("name");
        setOrder("desc");
        break;
      case "oldest":
        setSortBy("createdAt");
        setOrder("asc");
        break;
      case "newest":
        setSortBy("createdAt");
        setOrder("desc");
        break;
      default:
        setSortBy("createdAt");
        setOrder("desc");
    }
  };

  const currentValue = (() => {
    if (sortBy === "price" && order === "asc") return "price-asc";
    if (sortBy === "price" && order === "desc") return "price-desc";
    if (sortBy === "name" && order === "asc") return "name-asc";
    if (sortBy === "name" && order === "desc") return "name-desc";
    if (sortBy === "createdAt" && order === "asc") return "oldest";
    return "newest";
  })();

  return (
    <div className="p-4">
      {/* Sort dropdown */}
      <div className="mb-4">
        <select
          id="product-sort"
          name="sort"
          value={currentValue}
          onChange={handleSortChange}
          className="border border-gray-300 p-2 cursor-pointer"
        >
          <option value="newest">Mới nhất</option>
          <option value="oldest">Cũ nhất</option>
          <option value="price-asc">Giá: Tăng dần</option>
          <option value="price-desc">Giá: Giảm dần</option>
          <option value="name-asc">Tên: A-Z</option>
          <option value="name-desc">Tên: Z-A</option>
        </select>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
