import React, { useContext } from "react";
import Slider from "react-slick";
import { ShopContext } from "../../context/ShopContext";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductCarouselSlick() {
  const { products } = useContext(ShopContext);

  if (!products || products.length === 0) return <p>Loading products...</p>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,      // 3 sản phẩm 1 hàng
    slidesToScroll: 1,    // lướt từng sản phẩm
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
    //    {
    //     breakpoint: 460,
    //     settings: { slidesToShow: 2, slidesToScroll: 1 }
    //   }
    ]
  };

  return (
    <div className="p-10 bg-stone-300">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product._id} className="px-2">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
