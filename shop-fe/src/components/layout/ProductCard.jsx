import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div>
      <Link to={`/product/${product._id}`}>
        <div className="relative group aspect-[4/5] w-full overflow-hidden">
          {/* Ảnh chính */}
          <img
            src={`http://localhost:5000${product.images[0]}`}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          />

          {/* Ảnh hover */}
          {product.images[1] && (
            <img
              src={`http://localhost:5000${product.images[1]}`}
              alt={`${product.name}-hover`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          )}

          {/* Overlay nếu hết hàng */}
        {product.stock === 0 && (
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="bg-black bg-opacity-80 text-white text-sm font-bold w-full text-center py-2">
      HẾT HÀNG
    </span>
  </div>
)}


        </div>



        {/* Thông tin */}
        <h3 className="mt-2 font-semibold">{product.name}</h3>
        <p className="text-gray-700">{product.price.toLocaleString()} VNĐ</p>
      </Link>
    </div>
  );
}
