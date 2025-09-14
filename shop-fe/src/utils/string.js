// string.js

// Viết hoa chữ cái đầu
export function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Cắt chuỗi dài
export function truncate(str, length = 100) {
  return str.length > length ? str.slice(0, length) + "..." : str;
}
