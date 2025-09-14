export default function ProductCard({ product }) {
    return (
        < >
          <div>
              <img
                src={`http://localhost:5000${product.images[0]}`}
                alt={product.name}
                className="w-full h-46 sm:h-64 object-fit"
            />

            <h3 className="mt-2 font-semibold">{product.name}</h3>
            <p className="text-gray-700">{product.price.toLocaleString()} VNĐ</p>
          </div>
        </>
    );
}
