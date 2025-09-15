export default function Button({
  children,      // text hiển thị
  onClick,       // hàm xử lý khi click
  type = "button", // "button", "submit", "reset"
  variant = "primary", // style: primary, danger, outline, ...
  className = "",
  ...props       // cho phép truyền thêm (ví dụ disabled, id, data-...)
}) {
  const base =
    "px-4 py-2  font-semibold transition-colors duration-200";
 const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",

    // 🌑 nền đen - chữ trắng
    black: "bg-black text-white hover:bg-gray-800",

    // ⬜ nền trắng - chữ đen + viền đen
    white: "bg-white text-black border border-black hover:bg-gray-100",
  };


  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
