import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from '../components/common/Button'
import RelatedProducts from "../components/layout/RelatedProducts";
import { FaCar } from "react-icons/fa6";
import { IoMdReturnLeft } from "react-icons/io";
import { FaShieldAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [mainImage, setMainImage] = useState(""); // Ảnh chính

  const handleAddToCart = () => console.log("Thêm vào giỏ");
  const handleBuyNow = () => console.log("Mua ngay");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setMainImage(res.data.images[0]); // Mặc định ảnh đầu tiên
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p>Đang tải...</p>;

  return (
    <>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Hình ảnh */}
        <div>
          {/* Ảnh chính */}
          <img
            src={`http://localhost:5000${mainImage}`}
            alt={product.name}
            className="w-full h-auto border border-gray-200"
          />

          {/* Thumbnail */}
          <div className="grid grid-cols-5 gap-2 mt-3">
            {product.images.map((img, i) => (
              <div key={i} className="aspect-square">
                <img
                  src={`http://localhost:5000${img}`}
                  alt={`${product.name}-${i}`}
                  onClick={() => setMainImage(img)} // khi click đổi ảnh chính
                  className={`w-full h-full object-cover border cursor-pointer hover:opacity-80 
                    ${mainImage === img ? "border-black" : "border-gray-200"}
                  `}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Thông tin sản phẩm */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl text-gray-700 font-semibold mt-2">
            {product.price.toLocaleString()} VNĐ
          </p>
          <p className="mt-4 text-gray-700">{product.description}</p>

          {/* Chọn size */}
          {product.size?.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold">SIZE:</h3>
              <div className="flex gap-2 mt-2">
                {product.size.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`px-10 py-2 border border-black ${
                      selectedSize === s
                        ? "bg-black text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chọn màu */}
          {product.color?.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold">COLOR:</h3>
              <div className="flex gap-2 mt-2">
                {product.color.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={`px-6 py-2 border border-black ${
                      selectedColor === c
                        ? "bg-black text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Hành động */}
          <div className="flex gap-4 mt-8">
            <Button onClick={handleAddToCart} variant="black">
              THÊM VÀO GIỎ HÀNG
            </Button>
            <Button onClick={handleBuyNow} variant="white">
              MUA NGAY
            </Button>
          </div>

          {/* Chính sách mua hàng */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2 bg-gray-100 p-4">
              <FaCar className="text-lg" />
              <p>Miễn phí vận chuyển cho đơn hàng từ 500.000đ</p>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 p-4">
              <IoMdReturnLeft className="text-lg" />
              <p>Đổi trả miễn phí trong 7 ngày</p>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 p-4">
              <FaShieldAlt className="text-lg" />
              <p>Bảo hành chính hãng 12 tháng</p>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 p-4">
              <FaPhone className="text-lg" />
              <p>Hỗ trợ khách hàng 24/7: 1900 1234</p>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts
        category={product.category}
        currentProductId={product._id}
      />
    </>
  );
}
