import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/layout/ProductCard";

export default function CollectionPage() {
  const { products, loading, setSortBy, setOrder, sortBy, order } = useContext(ShopContext);

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

  // tính value hiện tại của select dựa vào sortBy + order
  const currentValue = (() => {
    if (sortBy === "price" && order === "asc") return "price-asc";
    if (sortBy === "price" && order === "desc") return "price-desc";
    if (sortBy === "name" && order === "asc") return "name-asc";
    if (sortBy === "name" && order === "desc") return "name-desc";
    if (sortBy === "createdAt" && order === "asc") return "oldest";
    return "newest"; // mặc định
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
          <option className="cursor-pointer" value="newest">Mới nhất</option>
          <option className="cursor-pointer" value="oldest">Cũ nhất</option>
          <option className="cursor-pointer" value="price-asc">Giá: Tăng dần</option>
          <option className="cursor-pointer" value="price-desc">Giá: Giảm dần</option>
          <option className="cursor-pointer" value="name-asc">Tên: A-Z</option>
          <option className="cursor-pointer" value="name-desc">Tên: Z-A</option>
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
